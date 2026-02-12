# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Renato Avellar Nobre, built with React and TypeScript. Deployed to GitHub Pages at https://renatonobre.com.

## Commands

```bash
npm start           # Development server at localhost:3000
npm run build       # Production build to /build
npm test            # Jest tests in watch mode
npm run deploy      # Build and deploy to GitHub Pages
npm run lint        # Run ESLint
npm run lint:fix    # Run ESLint with auto-fix
npm run format      # Format code with Prettier
npm run format:check # Check formatting without modifying
```

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
