# Spark Training Site Management

## Overview
Spark (spark.thewicksproject.org) is a training resource site built with Eleventy 3.0 and hosted on Cloudflare Pages. It provides AI training materials for nonprofit organizations.

## Repository
- **Repo:** thewicksproject/spark
- **Branch:** main
- **Deploy:** Push to main triggers GitHub Actions → Cloudflare Pages (~30 sec)
- **Local dev:** `npm start` (serves at localhost:8080)

## Site Structure

### Pages (in `/pages/`)
| Page | URL | Template |
|------|-----|----------|
| Home | `/` | `index.njk` |
| Boundaries | `/boundaries/` | `pages/boundaries.njk` |
| Getting Started | `/getting-started/` | `pages/getting-started.njk` |
| Prompts | `/prompts/` | `pages/prompts.njk` |
| Website Guide | `/website-guide/` | `pages/website-guide.njk` |
| Resources | `/resources/` | `pages/resources.njk` |
| Print Card | `/print-card/` | `pages/print-card.njk` |
| One-Pager | `/one-pager/` | `pages/one-pager.njk` |
| Email | `/email/` | `pages/email-presession.njk` |
| Post-Session | `/post-session/` | `pages/post-session.njk` |

### Data Files (in `/_data/`)
| File | Content |
|------|---------|
| `site.json` | Site metadata, branding |
| `navigation.json` | Nav links |
| `session.json` | Session details, agenda beats |
| `boundaries.json` | Traffic light card (GREEN/YELLOW/RED) |
| `prompts.json` | Starter prompt library by category |
| `resources.json` | Courses, 4D Framework, tools, quick links |
| `websiteGuide.json` | RFY website CMS instructions |

## Common Tasks

### Add a new prompt
Edit `_data/prompts.json`. Find the appropriate category and add a new object:
```json
{
  "title": "Prompt Title",
  "task": "What this is for",
  "cmsSection": "CMS > Path (optional, for website prompts)",
  "prompt": "The full prompt text with [placeholders]"
}
```

### Update session details
Edit `_data/session.json` — date, duration, beats.

### Update boundaries
Edit `_data/boundaries.json` — green/yellow/red items, decision tree, PII guidance.

### Add a new course or resource
Edit `_data/resources.json` — add to `courses`, `tools`, or `quickLinks` arrays.

### Add a new page
1. Create `pages/new-page.njk` with front matter: `layout: base.njk`, `title`, `permalink`
2. Add to `_data/navigation.json` if it should appear in the nav
3. Build and deploy

## Build & Deploy
```bash
npm install          # First time only
npm start            # Local dev server
npx @11ty/eleventy   # Build to _site/
wrangler pages deploy _site --project-name=spark --commit-dirty=true  # Manual deploy
```

## Design
- **Colors:** Wicks palette (warm-white, golden-hour, meadow, charcoal)
- **Typography:** Charter (serif headings), system-ui (body)
- **Layout:** Base template in `_includes/base.njk`
- **CSS:** Single file at `css/styles.css`
- **No analytics, no tracking, no cookies**
