# Lizeth Pineda Portfolio

A modern React + Vite migration of the Lizeth Pineda portfolio website. This project restores the original layout and behavior from the previous Netlify-hosted site, rebuilt from the existing static bundle and assets.

## Project overview

- Single-page React application with section-based navigation
- Category detail pages for portfolio projects
- Responsive sticky header with mobile menu
- Mobile menu shows vertical items on phone and horizontal items on tablet/desktop
- Category pages include framed media cards with captions for images and video
- Tailwind CSS styling with Vite build tooling
- Static assets served from `public/`
- Uses `window.history.pushState` for client-side routing and smooth navigation

## Tech stack

- Vite
- React 19
- Tailwind CSS
- PostCSS

## Repository structure

- `src/` - React source files
- `src/components/` - UI components: `Header`, `Hero`, `Portfolio`, `CategoryPage`, `AboutMe`, `Contact`, `Footer`
- `public/` - static assets, images, videos, favicon
- `index.html` - Vite entry HTML
- `package.json` - project dependencies and scripts
- `tailwind.config.js` - Tailwind configuration
- `vite.config.js` - Vite configuration

## Available scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run preview` serves the built app locally after build

## Notes

- The current repository is configured for local development and rebuilds the recovered portfolio UI.
- Category pages now support captions for images and video media.
- The mobile menu is designed to display vertically on phone and horizontally on larger screens.

## Deployment

This project can be deployed to Netlify, Vercel, GitHub Pages, or any static hosting provider that supports Vite-built sites.

## Contact

For changes or fixes, update the source under `src/` and run the build again.
