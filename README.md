# Tuquet Skills Pack

Tuquet's curated agent skills for AI coding agents (**Antigravity, Cursor, Claude Code, Windsurf**).

A hand-picked collection of high-value [agent skills](https://agentskills.io) bundled directly in this repository so you can install and use them immediately with a single CLI command - **no npm publish required**.

---

## Quick Start

**Fastest path - any agent, one command.** The open [skills CLI](https://github.com/vercel-labs/skills) installs into 70+ agents (Antigravity, Cursor, Claude Code, Codex, Copilot, Cline, and more):

```bash
npx skills add tuquet/skills-pack            # install all skills
npx skills add tuquet/skills-pack --list     # browse before installing
```

Or grab individual skills:

```bash
npx skills add tuquet/skills-pack --skill code-review        # two-axis review (Standards & Spec) before merge
npx skills add tuquet/skills-pack --skill antfu-simplify     # simplify diffs with ablation study
npx skills add tuquet/skills-pack --skill simple-english     # write plain, layman-readable English without AI slop
npx skills add tuquet/skills-pack --skill vue-best-practices # Vue 3 Composition API & TypeScript standards
npx skills add tuquet/skills-pack --skill tauri-app-develop  # Tauri v2 desktop application development
```

> **Scope tip:** By default, `npx skills add` installs skills into the current project (`.agents/skills/`). To install globally across all projects on your machine, pass `-g` (or `--global`).

Prefer a native integration? Pick your tool below.

<details>
<summary><b>Claude Code (recommended)</b></summary>

**Marketplace install:**

```
/plugin marketplace add tuquet/skills-pack
/plugin install skills@tuquet-skills
```

> **SSH errors?** The marketplace clones repos via SSH. If you don't have SSH keys set up on GitHub, either [add your SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) or use the full HTTPS URL to force HTTPS cloning during the marketplace-add step:
> ```bash
> /plugin marketplace add https://github.com/tuquet/skills-pack.git
> /plugin install skills@tuquet-skills
> ```
>
> If `/plugin install` still fails with `git@github.com: Permission denied (publickey)` on Windows or macOS, configure Git once to rewrite GitHub SSH URLs to HTTPS:
> ```bash
> git config --global url."https://github.com/".insteadOf git@github.com:
> ```

**Local / development:**

```bash
git clone https://github.com/tuquet/skills-pack.git
claude --plugin-dir /path/to/skills-pack
```

</details>

<details>
<summary><b>Cursor</b></summary>

Put workflow skills under `.cursor/skills/` (sync from `skills-pack/skills/`) and short policies in `.cursor/rules/*.mdc`. Do not paste full skills into rules. Both directories live in your project; this repo does not ship a `.cursor/` folder.

</details>

<details>
<summary><b>Antigravity CLI</b></summary>

Install as a native plugin for skills.

**Install from the repo:**

```bash
agy plugin install https://github.com/tuquet/skills-pack.git
```

**Install from a local clone:**

```bash
git clone https://github.com/tuquet/skills-pack.git
agy plugin install ./skills-pack
```

</details>

<details>
<summary><b>Gemini CLI</b></summary>

Install as native skills for auto-discovery, or add to `GEMINI.md` for persistent context.

**Install from the repo:**

```bash
gemini skills install https://github.com/tuquet/skills-pack.git --path skills
```

**Install from a local clone:**

```bash
gemini skills install ./skills-pack/skills/
```

</details>

<details>
<summary><b>Windsurf</b></summary>

Add skill contents to your Windsurf rules configuration.

</details>

<details>
<summary><b>OpenCode</b></summary>

Copy skills to `.opencode/skills/` (or `~/.config/opencode/skills/`), add a project-local `AGENTS.md`, and use the built-in `skill` tool for agent-driven execution.

</details>

<details>
<summary><b>GitHub Copilot</b></summary>

Use skill definitions in `.github/copilot-instructions.md`. Invoke the skills by name directly.

Using the standalone `copilot` CLI? Install it as a plugin:

```bash
copilot plugin install https://github.com/tuquet/skills-pack.git
```

</details>

<details>
<summary><b>Codex</b></summary>

Install as a native Codex plugin (Codex CLI v0.122+):

```bash
codex plugin marketplace add tuquet/skills-pack
codex plugin add skills@skills
```

Codex reads the root `skills/` directory directly through `plugin.json`. Once installed, invoke skills in chat using `@` (e.g., `@code-review`).

</details>

<details>
<summary><b>Command Code</b></summary>

Install natively with the built-in `cmd skills` command. Command Code clones the repo, discovers every `SKILL.md`, and installs into `.commandcode/skills/`:

```bash
cmd skills add tuquet/skills-pack            # pick skills to install (project)
cmd skills add tuquet/skills-pack --global   # install for all projects (~/.commandcode/skills/)
cmd skills add tuquet/skills-pack -s code-review  # install a specific skill
```

Installed skills show up in the TUI slash menu.

</details>

<details>
<summary><b>Other Agents</b></summary>

Skills are plain Markdown: they work with any agent that accepts system prompts or instruction files.

</details>

---

## Maintenance

### Update
Update all installed skills to their latest revisions:

```bash
npx skills update
```

### How Skills Activate

1. **Semantic Auto-Discovery:** Agents automatically read the `description` frontmatter in each `SKILL.md` and activate the appropriate skill when your prompt matches its scope (e.g., asking for a code review automatically engages `code-review`).
2. **Explicit Invocation:** Reference skills by name in your prompts (`use skill antfu-simplify to clean up this branch` or `/simple-english: ...`).

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

### Tauri

| Skill | Description | Source |
| --- | --- | --- |
| [tauri](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri/SKILL.md) | Comprehensive index for Tauri framework development, including Rust backend, frontend integration, and full plugin ecosystem. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-autostart](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-autostart/SKILL.md) | Guidance for Tauri v2 autostart setup with platform differences and rollback. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-barcode-scanner](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-barcode-scanner/SKILL.md) | Guidance for Tauri v2 barcode scanner plugin with permissions and scan lifecycle. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-biometric](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-biometric/SKILL.md) | Guidance for Tauri v2 biometric plugin with authentication flow and fallback strategy. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-cli](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-cli/SKILL.md) | Guidance for Tauri v2 CLI plugin with argument schema and app command routing. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-clipboard](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-clipboard/SKILL.md) | Guidance for Tauri v2 clipboard plugin with safe copy, paste, and monitoring flows. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-creator](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-creator/SKILL.md) | Guidance for creating Tauri v2 projects using official create-tauri-app workflows and minimal run verification. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-deep-linking](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-deep-linking/SKILL.md) | Guidance for Tauri v2 deep-linking plugin with URL schemes and safe routing. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-develop](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-develop/SKILL.md) | Guidance for Tauri v2 daily development workflow, debugging, resources, sidecar usage, and testing strategies. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-dialog](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-dialog/SKILL.md) | Guidance for Tauri v2 dialog plugin with native dialogs and unified API design. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-file-system](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-file-system/SKILL.md) | Guidance for Tauri v2 file-system plugin with scoped access and safe file operations. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-frontend-selection](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-frontend-selection/SKILL.md) | Guidance for selecting and configuring frontend frameworks for Tauri v2 with static export compatibility. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-geolocation](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-geolocation/SKILL.md) | Guidance for Tauri v2 geolocation plugin with permission handling and privacy controls. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-global-shortcut](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-global-shortcut/SKILL.md) | Guidance for Tauri v2 global-shortcut plugin with conflict handling and release. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-haptics](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-haptics/SKILL.md) | Guidance for Tauri v2 haptics plugin with feedback patterns and graceful fallback. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-http-client](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-http-client/SKILL.md) | Guidance for Tauri v2 http-client plugin with allowlisted requests and secure transport. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-localhost](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-localhost/SKILL.md) | Guidance for Tauri v2 localhost plugin with local service access and minimal exposure. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-logging](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-logging/SKILL.md) | Guidance for Tauri v2 logging plugin with levels, filtering, and safe diagnostics. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-nfc](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-nfc/SKILL.md) | Guidance for Tauri v2 NFC plugin with session handling and data validation. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-notification](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-notification/SKILL.md) | Guidance for Tauri v2 notification plugin with permission flow and click handling. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-opener](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-opener/SKILL.md) | Guidance for Tauri v2 opener plugin with safe external links and file handling. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-os-info](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-os-info/SKILL.md) | Guidance for Tauri v2 os-info plugin with safe system diagnostics and reporting. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-persisted-scope](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-persisted-scope/SKILL.md) | Guidance for Tauri v2 persisted-scope plugin with expiration and revocation flows. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-planning](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-planning/SKILL.md) | Comprehensive project planning, requirements analysis, and architectural orchestration for Tauri 2.0 applications. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-plugin-permissions](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-plugin-permissions/SKILL.md) | Guidance for Tauri v2 plugin permission authoring, capability generation, and platform differences. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-positioner](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-positioner/SKILL.md) | Guidance for Tauri v2 positioner plugin with multi-display alignment strategies. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-process](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-process/SKILL.md) | Guidance for Tauri v2 process plugin with controlled process information exposure. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-shell](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-shell/SKILL.md) | Guidance for Tauri v2 shell plugin with secure command execution and open behavior. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-sidecar-nodejs](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-sidecar-nodejs/SKILL.md) | Guidance for Tauri v2 sidecar Node.js integration with lifecycle and packaging. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-single-instance](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-single-instance/SKILL.md) | Guidance for Tauri v2 single-instance behavior and second-launch argument handling. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-splashscreen](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-splashscreen/SKILL.md) | Guidance for Tauri v2 splashscreen setup and lifecycle control to avoid white screens. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-sql](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-sql/SKILL.md) | Guidance for Tauri v2 SQL plugin setup, migrations, and safe query access. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-store](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-store/SKILL.md) | Guidance for Tauri v2 store plugin with key-value persistence and lazy loading. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-stronghold](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-stronghold/SKILL.md) | Guidance for Tauri v2 stronghold plugin with encrypted storage and sensitive data handling. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-system-tray](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-system-tray/SKILL.md) | Guidance for Tauri v2 system tray interactions and platform behavior differences. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-updater](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-updater/SKILL.md) | Guidance for Tauri v2 updater plugin with OTA updates and signing keys. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-upload](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-upload/SKILL.md) | Guidance for Tauri v2 upload plugin with file transfer, progress reporting, and headers. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-wasm](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-wasm/SKILL.md) | Guidance for running Rust-compiled WASM in the Tauri v2 frontend. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-websocket](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-websocket/SKILL.md) | Guidance for Tauri v2 websocket plugin with Rust-managed connections and lifecycle handling. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-window-menu](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-window-menu/SKILL.md) | Guidance for Tauri v2 window menu definition, event handling, and shortcuts. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-app-window-state](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-app-window-state/SKILL.md) | Guidance for Tauri v2 window-state plugin to persist window size and position. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-build](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-build/SKILL.md) | Guidance for Tauri v2 production builds, signing, and distribution artifacts. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-concept](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-concept/SKILL.md) | Guidance for Tauri v2 architecture concepts, process model, and IPC isolation patterns. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-config](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-config/SKILL.md) | Guidance for Tauri v2 tauri.conf.json structure, lifecycle management, and CSP configuration. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-framework-security](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-framework-security/SKILL.md) | Guidance for Tauri v2 security model, baseline hardening, and runtime authority controls. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-framework-upgrade](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-framework-upgrade/SKILL.md) | Guidance for upgrading to stable Tauri v2 from v1 or v2 beta with migration checks. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-ipc](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-ipc/SKILL.md) | Guidance for Tauri v2 IPC with frontend invoke calls, Rust commands, and type-safe bindings. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-mobile](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-mobile/SKILL.md) | Guidance for Tauri v2 mobile development setup, debugging, and bundle identifiers. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-scaffold](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-scaffold/SKILL.md) | Guidance for Tauri v2 project scaffolding with create-tauri-app, project structure, and frontend static export configuration. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-security](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-security/SKILL.md) | Guidance for Tauri v2 capabilities, scope configuration, and ACL-based permission control. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-setup](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-setup/SKILL.md) | Guidance for Tauri v2 prerequisites and environment setup across macOS, Windows, Linux, and mobile Android iOS targets. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |
| [tauri-window](https://github.com/full-stack-skills/tauri-skills/blob/HEAD/skills/tauri-window/SKILL.md) | Guidance for Tauri v2 window creation, configuration, lifecycle management, and custom titlebar UI. | [full-stack-skills/tauri-skills](https://github.com/full-stack-skills/tauri-skills/tree/HEAD/skills) |

<!-- skills:end -->

## License

[MIT](./LICENSE) License © [Tuquet Contributors](https://github.com/tuquet)
