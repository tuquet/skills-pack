export interface Source {
  /** Any source the `skills` CLI accepts: `owner/repo`, `owner/repo/sub/path`, ... */
  source: string
  category: string
  /** Skill names to pick; omitted means every skill in the source. */
  skills?: string[]
}

export const sources: Source[] = [
  {
    source: 'vercel-labs/skills/find-skills',
    category: 'Find Skills',
  },
  {
    source: 'mattpocock/skills',
    category: 'Workflow',
  },
  {
    source: 'shadcn/improve',
    category: 'Workflow',
  },
  {
    source: 'nodnarbnitram/claude-code-extensions',
    category: 'Tauri',
  },
  {
    source: 'anthropics/skills/skills/frontend-design',
    category: 'Design',
  },
  {
    source: 'supabase/agent-skills',
    category: 'Supabase',
  },
]
