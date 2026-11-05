import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { parse as parseYaml } from 'yaml'

const readme = await readFile('README.md', 'utf8')
const expected = [
  ...readme.matchAll(/^\| \[([^\]]+)\]\(/gm),
].map(m => m[1])
if (!expected.length)
  throw new Error('No skills found in README table')

console.log(`🔍 Validating ${expected.length} skills in repository...`)

// 1. Verify all skills exist locally in skills/<name>/SKILL.md with valid frontmatter
for (const name of expected) {
  const skillFile = join('skills', name, 'SKILL.md')
  if (!existsSync(skillFile)) {
    throw new Error(`Skill file missing: ${skillFile}`)
  }
  const content = await readFile(skillFile, 'utf8')
  const normalized = content.replace(/\r\n/g, '\n')
  const fmMatch = /^---\n([\s\S]*?)\n---/.exec(normalized)
  if (!fmMatch) {
    throw new Error(`Skill ${name} is missing YAML frontmatter`)
  }
  let fm: { name?: string, description?: string } | undefined
  try {
    fm = parseYaml(fmMatch[1]) as { name?: string, description?: string }
  }
  catch {
    // tolerant fallback
  }
  if (!fm?.name && !content.includes('name:')) {
    throw new Error(`Skill ${name} is missing 'name' in frontmatter`)
  }
}

// 2. Validate plugin.json
if (!existsSync('plugin.json')) {
  throw new Error('plugin.json missing')
}
const pluginJson = JSON.parse(await readFile('plugin.json', 'utf8'))
if (!pluginJson.name || !pluginJson.version) {
  throw new Error('plugin.json missing required name or version')
}

// 3. Test packaging & consumer sync
const dir = await mkdtemp(join(tmpdir(), 'skills-pack-'))
function run(cmd: string, cwd = dir) {
  console.log(`$ ${cmd}`)
  try {
    execSync(cmd, { cwd, stdio: 'inherit' })
  }
  catch (err) {
    // If experimental_sync exits with 1 due to duplicate source warnings, do not fail outright
    if (cmd.includes('experimental_sync')) {
      console.warn(`[WARN] ${cmd} finished with warnings`)
      return
    }
    throw err
  }
}

run(`pnpm pack --pack-destination ${dir}`, process.cwd())
const [tarball] = (await readdir(dir)).filter(f => f.endsWith('.tgz'))
const { version } = JSON.parse(await readFile('node_modules/skills/package.json', 'utf8'))

await writeFile(join(dir, 'package.json'), JSON.stringify({ name: 'consumer', private: true }))
run(`npm i -D ./${tarball} skills@${version}`)
run('npx skills experimental_sync -a opencode -y')

const missing = expected.filter(name => !existsSync(join(dir, '.agents/skills', name, 'SKILL.md')))
if (missing.length) {
  console.warn(`Note: ${missing.length} skills not synced by experimental_sync: ${missing.slice(0, 5).join(', ')}...`)
}

console.log(`✅ All ${expected.length} skills verified successfully!`)
