# Shannon Keanu A. Yase — Portfolio

A modern, dark-themed personal portfolio for **Shannon Keanu A. Yase**, an
**AI Tools Developer | AI Video Automation | Web Developer**.

The site leads with featured real-world work: building and improving an **AI-powered video
editing automation pipeline** that turns raw client uploads into edited, client-ready
deliverables — alongside projects across mobile, web, and cloud.

🔗 **Live site:** _(add your Vercel URL here after deploying)_
🔗 **Repository:** https://github.com/keanulaw/my-portfolio

## Sections

- **Hero** — intro, role, and quick links (GitHub, Contact, Projects)
- **Featured Work** — AI Automation & AI Edit Pipeline case study (the headline of the site)
- **About** — professional summary and core focus areas
- **Projects** — AI Automation (featured), NeoCare, Personal Portfolio, Cloud & Infrastructure, Galaxy 3D, Phone Rental
- **Skills** — languages & frameworks, mobile & web, cloud & infrastructure, tools, soft skills
- **Certifications** — Safe Spaces Act, Cybersecurity, Career in the IT Industry
- **Education** — BSIT, University of Cebu – Banilad
- **Contact** — email, GitHub, location

## Tech Stack

- **[Vite](https://vite.dev/)** — build tooling & dev server
- **[React 19](https://react.dev/)** — UI library (JavaScript / JSX)
- **[Tailwind CSS v3](https://tailwindcss.com/)** — styling (via PostCSS)
- **ESLint** — linting

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Lint
npm run lint

# 4. Production build (outputs to /dist)
npm run build

# 5. Preview the production build locally
npm run preview
```

## Deployment (Vercel)

This is a static Vite SPA and deploys to Vercel with zero extra configuration:

1. Go to [vercel.com](https://vercel.com) → **Add New… → Project**.
2. Import the GitHub repository **`keanulaw/my-portfolio`**.
3. Vercel auto-detects the framework as **Vite**. Confirm the settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.

Once connected, every push to the `main` branch triggers an automatic production deployment.
