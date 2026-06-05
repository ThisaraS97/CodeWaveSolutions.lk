# Codewave Solutions Website

Professional marketing website for **Codewave Solutions** — Nexus Retail POS, E- ඉස්කෝලේ LMS, and custom Odoo ERP in Sri Lanka.

**Live repo:** [github.com/ThisaraS97/CodeWaveSolutions.lk](https://github.com/ThisaraS97/CodeWaveSolutions.lk)

## Tech Stack

- **React 19** + **Vite 6**
- **React Router** — client-side routing
- **Tailwind CSS 4**
- **Netlify** — hosting, SPA redirects, forms, headers

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output → dist/
npm run preview    # preview production build
```

## Deploy to Netlify

The project is pre-configured for [Netlify](https://www.netlify.com/) via `netlify.toml`.

### Option A — Connect GitHub (recommended)

1. Sign in at [app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Import an existing project** → **GitHub**
3. Select **ThisaraS97/CodeWaveSolutions.lk**
4. Netlify auto-detects settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20
5. Click **Deploy site**
6. After deploy, add your custom domain (`codewavesolutions.lk`) under **Domain management**

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Custom domain (codewavesolutions.lk)

1. Netlify → **Domain management** → **Add domain**
2. At your domain registrar, set DNS:
   - **A record** → Netlify load balancer IP `75.2.60.5`
   - **CNAME** `www` → `your-site-name.netlify.app`
3. Enable **HTTPS** (free SSL) in Netlify — automatic once DNS propagates

## Netlify Features Included

| Feature | File | Purpose |
|---------|------|---------|
| Build config | `netlify.toml` | Build command, publish dir, Node 20 |
| SPA routing | `netlify.toml` + `public/_redirects` | `/services`, `/contact`, etc. work on refresh |
| Contact form | `index.html` + `Contact.jsx` | [Netlify Forms](https://docs.netlify.com/forms/setup/) — submissions in Netlify dashboard |
| Security headers | `netlify.toml` | XSS/frame protection |
| Asset caching | `netlify.toml` | Fast repeat visits |

### View form submissions

Netlify → your site → **Forms** → `contact`

Set up email notifications: **Site configuration** → **Forms** → **Form notifications**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/services` | Services overview |
| `/odoo-erp` | Nexus Retail POS & Odoo ERP |
| `/lms` | E- ඉස්කෝලේ LMS |
| `/about` | About |
| `/contact` | Contact form |

## Customize Content

Edit **`src/data/content.js`** for company info, products, testimonials, and FAQs.

Replace images in **`public/images/`** or update URLs in `content.js`.

## License

Private — Codewave Solutions
