/* eslint-disable sonarjs/cognitive-complexity */
import { execSync } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { parse as parseYaml } from 'yaml'
import { sources } from '../meta'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SKILLS_DIR = join(ROOT, 'skills')

let token = process.env.GITHUB_TOKEN
if (!token) {
  try {
    token = execSync('gh auth token', { encoding: 'utf8' }).trim()
  }
  catch {
    // ignore
  }
}

function splitSource(source: string) {
  const [owner, repo, ...rest] = source.split('/')
  return {
    owner,
    repo,
    subpath: rest.join('/'),
  }
}

async function github<T>(path: string): Promise<T> {
  const headers: Record<string, string> = { 'user-agent': 'tuquet-skills-pack' }
  if (token)
    headers.authorization = `Bearer ${token}`
  const res = await fetch(`https://api.github.com/${path}`, { headers })
  if (!res.ok)
    throw new Error(`GitHub API ${path}: ${res.status} ${res.statusText}`)
  return res.json() as Promise<T>
}

async function fetchRaw(owner: string, repo: string, path: string): Promise<string> {
  const headers: Record<string, string> = { 'user-agent': 'tuquet-skills-pack' }
  if (token)
    headers.authorization = `Bearer ${token}`
  const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/HEAD/${path}`, { headers })
  if (!res.ok)
    throw new Error(`Raw GitHub ${owner}/${repo}/${path}: ${res.status} ${res.statusText}`)
  return res.text()
}

async function main() {
  console.log('🚀 Starting skills bundle sync...')
  let totalSkills = 0

  for (const src of sources) {
    const { owner, repo, subpath } = splitSource(src.source)
    console.log(`\n📦 Fetching from ${owner}/${repo} (${src.category})...`)

    const treeData = await github<{ tree: { path: string, type: string }[] }>(
      `repos/${owner}/${repo}/git/trees/HEAD?recursive=1`,
    )
    const allPaths = treeData.tree.filter(e => e.type === 'blob').map(e => e.path)

    // Find all SKILL.md files under subpath
    const prefix = subpath
      ? `${subpath}/`
      : ''
    let skillMdPaths = allPaths.filter(p =>
      (p === `${subpath}` && p.endsWith('SKILL.md'))
      || (p.startsWith(prefix) && p.endsWith('/SKILL.md'))
      || (!subpath && p === 'SKILL.md'),
    )

    if (subpath && allPaths.includes(`${subpath}/SKILL.md`)) {
      skillMdPaths = [`${subpath}/SKILL.md`]
    }

    for (const skillMdPath of skillMdPaths) {
      const skillDir = skillMdPath.endsWith('/SKILL.md')
        ? skillMdPath.slice(0, -'/SKILL.md'.length)
        : (skillMdPath === 'SKILL.md'
            ? ''
            : skillMdPath)

      const rawSkillMd = await fetchRaw(owner, repo, skillMdPath)
      const frontmatter = /^---\n([\s\S]*?)\n---/.exec(rawSkillMd)?.[1] ?? ''

      let name: string | undefined
      let description: string | undefined
      try {
        const parsed = parseYaml(frontmatter) as { name?: string, description?: string }
        name = parsed?.name
        description = parsed?.description
      }
      catch {
        for (const line of frontmatter.split('\n')) {
          const trimmed = line.trim()
          if (trimmed.startsWith('name:'))
            name = trimmed.slice(5).trim().replace(/^['"]|['"]$/g, '')
          else if (trimmed.startsWith('description:'))
            description = trimmed.slice(12).trim().replace(/^['"]|['"]$/g, '')
        }
      }

      const inferredName = skillDir
        ? skillDir.split('/').pop()!
        : repo
      const finalName = name || inferredName

      // Check if this skill is in the filter list if specified
      if (src.skills && !src.skills.includes(finalName) && !src.skills.includes(inferredName)) {
        continue
      }

      console.log(`  ✓ Syncing skill: ${finalName}`)
      const targetSkillDir = join(SKILLS_DIR, finalName)

      // Find all files belonging to this skill
      const filesInSkill = skillDir
        ? allPaths.filter(p => p === skillMdPath || p.startsWith(`${skillDir}/`))
        : [skillMdPath]

      for (const filePath of filesInSkill) {
        const relPath = skillDir
          ? relative(skillDir, filePath)
          : filePath
        const targetFilePath = join(targetSkillDir, relPath)
        await mkdir(dirname(targetFilePath), { recursive: true })

        let content = (filePath === skillMdPath)
          ? rawSkillMd
          : await fetchRaw(owner, repo, filePath)

        // Ensure frontmatter has name and description for SKILL.md
        if (filePath === skillMdPath) {
          if (!name) {
            content = content.replace(/^---\n/, `---\nname: ${finalName}\n`)
          }
          if (!description) {
            content = content.replace(/^---\n/, `---\ndescription: ${finalName} skill\n`)
          }
        }

        await writeFile(targetFilePath, content, 'utf8')
      }

      totalSkills++
    }
  }

  console.log(`\n🎉 Successfully bundled ${totalSkills} skills into ${SKILLS_DIR}!`)
}

main().catch((err) => {
  console.error('❌ Error syncing skills:', err)
  process.exit(1)
})
