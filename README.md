# Tuquet Skills Pack

Tuquet's curated agent skills for AI coding agents (**Antigravity, Cursor, Claude Code, Windsurf**).

A hand-picked collection of high-value [agent skills](https://agentskills.io) bundled directly in this repository so you can install and use them immediately with a single CLI command - **no npm publish required**.

---

## Cài đặt & Sử dụng (Installation)

Sử dụng trực tiếp qua GitHub bằng CLI [`skills`](https://github.com/vercel-labs/skills):

### 1. Cài đặt toàn bộ Skills (Khuyên dùng)
Tự động tải và cài đặt toàn bộ kỹ năng vào các Agent trên máy:
```bash
npx skills add tuquet/skills-pack --all
```

### 2. Xem trước danh sách kỹ năng có sẵn (không cài đặt)
Liệt kê toàn bộ kỹ năng kèm mô tả chi tiết:
```bash
npx skills add tuquet/skills-pack -l
```

### 3. Chọn từng kỹ năng theo nhu cầu (Interactive)
```bash
npx skills add tuquet/skills-pack
```

### 4. Chỉ định cài đặt cho riêng Antigravity hoặc Cursor
```bash
npx skills add tuquet/skills-pack -a antigravity,cursor --all
```

---

## Cập nhật (Update)

Để cập nhật toàn bộ skills đã cài đặt lên bản mới nhất:
```bash
npx skills update
```

---

## Danh mục Kỹ năng (Available Skills)

<!-- skills:start -->

### Workflow

| Skill | Description | Source |
| --- | --- | --- |
| [grill-me](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/grill-me/SKILL.md) | A relentless interview to sharpen a plan or design. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grilling](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/grilling/SKILL.md) | Grill the user relentlessly about a plan, decision, or idea. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [handoff](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/handoff/SKILL.md) | Compact the current conversation into a handoff document for another agent to pick up. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [to-questionnaire](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/to-questionnaire/SKILL.md) | Turn a decision you can't fully answer into a questionnaire for someone else to fill in. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [writing-for-agents](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/writing-for-agents/SKILL.md) | Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [teach](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/teach/SKILL.md) | Teach the user a new skill or concept, within this workspace. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [code-review](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/code-review/SKILL.md) | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [codebase-design](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/codebase-design/SKILL.md) | Shared vocabulary for designing deep modules. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [research](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/research/SKILL.md) | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [tdd](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/tdd/SKILL.md) | Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [improve](https://github.com/shadcn/improve/blob/HEAD/skills/improve/SKILL.md) | Survey any codebase as a senior advisor and produce prioritized, self-contained implementation plans for OTHER models/agents to execute. | [shadcn/improve](https://github.com/shadcn/improve) |
| [dry-refactoring](https://github.com/kucherenko/jscpd/blob/HEAD/skills/dry-refactoring/SKILL.md) | Guided workflow to eliminate copy-paste duplication detected by jscpd. | [kucherenko/jscpd](https://github.com/kucherenko/jscpd/tree/HEAD/skills/dry-refactoring) |
| [antfu](https://github.com/tuquet/skills/blob/HEAD/skills/antfu/SKILL.md) | Tuquet's opinionated tooling and conventions for JavaScript/TypeScript projects. | [antfu/skills](https://github.com/antfu/skills) |
| [antfu-create-pr](https://github.com/tuquet/skills/blob/HEAD/skills/antfu-create-pr/SKILL.md) | Create a reviewable GitHub pull request from the current branch with a Conventional Commits title, a concise evidence-based body, and before/after screenshots for UI changes. | [antfu/skills](https://github.com/antfu/skills) |
| [antfu-issue-triage](https://github.com/tuquet/skills/blob/HEAD/skills/antfu-issue-triage/SKILL.md) | Triage open issues and PRs of the current GitHub repo - find already-fixed, duplicate, and spam items, suggest labels, gauge demand from reactions and comments, then present a table of proposed actions and comments for confirmation before touching anything. | [antfu/skills](https://github.com/antfu/skills) |
| [antfu-simplify](https://github.com/tuquet/skills/blob/HEAD/skills/antfu-simplify/SKILL.md) | Simplify the changes of the current PR or working tree with an ablation study - remove each piece of the diff and keep only what is proven needed - so the result has just-right abstraction, minimal clean code, and stays robust and universal. | [antfu/skills](https://github.com/antfu/skills) |
| [antfu-query](https://github.com/tuquet/skills/blob/HEAD/skills/antfu-query/SKILL.md) | Interview the user relentlessly about a plan, decision, or idea until reaching a shared understanding, using the agent's interactive question tool (not plain text). | [antfu/skills](https://github.com/antfu/skills) |

### Writing

| Skill | Description | Source |
| --- | --- | --- |
| [simple-english](https://github.com/AminBlg/SimpleEnglish/blob/HEAD/skills/simple-english/SKILL.md) | Write or rewrite text in plain, layman-readable English in the spirit of ASD-STE100 Simplified Technical English: short sentences, active voice, simple tenses, one word one meaning, condition before command, every technical term defined at first use, no AI slop. | [AminBlg/SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) |
| [unslop](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/unslop/SKILL.md) | Cut AI tells from any writing. Must always apply. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack/skills/unslop) |
| [i-have-adhd](https://github.com/ayghri/i-have-adhd/blob/HEAD/skills/i-have-adhd/SKILL.md) | Shape output for a reader with ADHD: lead with the next action, number multi-step work, restate state across turns, suppress tangents, give specific time estimates, make wins visible. | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) |

### Vue & Nuxt

| Skill | Description | Source |
| --- | --- | --- |
| [vue-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-best-practices/SKILL.md) | MUST be used for Vue.js tasks. Strongly recommends Composition API with `<script setup>` and TypeScript as the standard approach. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-router-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-router-best-practices/SKILL.md) | Vue Router 4 patterns, navigation guards, route params, and route-component lifecycle interactions. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-pinia-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-pinia-best-practices/SKILL.md) | Pinia stores, state management patterns, store setup, and reactivity with stores. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-testing-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-testing-best-practices/SKILL.md) | Use for Vue.js testing. Covers Vitest, Vue Test Utils, component testing, mocking, testing patterns, and Playwright for E2E testing. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-debug-guides](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-debug-guides/SKILL.md) | Vue 3 debugging and error handling for runtime errors, warnings, async failures, and SSR/hydration issues. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [create-adaptable-composable](https://github.com/vuejs-ai/skills/blob/HEAD/skills/create-adaptable-composable/SKILL.md) | Create a library-grade Vue composable that accepts maybe-reactive inputs (MaybeRef / MaybeRefOrGetter) so callers can pass a plain value, ref, or getter. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [nuxt-modules](https://github.com/onmax/nuxt-skills/blob/HEAD/skills/nuxt-modules/SKILL.md) | Use when creating Nuxt modules: (1) Published npm modules (@nuxtjs/, nuxt-), (2) Local project modules (modules/ directory), (3) Runtime extensions (components, composables, plugins), (4) Server extensions (API routes, middleware), (5) Releasing/publishing modules to npm, (6) Setting up CI/CD workflows for modules. | [onmax/nuxt-skills](https://github.com/onmax/nuxt-skills) |

### Design

| Skill | Description | Source |
| --- | --- | --- |
| [frontend-design](https://github.com/anthropics/skills/blob/HEAD/skills/frontend-design/SKILL.md) | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. | [anthropics/skills](https://github.com/anthropics/skills/tree/HEAD/skills/frontend-design) |

### Browser

| Skill | Description | Source |
| --- | --- | --- |
| [agent-browser](https://github.com/vercel-labs/agent-browser/blob/HEAD/skills/agent-browser/SKILL.md) | Browser automation CLI for AI agents. Use when the user needs to interact with websites, including navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, testing web apps, or automating any browser task. | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) |

<!-- skills:end -->

## License

[MIT](./LICENSE) License © [Tuquet Contributors](https://github.com/tuquet)
