# Lizeth Pineda Portfolio

A modern React + Vite portfolio site with section-based home navigation and dedicated category pages for each portfolio area.

## Tech stack

- Vite
- React 19
- React Router
- Tailwind CSS

## Project structure

```
src/
├── App.jsx                 # Router setup
├── main.jsx
├── components/
│   ├── layout/             # Header, shared shell
│   ├── sections/           # Home page sections (Hero, About, Portfolio, Contact)
│   └── portfolio/          # Category detail UI (slider, media, page)
├── pages/                  # Route-level pages
├── data/                   # Portfolio content (edit projects here)
├── constants/              # Site copy, navigation labels
├── hooks/                  # Shared React hooks
└── lib/                    # Pure helpers (scroll, portfolio utils)
public/                     # Static assets (images, videos, favicon)
```

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Content updates

- **Portfolio projects:** edit `src/data/portfolio.js`
- **Navigation labels:** edit `src/constants/navigation.js`
- **Contact email & site name:** edit `src/constants/site.js`

## Deployment

Build with `npm run build` and deploy the `dist/` folder. For client-side routes (`/category/...`), configure your host to serve `index.html` for unknown paths.

- **Netlify:** `public/_redirects` is included
- **Vercel / others:** add an SPA fallback to `index.html`
