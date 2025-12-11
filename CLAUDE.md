# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 blog application that fetches content from Notion using the Notion API. The blog displays posts with filtering, search, and infinite scroll capabilities.

## Development Commands

### Setup

```bash
npm install
npm run prepare  # Generates Panda CSS types
```

### Development

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
```

### Code Quality

```bash
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint errors automatically
npm run format         # Format code with Prettier
npm run format:check   # Check formatting without changes
```

## Environment Variables

Required in `.env.local`:

- `NOTION_TOKEN` - Notion integration token
- `NOTION_DATABASE_ID` - Notion database ID containing blog posts

## Architecture

### Styling System

This project uses **Panda CSS** (not Tailwind or standard CSS-in-JS). Key points:

- Import `css` function from `@/styled-system/css`
- Use the `className={css({...})}` pattern for styling
- Run `npm run prepare` after modifying `panda.config.ts` to regenerate types
- Output directory is `styled-system/`

#### Color Tokens (panda.config.ts)

**Palette Colors** (with shades 90-5):
- `blue.*` - Blue palette (#0E4287 to #F0F6FF)
- `red.*` - Red palette (#87120C to #FFF3F3)
- `orange.*` - Orange palette (#870000 to #FFEBEB)
- `yellow.*` - Yellow palette (#7E5400 to #FFF9E7)
- `green.*` - Green palette (#005F00 to #E6F5E5)
- `mint.*` - Mint palette (#08463B to #EAFBF8)
- `navy.*` - Navy palette (#132342 to #F2F7FF)
- `violet.*` - Violet palette (#330066 to #F2E6FF)
- `indigo.*` - Indigo palette (#2E098B to #F4E9FF)
- `grey.*` - Grey palette (#1A1A1A to #F7F7F7)
- `coolGrey.*` - Cool Grey palette (#111927 to #F6F8FA)

**Brand Colors**:
- `brand.blue` (#1978F0), `brand.red` (#EB342A), `brand.orange` (#F5692D)
- `brand.yellow` (#FBBD48), `brand.green` (#22A012), `brand.mint` (#43C1AC)
- `brand.navy` (#132342), `brand.violet` (#A541A5), `brand.indigo` (#6C4CDA)

**Brand Light**: `brandLight.*` (brighter versions)
**Brand Soft**: `brandSoft.*` (subtle background colors)
**Brand Pastel**: `brandPastel.*` (pastel versions)

**Semantic Tokens**:
- `system.*` - System tint colors (blue, red, orange, yellow, green, mint, navy, violet, indigo, grey, inverse)
- `bg.default.*`, `bg.grouped.*` - Background colors
- `label.primary`, `label.secondary`, `label.tertiary` - Text labels
- `overlay.*` - Overlay colors (thick, basic, thin, thinYellow, thinRed, thinBlue)
- `separator` - Border/divider color
- `state.hover`, `state.focus` - Interactive states

**Black & White**: `black`, `white`

### Path Aliases

Configured in `tsconfig.json`:

- `@/*` - Project root
- `@components` - `./src/components`
- `@hooks` - `./src/hooks`

### Notion Integration

- `src/lib/notion.ts` - Core Notion API wrapper
  - `getPosts()` - Fetches all posts from database
  - `getPost(pageId)` - Fetches single post with blocks
- Notion properties are in Korean:
  - `이름` - Title property
  - `다중 선택` - Multi-select tags property

### Component Organization

#### Notion Block Rendering

The blog renders Notion blocks using a modular component system:

- `BlockRenderer.tsx` - Central block type router
- `Blocks/` directory - Organized by category:
  - `TextBlocks.tsx` - Paragraphs, headings
  - `ListBlocks.tsx` - Bulleted, numbered, todo
  - `MediaBlocks.tsx` - Images, videos, files
  - `LayoutBlocks.tsx` - Callouts, quotes, columns, dividers
  - `CodeBlocks.tsx` - Code blocks
  - `TableBlocks.tsx` - Table rows
  - `SimpleTableBlock.tsx` - Full table wrapper
  - `BookmarkBlock.tsx`, `EmbedBlock.tsx` - External content

Special rendering logic in `BlogContent.tsx`:

- Groups consecutive table_row blocks under parent table block
- Groups consecutive list items into proper `<ul>`/`<ol>` tags
- Handles empty paragraphs as spacing

#### Pages

- `app/blog/page.tsx` - Blog list with search, tag filtering, and infinite scroll
- `app/blog/[id]/page.tsx` - Individual blog post (uses Next.js revalidation with 10s interval)
- `app/api/posts/route.ts` - API endpoint for fetching posts

#### Key Features

- **Infinite Scroll**: `useInfiniteScroll` hook in `src/hooks/` using IntersectionObserver
- **Client-side Filtering**: Search by title and filter by multiple tags (AND logic)
- **Pagination**: Loads 10 posts at a time

### ESLint Configuration

Custom rules enforced:

- Panda CSS-specific rules via `@pandacss/eslint-plugin`:
  - No hardcoded colors (use tokens)
  - No physical properties (use logical)
  - Prefer atomic and shorthand properties
- `no-console` is a warning (not error)
- Prettier integration with `eslint-config-prettier`

### Prettier Configuration

- No semicolons
- Single quotes (including JSX)
- 2-space indentation
- 80 character line width
- Arrow function parens: avoid

## Common Tasks

### Adding a New Notion Block Type

1. Create component in appropriate `Blocks/*.tsx` file
2. Add case to switch statement in `BlockRenderer.tsx`
3. Handle any special grouping logic in `BlogContent.tsx` if needed

### Modifying Styles

1. Use Panda CSS `css()` function, not inline styles or className strings
2. Reference color tokens from `panda.config.ts`:
   - Palette: `blue.50`, `green.60`, `orange.40` (with shades 90-5)
   - Brand: `brand.blue`, `brand.green`, `brandLight.orange`
   - Semantic: `system.blue`, `label.primary`, `bg.default.base`
3. For hover states, use `_hover` pseudo selector
4. For dark mode, tokens automatically switch with `_dark` variants
5. Run linter to catch Panda CSS violations

### Working with Notion Data

- Posts are cached at page level with 10s revalidation
- Search/filtering happens client-side on the `/blog` page
- The Notion database properties use Korean names - don't change API calls without verifying property names
