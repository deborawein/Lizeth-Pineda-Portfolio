# Lizeth Pineda Portfolio

Personal portfolio for **Lizeth Pineda** — visual communication, branding, photography, and digital design. The site has a single home page with scroll sections and dedicated pages for each portfolio category.

**Live site:** [https://lizethpineda.netlify.app/](https://lizethpineda.netlify.app/)

## Tech stack

- [Vite](https://vite.dev/)
- [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites

- **Node.js** 18 or newer (20 LTS recommended; see `.nvmrc`)
- **npm** (included with Node.js)

If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root to switch to Node 20.

## Getting started

```bash
git clone <repository-url>
cd lizeth-pineda-portfolio
npm install
npm run dev
```

The dev server runs at **http://localhost:5173** (configured in `vite.config.js`).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |

## How routing works

| URL | What you see |
|-----|----------------|
| `/` | Home: Hero, About, Portfolio grid, Contact |
| `/#hero`, `/#about`, `/#portfolio`, `/#contact` | Home scrolled to that section |
| `/category/<slug>` | Category detail page (e.g. `/category/branding`) |

Client-side routing is handled by React Router. Direct links to `/category/...` require the host to serve `index.html` for unknown paths (see [Deployment](#deployment)).

## Project structure

```
src/
├── App.jsx                 # Router setup
├── main.jsx
├── components/
│   ├── layout/             # Header, shared page shell
│   ├── sections/           # Home sections (Hero, About, Portfolio, Contact)
│   └── portfolio/          # Category page UI (media, slider)
├── pages/                  # Route-level pages
├── data/                   # Portfolio content
├── constants/              # Site copy, navigation labels
├── hooks/                  # Shared React hooks
└── lib/                    # Pure helpers (scroll, portfolio utils)
public/                     # Static assets (images, videos, favicon)
```

Imports use the `@/` alias (maps to `src/`), configured in `vite.config.js`.

## Updating content

### Site name, email, location

Edit `src/constants/site.js`:

- `SITE_NAME`
- `CONTACT_EMAIL`
- `CONTACT_LOCATION`

### Navigation menu

Edit `src/constants/navigation.js` — each item has a `label` and a `section` id that matches an element `id` on the home page (`hero`, `about`, `portfolio`, `contact`).

### Portfolio categories

Edit `src/data/portfolio.js`. Each category is an object in the `portfolioItems` array:

| Field | Required | Description |
|-------|----------|-------------|
| `slug` | Yes | URL segment, e.g. `branding` → `/category/branding` |
| `title` | Yes | Category title (home card + detail page) |
| `summary` | Yes | Short text on the home portfolio grid |
| `description` | Yes | Long text on the category page |
| `images` | Yes | Array of media items (see below) |

The home portfolio grid and category pages are generated from this file — no UI code changes needed for new categories.

### Adding a new category

1. Add images or videos under `public/` (see [Media assets](#media-assets)).
2. Copy an existing object in `src/data/portfolio.js` and update `slug`, `title`, `summary`, `description`, and `images`.
3. Use a unique `slug` (lowercase, hyphens, no spaces).
4. Run `npm run dev` and open `/category/your-slug` to preview.

### Media assets

- Place files in **`public/`** (and subfolders if you like, e.g. `public/photos/`).
- Reference them in `portfolio.js` with paths starting at `/`, e.g. `src: '/photos/new-shot.jpg'`.
- Do not import portfolio images from `src/` — Vite serves `public/` at the site root.

### Media types in `portfolio.js`

**Image** (default when `type` is omitted):

```js
{
  src: '/my-image.png',
  alt: 'Short description for accessibility',
  caption: 'Optional caption under the image'
}
```

**Video:**

```js
{
  type: 'video',
  src: '/my-video.mp4',
  poster: '/optional-thumbnail.png',
  alt: 'Description for screen readers',
  caption: 'Optional caption'
}
```

**Image slider** (auto-advances every 3 seconds):

```js
{
  type: 'slider',
  aspectRatio: '3 / 4', // optional; default is '3 / 4'
  slides: [
    { src: '/slide-1.jpg', alt: '...', caption: '...' },
    { src: '/slide-2.jpg', alt: '...', caption: '...' }
  ]
}
```

The portfolio grid cover image is chosen automatically: first non-video item, or the first slide of a slider, or a video poster.

## Customizing visuals

- **Brand colors:** `tailwind.config.js` → `theme.extend.colors.brand` (`brand-cream`, `brand-sand`, `brand-warm`, `brand-brown`).
- **Global base styles:** `src/index.css` (body font, default background).

After changing Tailwind config, restart the dev server if classes do not update.

## Deployment

This site is hosted on **Netlify** at [https://lizethpineda.netlify.app/](https://lizethpineda.netlify.app/).

### Build settings (Netlify)

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Publish directory | `dist` |

`public/_redirects` is included for SPA fallback so direct visits to `/category/...` work:

```
/*    /index.html   200
```

### Other hosts

Build with `npm run build` and deploy the **`dist/`** folder. Configure a fallback so all routes serve `index.html` (required for React Router).

- **Vercel:** add a rewrite rule to `/index.html` in `vercel.json`
- **GitHub Pages:** needs a `base` in `vite.config.js` and host-specific SPA setup

Always run `npm run build` before publishing.

## Troubleshooting

| Problem | What to try |
|---------|-------------|
| Blank page on `/category/...` when opening a direct link | Ensure SPA redirect/fallback is configured (`public/_redirects` on Netlify) |
| Image or video does not show | Check the file exists in `public/` and the path in `portfolio.js` starts with `/` |
| Menu scroll does not work | Section `id` in JSX must match `section` in `navigation.js` |
| Styles look wrong after editing Tailwind | Restart `npm run dev` |
| Port 5173 already in use | Stop the other process or change `server.port` in `vite.config.js` |

## Credits

- **Portfolio & design:** Lizeth Pineda
- **Site:** React + Vite portfolio; content in `src/data/portfolio.js`

All portfolio imagery and media belong to Lizeth Pineda unless otherwise noted. Code in this repository is for this portfolio project; contact the owner before reusing assets or copy.

## License

All rights reserved © Lizeth Pineda. No license is granted for redistribution of portfolio content without permission.
