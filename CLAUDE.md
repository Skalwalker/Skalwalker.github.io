# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Renato Avellar Nobre, built with React and TypeScript. Deployed to GitHub Pages at https://renatonobre.com.

## Commands

```bash
npm start            # Development server at localhost:3000
npm run build        # Production build to /build
npm run deploy       # Build and deploy to GitHub Pages (runs release first)
npm run release      # Full pre-release check: typecheck + lint + format:check + build
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check formatting without modifying
npm run typecheck    # TypeScript type checking only (tsc -b)
```

**Workflow:** Before committing, always run `npm run release` to catch type errors, lint violations, and formatting issues. Use `npm run lint:fix` and `npm run format` to auto-fix issues, then re-run `npm run release` to confirm clean.

## Architecture

**Stack:** React 18 + TypeScript + Bootstrap 5 + React Router v6

**Directory Structure:**

- `src/views/` - Page-level components (About, Experience, Achievements, Publications, Projects)
- `src/components/` - Reusable components organized by feature (about/, achievements/, papers/, projects/, resume/, shared/)
- `src/assets/` - CSS/SCSS stylesheets and images
- `src/routes.tsx` - All route definitions with React Router
- `src/App.tsx` - Root component with splash screen logic
- `public/` - Static assets including project preview images

**Routing:** Root (`/`) redirects to `/about`. About section has nested routes for Core, Likes, and Skills. Projects section has individual pages for each project (covid_19, aurora, global_warming, ecosampling, vital_signs).

**Styling:** Mix of component-specific CSS files in `src/assets/css/` and Bootstrap utilities. Custom Bootstrap variables in `custom-variables-bootstrap-2021-01-11.scss`.

## Code Style

Config files: `eslint.config.js` and `.prettierrc` — always follow these when writing code.

**Key ESLint rules:**

- No default exports (`import/no-default-export`) — use named exports only
- Import order enforced: builtin → external → internal, alphabetized, with newlines between groups
- Explicit function return types required (`@typescript-eslint/explicit-function-return-type`)
- No `any` types (`@typescript-eslint/no-explicit-any`)
- Strict boolean expressions — no implicit truthiness checks
- Naming: camelCase for variables/functions, PascalCase for React components and types
- Arrow functions preferred for callbacks (`prefer-arrow-callback`)

**Key Prettier rules (`.prettierrc`):**

- Single quotes, semicolons, 100-char print width
- 2-space indentation, trailing commas (ES5), arrow parens always
