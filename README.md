# Codewave Solutions Website

Professional marketing website for **Codewave Solutions** — custom Odoo ERP and Learning Management System (LMS) services in Sri Lanka.

## Tech Stack

- **React 19** + **Vite 6** — fast development and optimized production builds
- **React Router** — client-side routing
- **Tailwind CSS 4** — responsive, modern styling
- **Lucide React** — icons

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, testimonials, FAQ, CTA |
| `/services` | All services overview |
| `/odoo-erp` | Odoo ERP for retail & organizations |
| `/lms` | Learning Management System |
| `/about` | Company story and values |
| `/contact` | Contact form and details |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Cheap Hosting

This is a **static site** after building. Upload the `dist/` folder to any static host:

### Netlify / Vercel (Free tier)
1. Push to GitHub
2. Connect repo to Netlify or Vercel
3. Build command: `npm run build`
4. Publish directory: `dist`

### Shared cPanel / Apache Hosting
1. Run `npm run build`
2. Upload contents of `dist/` to `public_html`
3. The included `.htaccess` handles React Router URLs

### GitHub Pages
Add to `vite.config.js`:
```js
base: '/your-repo-name/'
```

## Customize Content

Edit **`src/data/content.js`** to update:
- Company name, phone, email, address
- Services, testimonials, FAQs
- Stats and process steps

## Replace Dummy Images

All images currently use Unsplash placeholders. Replace URLs in:
- `src/data/content.js`
- Individual page/component files

Or add your images to `public/images/` and update paths to `/images/your-file.jpg`.

## Contact Form

The form validates on the client and shows a success message. To receive submissions, connect to:
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- Your own backend API

## License

Private — Codewave Solutions
