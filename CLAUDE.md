# VanesaSellingComics - AI Context

## Quick Reference

**Business:** Comic book & collectibles buyer/seller
**Owner:** Tony
**Phone:** (646) 460-5596 - THIS IS THE PRIMARY CTA EVERYWHERE
**Email:** vanesasellingcomics@gmail.com
**Website:** https://vanesasellingcomics.online
**eBay:** https://www.ebay.com/str/vanesasellingcomics
**Whatnot:** https://www.whatnot.com/user/vanesasellingcomics

## Tech Stack

- **Framework:** Next.js 14 (App Router, Static Export)
- **Styling:** Tailwind CSS with comic book theme
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Server:** nginx on 95.217.108.40
- **DNS/SSL:** Cloudflare
- **Domain:** Namecheap

## Key Commands

```bash
# Development
npm run dev          # Port 3005

# Build & Deploy
npm run build        # Creates /out
rsync -avz out/ /var/www/vanesasellingcomics.online/
systemctl reload nginx
```

## Project Structure

```
/opt/sites/vanessa-selling-comics/
├── .mds/                    # Enterprise documentation
│   ├── 00-PROJECT-OVERVIEW.md
│   ├── 01-ARCHITECTURE.md
│   ├── 02-MARKETING-STRATEGY.md
│   ├── 03-SEO-CONTENT-PLAN.md
│   ├── 04-DEPLOYMENT-GUIDE.md
│   ├── 05-LEAD-MANAGEMENT.md
│   └── 06-ROADMAP.md
├── marketing/               # Marketing templates
├── src/
│   ├── app/                 # Pages
│   │   ├── sell/           # Lead gen page
│   │   ├── sell-comics-*/  # Location pages
│   │   ├── blog/           # Blog articles
│   │   └── api/contact/    # Form API
│   ├── components/         # React components
│   └── lib/constants.ts    # Site config (phone, email, etc.)
└── public/                  # Static assets
```

## Business Context

1. **Selling Side:** eBay store + Whatnot live streams
2. **Buying Side:** Acquire collections in NY, NJ, PA, MD
3. **Target Leads:** Estate inheritors, downsizers, collectors

## Lead Generation

- Phone calls are PRIORITY ONE - (646) 460-5596
- Forms go to vanesasellingcomics@gmail.com
- Location pages target local SEO
- Blog targets informational queries

## Design Principles

- Comic book aesthetic (Bangers font, thick borders)
- Colors: Yellow #FFD700, Red #E31C23, Blue #0072CE
- Phone number should be visible and flashy on EVERY page
- Mobile-first (floating call button, sticky call bar)

## Stats

- 99.9% positive eBay feedback
- 2,900+ items sold
- 455 Whatnot followers

## Documentation

See `/.mds/` folder for comprehensive enterprise documentation:
- Project overview and goals
- Technical architecture
- Marketing strategy
- SEO content plan
- Deployment procedures
- Lead management
- Business roadmap
