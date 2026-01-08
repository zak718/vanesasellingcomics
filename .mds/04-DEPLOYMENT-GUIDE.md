# Deployment Guide

## Overview

VanesaSellingComics is deployed as a static website using Next.js static export. The site is served via nginx on a Hetzner dedicated server with Cloudflare for DNS and SSL.

---

## Infrastructure

### Server Details
| Property | Value |
|----------|-------|
| Provider | Hetzner |
| IP Address | 95.217.108.40 |
| OS | Debian Linux |
| Web Server | nginx |

### Domain Configuration
| Property | Value |
|----------|-------|
| Domain | vanesasellingcomics.online |
| Registrar | Namecheap |
| DNS Provider | Cloudflare |
| SSL Mode | Full (Cloudflare) |

---

## Deployment Process

### Prerequisites
- Node.js 18+ installed
- Access to production server via SSH
- nginx configured for the domain

### Step-by-Step Deployment

#### 1. Build the Site
```bash
cd /opt/sites/vanessa-selling-comics
npm run build
```

This creates the `/out` directory with static files.

#### 2. Deploy to Production
```bash
# Sync to web root
rsync -avz --delete /opt/sites/vanessa-selling-comics/out/ /var/www/vanesasellingcomics.online/

# Set proper permissions
chown -R www-data:www-data /var/www/vanesasellingcomics.online/

# Reload nginx
systemctl reload nginx
```

#### 3. Verify Deployment
```bash
# Check if site is accessible
curl -I https://vanesasellingcomics.online

# Check nginx status
systemctl status nginx
```

---

## nginx Configuration

**File:** `/etc/nginx/sites-available/vanesasellingcomics.online`

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name vanesasellingcomics.online www.vanesasellingcomics.online;

    root /var/www/vanesasellingcomics.online;
    index index.html;

    # SSL Configuration
    ssl_certificate /etc/ssl/vanesasellingcomics.online/cert.pem;
    ssl_certificate_key /etc/ssl/vanesasellingcomics.online/key.pem;

    # Locations
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Error pages
    error_page 404 /404.html;
}

# HTTP to HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name vanesasellingcomics.online www.vanesasellingcomics.online;
    return 301 https://$server_name$request_uri;
}
```

---

## Automated Deployment Script

**File:** `/opt/sites/vanessa-selling-comics/deploy.sh`

```bash
#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Navigate to project
cd /opt/sites/vanessa-selling-comics

# Pull latest (if using git)
# git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build
echo "🔨 Building site..."
npm run build

# Deploy
echo "📤 Deploying to production..."
rsync -avz --delete out/ /var/www/vanesasellingcomics.online/

# Set permissions
chown -R www-data:www-data /var/www/vanesasellingcomics.online/

# Reload nginx
echo "🔄 Reloading nginx..."
systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Site live at: https://vanesasellingcomics.online"
```

---

## Rollback Procedure

### Quick Rollback
If deployment fails, restore from backup:

```bash
# Restore previous version (if backed up)
rsync -avz /var/www/vanesasellingcomics.online.bak/ /var/www/vanesasellingcomics.online/
systemctl reload nginx
```

### Pre-Deployment Backup
Before each deployment, create backup:

```bash
cp -r /var/www/vanesasellingcomics.online /var/www/vanesasellingcomics.online.bak
```

---

## Environment Variables

Currently, the site uses no runtime environment variables (static export).

### Future Environment Variables
When implementing Resend email or eBay API:

| Variable | Description | Where Used |
|----------|-------------|------------|
| RESEND_API_KEY | Email service API key | /api/contact |
| EBAY_APP_ID | eBay API credentials | eBay listings |

---

## Monitoring

### Health Checks
- **Uptime:** Monitor via Cloudflare or external service
- **SSL:** Check certificate expiry monthly
- **Performance:** Run Lighthouse monthly

### Log Files
```bash
# nginx access logs
tail -f /var/log/nginx/access.log

# nginx error logs
tail -f /var/log/nginx/error.log
```

---

## Troubleshooting

### Site Not Loading
1. Check nginx status: `systemctl status nginx`
2. Check nginx config: `nginx -t`
3. Check Cloudflare status
4. Check DNS: `dig vanesasellingcomics.online`

### Build Fails
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Check for TypeScript errors
3. Check Next.js build output

### SSL Issues
1. Verify Cloudflare SSL mode is "Full"
2. Check certificate files exist
3. Verify nginx SSL configuration

---

## Maintenance Windows

**Preferred:** Sunday 6-8 AM EST (low traffic)

Notify users if extended downtime expected.

---

*Deployment Guide v1.0*
*Last Updated: January 2026*
