# Lead Management System

## Overview

All leads from the website should be routed to Tony for personal follow-up. The goal is quick response (< 4 hours) and personal touch.

---

## Lead Sources

| Source | Entry Point | Priority |
|--------|-------------|----------|
| Phone Call | (646) 460-5596 | Highest |
| Website Form | /sell, /contact | High |
| Email | vanesasellingcomics@gmail.com | Medium |
| Social DM | Facebook, Whatnot | Medium |

---

## Lead Capture

### Website Form Fields
| Field | Required | Purpose |
|-------|----------|---------|
| Name | Yes | Identification |
| Phone | Yes | Primary contact method |
| Email | No | Secondary contact |
| Zip Code | Yes | Location/service area |
| Collection Size | No | Lead qualification |
| Description | No | Pre-qualification |

### Form Submission Flow
```
User fills form → POST /api/contact → Log to console → TODO: Email notification
```

### Current Status
- Forms log to server console
- TODO: Implement Resend email notifications to vanesasellingcomics@gmail.com

---

## Lead Qualification

### Hot Lead (Priority Response)
- Has 500+ comics
- Estate/inheritance situation
- In primary service area (NYC, NJ)
- Mentioned specific valuable titles

### Warm Lead
- 100-500 comics
- Casual seller (downsizing)
- In secondary service area (PA, MD)
- General collection description

### Cold Lead
- < 100 comics
- Just fishing for prices
- Outside service area
- Vague/incomplete information

---

## Response Protocol

### Phone Calls
1. Answer within 3 rings if possible
2. Be friendly: "Hey, this is Tony with VanesaSellingComics, how can I help?"
3. Ask about their collection
4. Schedule on-site visit if interested
5. Log call in CRM/spreadsheet

### Form Submissions
1. Review submission within 4 hours
2. Call first (preferred) or email
3. Opening: "Hi [Name], I got your form about the comics..."
4. Qualify the lead
5. Schedule visit or provide phone estimate

### Response Templates

**Initial Call Script:**
> "Hey [Name], this is Tony from VanesaSellingComics. I just got your message about selling some comics. Tell me a little about what you've got!"

**Email Response:**
```
Subject: Re: Your Comic Collection

Hi [Name],

Thanks for reaching out about your comics! I'd love to learn more.

Can you tell me:
- About how many comics do you have?
- Do you know what era they're from (1960s, 80s, modern)?
- Are they in boxes or bags?

Feel free to call me directly at (646) 460-5596 - I'm usually around and happy to chat!

Talk soon,
Tony
VanesaSellingComics
```

---

## CRM System

### Current: Spreadsheet Tracking
Track leads in Google Sheets with columns:
- Date
- Name
- Phone
- Email
- Zip
- Collection Description
- Source (website/craigslist/referral)
- Status (New/Contacted/Scheduled/Purchased/Passed)
- Notes
- Follow-up Date

### Future: Dedicated CRM
Consider implementing:
- HubSpot Free
- Pipedrive
- Custom solution

---

## Follow-up Schedule

| Status | Follow-up Timeline |
|--------|-------------------|
| New Lead | Within 4 hours |
| No Answer | 24 hours, then 3 days |
| Interested | Schedule visit within 1 week |
| Quoted | Follow up in 3 days |
| Passed | Add to "maybe later" list |

---

## Lead Metrics to Track

| Metric | Target |
|--------|--------|
| Response Time | < 4 hours |
| Lead-to-Call Rate | > 80% |
| Call-to-Visit Rate | > 50% |
| Visit-to-Purchase Rate | > 60% |
| Average Purchase Value | $500+ |

---

## Referral Tracking

Track referrals from:
- Estate sale companies
- Antique dealers
- Previous customers
- Other collectors

For each referral:
- Note referring party
- Pay referral fee if applicable (10%)
- Send thank you / follow-up

---

## Data Privacy

- Never share customer information
- Delete leads after 2 years of no activity
- Secure any stored data
- No selling of lead lists

---

*Lead Management v1.0*
*Last Updated: January 2026*
