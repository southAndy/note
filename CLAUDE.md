# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal tech documentation website built with Docusaurus 3.4.0. The site serves as Andy's frontend engineering notes and portfolio, featuring technical documentation organized by topics (React, Vue, JavaScript, CSS, etc.) and a personal introduction page.

## Development Commands

```bash
# Start development server (with hot reload)
npm start
# or
yarn start

# Build for production
npm run build
# or  
yarn build

# Serve production build locally
npm run serve
# or
yarn serve

# Deploy to GitHub Pages
npm run deploy
# or
yarn deploy

# Clear Docusaurus cache
npm run clear
# or
yarn clear

# Other available commands
npm run swizzle                    # Customize Docusaurus components
npm run write-translations        # Generate translation files
npm run write-heading-ids          # Generate heading IDs for docs
```

## Architecture & Key Components

### Content Organization
- `docs/` - Technical documentation organized by technology (React/, Vue/, Javascript/, etc.)
- `static/img/` - Static assets including images and icons
- `src/pages/index.js` - Custom homepage with personal introduction
- `src/components/HomepageFeatures/` - Homepage component showing personal profile and social links

### Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration
  - Site title: "Andy Walking"
  - Favicon: `img/andy-walking-logo.png`
  - Production URL: `https://andywalking.tw/`
  - GitHub Pages: org `southAndy`, repo `note`, deploy branch `gh-pages`
  - FontAwesome integration for social icons
  - Algolia search integration (appId: F9787KWW5D, indexName: andywalking-blog)
- `sidebars.js` - Manual sidebar configuration with structured categories
- `src/css/custom.css` - Custom styling overrides

### Custom Theme Components
- `src/theme/BlogPostPage/` - Customized blog post layout with metadata and structured data
- `src/theme/DocPaginator/` - Custom pagination component

### Key Features
- Giscus integration for comments (@giscus/react)
- Manual sidebar configuration with categorized sections
- FontAwesome icons for social media links
- Custom CSS styling with dual theme support (light/dark)
- Algolia search integration for full-text search
- Custom metadata and structured data for blog posts
- Prism syntax highlighting with duotone light/dark themes

## Content Management

Documentation files are markdown-based and organized by topic in the `docs/` directory. Each file should include frontmatter with `title` and `description` fields. The sidebar is manually configured in `sidebars.js` with structured categories:

- **學習拼圖** (Learning Components) - Main technical documentation
  - React 生態系 (React Ecosystem)
  - Vue 生態系 (Vue Ecosystem) 
  - JavaScript 奇奇怪怪 (JavaScript Quirks)
  - 工具鏈配置 (Toolchain Configuration)
- **開發工具** (Development Tools) - Tool-focused documentation

Images should be placed in `static/img/` with subdirectories for organization (e.g., `static/img/react/`, `static/img/eventloop/`).

### Markdown File Standards

All `.md` files must follow these formatting standards:

**Frontmatter Requirements:**
```yaml
---
title: 具體且描述性的標題
description: 清楚說明文件內容的描述，包含主要概念和涵蓋範圍
---
```

**File Structure:**
- 文件開頭不能有空行，必須直接以 `---` 開始
- frontmatter 後空一行再開始內容
- 使用 `# 標題` 作為主標題（與 frontmatter title 可以不同）
- 使用階層式標題結構：`##`、`###`、`####`

**Content Guidelines:**
- 程式碼區塊使用適當的語言標記（如 `jsx`、`javascript`、`bash`）
- 圖片引用使用相對路徑指向 `static/img/` 目錄
- 使用 Docusaurus 的 admonition 語法（如 `:::warning`、`:::info`）
- 中英文混排時，在中英文之間加空格（但程式碼除外）

## Deployment

The site is configured for GitHub Pages deployment to the `gh-pages` branch. The production URL is set to `https://andywalking.tw/` with a custom domain configured via CNAME. Deploy using:

```bash
# Deploy with SSH (preferred)
USE_SSH=true yarn deploy

# Deploy with HTTPS
GIT_USER=southAndy yarn deploy
```

## Package Management

The project supports both npm and yarn. Node.js version 18.0+ is required. A `pnpm-lock.yaml` file exists, indicating pnpm is also used for package management.