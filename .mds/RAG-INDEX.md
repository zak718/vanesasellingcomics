# VanesaSellingComics RAG Index

## Project Files Index

This document serves as a retrieval-augmented generation (RAG) index for the VanesaSellingComics project, enabling AI assistants to quickly understand and navigate the codebase.

---

## Core Configuration

### `/src/lib/constants.ts`
Central configuration containing:
- Site name, tagline, description
- **Phone:** (646) 460-5596
- **Email:** vanesasellingcomics@gmail.com
- eBay/Whatnot URLs
- Navigation links
- Service areas
- Categories
- Placeholder data

### `/next.config.mjs`
Next.js configuration:
- Static export enabled (output: 'export')
- Image optimization disabled for static

### `/tailwind.config.ts`
Design system:
- Comic book colors (yellow, red, blue)
- Custom fonts (Bangers, Inter)
- Shadow utilities (comic-style)

---

## Layout Components

### `/src/app/layout.tsx`
Root layout structure:
- HTML/body wrapper
- Header component
- Main content area
- Footer component
- Floating call button (CallTonyBanner)
- Mobile call bar (MobileCallBar)

### `/src/components/layout/Header.tsx`
Navigation header:
- Top call banner (red, "CALL TONY")
- Logo with comic-style badge
- Desktop navigation
- Mobile hamburger menu
- CTA buttons (Call, eBay, Whatnot)

### `/src/components/layout/Footer.tsx`
Site footer:
- Large "Got Comics? Call Tony!" section
- Brand column
- Quick links
- Shop links
- Contact info
- Stats bar

### `/src/components/CallTonyBanner.tsx`
Phone CTA component with variants:
- `header`: Top banner style
- `floating`: Fixed bottom-right button
- `inline`: Inline button
- `hero`: Large hero-style CTA
Also exports: `MobileCallBar` (fixed bottom bar on mobile)

---

## Pages

### `/src/app/page.tsx`
Homepage sections:
- Hero with CTA
- Stats bar
- Featured products
- Whatnot schedule
- About section
- Contact section

### `/src/app/sell/page.tsx`
Lead generation page:
- Hero with phone CTA
- "What We Buy" section
- "How It Works" process
- Service areas grid
- Quote request form
- FAQ accordion
- Final CTA

### Location Pages
All follow same pattern:
- `/src/app/sell-comics-new-york/page.tsx`
- `/src/app/sell-comics-new-jersey/page.tsx`
- `/src/app/sell-comics-pennsylvania/page.tsx`
- `/src/app/sell-comics-maryland/page.tsx`

Each includes:
- State-specific hero
- Phone CTA button
- Areas served grid
- State-specific content
- CTA section

### Blog Pages
- `/src/app/blog/page.tsx` - Blog index
- `/src/app/blog/how-to-sell-comic-book-collection/page.tsx`
- `/src/app/blog/what-are-my-comics-worth/page.tsx`
- `/src/app/blog/selling-inherited-comics/page.tsx`
- `/src/app/blog/signs-your-comics-are-valuable/page.tsx`

---

## API Routes

### `/src/app/api/contact/route.ts`
POST endpoint for form submissions:
- Validates name and phone (required)
- Logs submission to console
- TODO: Resend integration to vanesasellingcomics@gmail.com
- Returns success/error JSON

---

## Section Components

### `/src/components/sections/HeroSection.tsx`
Homepage hero with:
- Gradient background
- Comic burst effects
- Main headline
- Call Tony CTA
- eBay/Whatnot links

### `/src/components/sections/FeaturedProducts.tsx`
Product grid:
- Category filter
- Product cards with comic styling
- Placeholder data from constants

### `/src/components/sections/WhatnotSchedule.tsx`
Live show schedule:
- Upcoming shows
- Date/time display
- Follow CTA

### `/src/components/sections/AboutSection.tsx`
About Tony:
- Profile placeholder
- Trust signals
- Statistics

### `/src/components/sections/ContactSection.tsx`
Contact form:
- Name, email, subject, message
- Form validation
- Submit handling

---

## Marketing Templates

### `/marketing/craigslist-post.md`
Ready-to-use Craigslist ads:
- Multiple title variations
- Full post body
- Contact: (646) 460-5596

### `/marketing/facebook-marketplace-post.md`
Facebook listing template:
- Service listing format
- What we buy/offer
- Contact: (646) 460-5596

### `/marketing/estate-company-outreach.md`
Partnership outreach:
- Target company list by state
- Email templates
- Phone script
- 10% referral offer

### `/marketing/google-ads-structure.md`
PPC campaign structure:
- Campaign/ad group hierarchy
- Keyword lists
- Ad copy options
- Negative keywords
- Budget allocation

---

## Documentation

### `/.mds/00-PROJECT-OVERVIEW.md`
Company profile, business model, goals, team structure

### `/.mds/01-ARCHITECTURE.md`
Tech stack, project structure, build process, API docs

### `/.mds/02-MARKETING-STRATEGY.md`
Target audience, channels, lead funnel, KPIs

### `/.mds/03-SEO-CONTENT-PLAN.md`
Keywords, content inventory, on-page checklist

### `/.mds/04-DEPLOYMENT-GUIDE.md`
Server info, nginx config, deploy scripts

### `/.mds/05-LEAD-MANAGEMENT.md`
Lead sources, qualification, response protocols

### `/.mds/06-ROADMAP.md`
Phased development plan, milestones, budget

---

## Styling

### `/src/app/globals.css`
- Tailwind base/components/utilities
- Custom comic-style classes:
  - `.comic-card` - Card with thick border and shadow
  - `.comic-button` - Button base
  - `.comic-button-primary` - Yellow button
  - `.comic-button-secondary` - Blue button
  - `.section-title` - Large comic-style headings
  - `.halftone-overlay` - Comic dot pattern
  - `.shadow-comic` - Comic-style drop shadow

---

## Key Patterns

### Phone Number Display
Always use `SITE_CONFIG.phoneLink` for href and `SITE_CONFIG.phoneDisplay` for display text:
```tsx
<a href={SITE_CONFIG.phoneLink}>{SITE_CONFIG.phoneDisplay}</a>
```

### Comic-Style Cards
```tsx
<div className="comic-card">Content</div>
```

### CTAs
Primary: Green call button (pulsing)
Secondary: Yellow/Blue comic buttons

---

## Search Patterns

### Finding phone-related code
```bash
grep -r "phoneLink\|phoneDisplay\|646" src/
```

### Finding CTA components
```bash
grep -r "CallTony\|comic-button" src/
```

### Finding form handling
```bash
grep -r "handleSubmit\|api/contact" src/
```

---

*RAG Index v1.0*
*Files indexed: 40+*
*Last Updated: January 2026*
