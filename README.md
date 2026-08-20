# DevDiff Plugin Starter Template (`devdiff-template-plugin`)

Official starter template for creating custom plugins for **[DevDiff](https://devdiff.vercel.app)** using **`@eldrex/plugin-sdk`**.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717.svg?style=flat&logo=github)](https://github.com/EldrexDelosReyesBula/devdiff-template-plugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![DevDiff Plugin SDK](https://img.shields.io/npm/v/@eldrex/plugin-sdk)](https://www.npmjs.com/package/@eldrex/plugin-sdk)

---

## 🚀 Quickstart

### 1. Click "Use this template" on GitHub
Or clone directly:

```bash
git clone https://github.com/EldrexDelosReyesBula/devdiff-template-plugin.git my-devdiff-plugin
cd my-devdiff-plugin
```

### 2. Install Dependencies & Build

```bash
# Install dependencies
pnpm install # or npm install

# Build distribution bundle
pnpm build

# Run tests
pnpm test
```

---

## 📁 Project Structure

```
my-devdiff-plugin/
├── src/
│   └── index.ts          # Main plugin manifest, hooks, and commands
├── tests/
│   └── index.test.ts     # Unit tests
├── package.json          # Package manifest & scripts
├── tsconfig.json         # TypeScript configuration
└── tsup.config.ts        # Bundler configuration
```

---

## 🧩 Plugin Anatomy (`src/index.ts`)

```typescript
import { DevDiffPlugin, PluginContext, ParsedDiff, ChangelogResult } from "@eldrex/plugin-sdk";

export const plugin: DevDiffPlugin = {
  id: "my-custom-plugin",
  name: "My Custom Plugin",
  version: "1.0.0",
  description: "Extends DevDiff with custom superpowers",
  author: {
    name: "Your Name",
    email: "you@example.com",
  },
  devdiffVersion: ">=1.0.0",

  // 1. Lifecycle Hooks
  async activate(context: PluginContext) {
    context.logger.info("Plugin activated!");
  },

  async deactivate() {
    // Cleanup resources
  },

  // 2. Event Hooks
  hooks: {
    async beforeAnalysis(diff: ParsedDiff) {
      // Modify or enrich diff before AI processing
      return diff;
    },

    async afterAnalysis(changelog: ChangelogResult) {
      // Process generated changelog (e.g. forward to Slack, Jira, Discord)
      return changelog;
    },
  },

  // 3. Custom CLI Commands
  commands: [
    {
      name: "my-command",
      description: "Run custom plugin action",
      handler: async (args) => {
        console.log("Custom command executed!");
      },
    },
  ],
};

export default plugin;
```

---

## 📦 Publishing Your Plugin

Once your plugin is ready:

1. Update `name`, `version`, and `description` in `package.json`.
2. Publish to npm:
   ```bash
   npm publish --access public
   ```
3. Users can now install your plugin via:
   ```bash
   devdiff plugin add <your-package-name>
   ```

---

## 📄 License

[MIT](LICENSE) © Eldrex Delos Reyes Bula and Contributors
