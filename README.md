<div align="center">
    <img src="docs/assets/copy.svg" alt="logo" width="150" height="150" />

<h2 align="center">TON SvelteKit Template</h2>
</div>

A minimal, production-ready starter template for building SvelteKit apps targeting the TON ecosystem. This repository includes a SvelteKit front-end, Tact contract source, build helpers, and sensible defaults so you can scaffold a new project rapidly.

## Table of Contents

- [Project Overview](#project-overview)
- [Who It's For](#who-its-for)
- [Included Features](#included-features)
- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running](#running)
- [Key Files & Structure](#key-files--structure)
- [Development & Testing](#development--testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This template provides a modern SvelteKit application scaffold configured for rapid development with TON smart contracts (Tact). It focuses on a clean developer experience, sensible defaults, and clear places to customize for your project.

## Who It's For

- Developers who want a SvelteKit-based frontend pre-wired with TON contract sources and build tooling.
- Teams wanting a reproducible starter kit for rapid prototyping and production readiness.

## Included Features

- SvelteKit app structure (TypeScript-ready)
- Tact contract sources in `contracts/` and build scripts under `tact/`
- Example routes and components in `src/`
- Test skeleton under `tests/` with Jest configuration
- Opinionated Vite + Tailwind / PostCSS friendly setup (adjustable)
- Useful NPM scripts for development, build, and preview

## Quick Start

Clone and install dependencies:

```bash
git clone https://github.com/tejks/ton-sveltekit-template
cd ton-sveltekit-template
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production and preview:

```bash
npm run build
npm run preview
```

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- If you will build/deploy contracts: Rust + Tact toolchain (see `tact.config.json` / `tact/`)

## Installation

Follow the Quick Start above. For contract compilation or local TON node integrations, consult the `tact/` scripts and the `contracts/` folder.

## Running

- `npm run dev` — Start development server (hot reload)
- `npm run build` — Create production build
- `npm run preview` — Preview built app

Check `package.json` for additional convenience scripts.

## Key Files & Structure

- [src/](src/) — Frontend source (routes, components, lib)
- [contracts/](contracts/) — Tact contract sources
- [tact/](tact/) — Contract build and helper scripts
- [tests/](tests/) — Test files and configuration
- `package.json` — Scripts and dependencies
- `vite.config.ts`, `svelte.config.js`, `tsconfig.json` — core build/config files

## Development & Testing

- Run linter/formatter before committing: `npm run lint`, `npm run format` (if configured).
- Run unit tests: `npm test` or `npm run test`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines. Short summary:

- Fork the repo and open a pull request from a feature branch.
- Keep changes focused and include tests for new logic.
- Follow commit/message and branching conventions documented in `CONTRIBUTING.md`.

## License

This template is provided under the MIT License. See the `LICENSE` file for details.
