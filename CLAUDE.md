# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal tech documentation website built with Docusaurus 3.9.1. The site serves as Andy's frontend engineering notes and portfolio, featuring technical documentation organized by topics (React, Vue, JavaScript, TypeScript, etc.) and a personal introduction page.

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
  - TypeScript
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

部署到 GitHub Pages 的 `gh-pages` branch，production URL 為 `https://andywalking.tw/`。

### 自動部署（推薦）
push 到 `main` 會觸發 `.github/workflows/deploy.yml`，自動用 pnpm build 並推到 `gh-pages`。一般情況下**不需要手動部署**。

### 手動部署（緊急用）
```bash
USE_SSH=true pnpm deploy        # SSH
GIT_USER=southAndy pnpm deploy  # HTTPS
```

## DNS

Domain `andywalking.tw` registered at GoDaddy. 這個 repo 只負責 apex 與 www：

| Type | Name | Value |
|------|------|-------|
| A | @ | `185.199.108-111.153`（4 筆 GitHub Pages IP） |
| CNAME | www | `southandy.github.io.` |

CNAME 檔放在 `static/CNAME`，build 時會被複製到 `gh-pages` branch，custom domain 才會生效。

⚠️ **apex (`@`) 不能有任何非 GitHub IP 的 A record**，否則 Let's Encrypt 驗證失敗、HTTPS 開不起來（其他 subdomain 不受影響）。

## Package Management

統一使用 **pnpm**（`pnpm-lock.yaml` 為唯一 source of truth）。Node.js ≥ 18.0。

`package-lock.json` / `yarn.lock` 已被 `.gitignore` 排除，不要切換套件管理工具。

## Dependabot

`.github/dependabot.yml` 設定每週掃描：
- npm ecosystem：偵測 `pnpm-lock.yaml`，自動產生升級 PR
- github-actions ecosystem：每月檢查 workflow 用到的 actions

PR 風險判斷靠標題版本跳幅（patch/minor 通常可直接合，major 要看 release notes）。