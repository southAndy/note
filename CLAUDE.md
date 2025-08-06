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
  - Favicon: `img/andy-walking-logo.svg`
  - Custom domain: `https://www.andy-walking.dev/`
  - FontAwesome integration for social icons
- `sidebars.js` - Sidebar configuration using auto-generated structure from docs folder
- `src/css/custom.css` - Custom styling overrides

### Custom Theme Components
- `src/theme/BlogPostPage/` - Customized blog post layout with metadata and structured data
- `src/theme/DocPaginator/` - Custom pagination component

### Key Features
- Giscus integration for comments (@giscus/react)
- Auto-generated sidebar from file structure
- FontAwesome icons for social media links
- Custom CSS styling with dual theme support (light/dark)

## Content Management

Documentation files are markdown-based and organized by topic in the `docs/` directory. The sidebar is automatically generated from the folder structure. Images should be placed in `static/img/` with subdirectories for organization (e.g., `static/img/react/`, `static/img/eventloop/`).

## Deployment

The site is configured for GitHub Pages deployment to the `gh-pages` branch. The production URL is set to `https://www.andy-walking.dev/` with a custom domain configured via CNAME.