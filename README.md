# Aayushi Kumari - Portfolio (React + Vite)

## Run it
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Deploy to Vercel
Push the folder to GitHub, import the repo on vercel.com, and keep the defaults (Framework: Vite, build command `npm run build`, output `dist`).

## Add your photo
1. Copy your photo into the `public` folder, for example `public/profile.jpg` (a square or portrait photo with your face near the center works best, because it is cropped into a circle).
2. In `src/data.js`, set `photo: '/profile.jpg'`.
Until you do this, the About section shows an "Add photo" button that only previews a photo in your own browser.

## Where to edit
- `src/data.js` - all text: projects, skills, achievements, education, links
- `src/styles.css` - colors and layout (design tokens are at the top)
- `src/components/` - one file per section
- `src/icons.js` - technology logos (inlined, from the Devicon set)
