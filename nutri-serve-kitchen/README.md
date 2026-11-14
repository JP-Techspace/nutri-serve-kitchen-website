# Nutri-Serve Kitchen Website

React + Vite + TypeScript + Tailwind CSS website inspired by the supplied Nutri-Serve Kitchen flyer.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite gives you.

## Important: add the real business contacts

Open:

`src/siteConfig.ts`

Replace:
- phone number
- email
- Instagram URL
- TikTok URL
- Facebook URL
- service location

The social buttons are already wired as clickable links.

## Contact form

The enquiry form uses a `mailto:` action, so it opens the visitor's email app with the enquiry pre-filled. For a production website, this can later be upgraded to Formspree, Resend, EmailJS, or a Node/Express backend.

## Main image

The supplied flyer is stored at:

`public/nutri-serve-banner.jpeg`

You can replace it with professional food photography later without changing the rest of the site.
