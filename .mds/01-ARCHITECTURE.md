# Technical Architecture

## Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.x | React framework with App Router |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 3.4.x | Utility-first styling |
| Framer Motion | 11.x | Animations & transitions |
| Lucide React | Latest | Icon library |

### Backend
| Technology | Purpose |
|------------|---------|
| Next.js API Routes | Form handling, future API endpoints |
| Static Export | Production deployment as static files |

### Infrastructure
| Component | Details |
|-----------|---------|
| Server | 95.217.108.40 (Hetzner) |
| OS | Debian Linux |
| Web Server | nginx |
| SSL | Cloudflare (Full mode) |
| DNS | Cloudflare |
| Domain Registrar | Namecheap |

---

## Project Structure

```
/opt/sites/vanessa-selling-comics/
├── .mds/                    # Project documentation
├── marketing/               # Marketing templates
│   ├── craigslist-post.md
│   ├── facebook-marketplace-post.md
│   ├── estate-company-outreach.md
│   └── google-ads-structure.md
│
├── public/
│   └── images/
│       └── placeholder-*.svg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   │
│   │   ├── sell/
│   │   │   └── page.tsx       # Lead generation page
│   │   │
│   │   ├── sell-comics-new-york/
│   │   │   └── page.tsx       # NY location page
│   │   ├── sell-comics-new-jersey/
│   │   │   └── page.tsx       # NJ location page
│   │   ├── sell-comics-pennsylvania/
│   │   │   └── page.tsx       # PA location page
│   │   ├── sell-comics-maryland/
│   │   │   └── page.tsx       # MD location page
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx       # Blog index
│   │   │   ├── how-to-sell-comic-book-collection/
│   │   │   ├── what-are-my-comics-worth/
│   │   │   ├── selling-inherited-comics/
│   │   │   └── signs-your-comics-are-valuable/
│   │   │
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts   # Form submission API
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── WhatnotSchedule.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── CallTonyBanner.tsx
│   │
│   └── lib/
│       └── constants.ts       # Site configuration
│
├── CLAUDE.md                  # AI context file
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Key Files

### Configuration: `/src/lib/constants.ts`
Central configuration file containing:
- Site metadata
- Contact information (phone, email)
- Navigation links
- Service areas
- Placeholder data

### Layout: `/src/app/layout.tsx`
- Root HTML structure
- Header/Footer inclusion
- Floating call button
- Mobile call bar

### Styling: `/src/app/globals.css`
- Tailwind imports
- Custom component classes (.comic-card, .comic-button, etc.)
- Comic book aesthetic utilities

---

## Build & Deploy Process

```bash
# Development
npm run dev           # Start dev server on port 3005

# Production Build
npm run build         # Creates /out directory (static export)

# Deployment
rsync -avz out/ /var/www/vanesasellingcomics.online/
systemctl reload nginx
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| RESEND_API_KEY | Email API key | Future |
| EBAY_APP_ID | eBay API credentials | Future |

---

## API Endpoints

### POST /api/contact
Handles form submissions from:
- `/sell` page quote form
- Contact section forms

**Request Body:**
```json
{
  "name": "string",
  "email": "string?",
  "phone": "string",
  "zip": "string?",
  "collectionSize": "string?",
  "description": "string?",
  "formType": "string?"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Cumulative Layout Shift | < 0.1 |

---

## Security Considerations

- [x] No sensitive data in client-side code
- [x] Form validation on server
- [x] HTTPS enforced via Cloudflare
- [x] No database (static site, minimal attack surface)
- [ ] Rate limiting on API routes (TODO)
- [ ] CAPTCHA on forms (TODO)

---

*Architecture Document v1.0*
*Last Updated: January 2026*
