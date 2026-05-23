# Luxury Tanz – Website

Premium beauty & tanning brand website. Ready for Vercel, GitHub Pages, or any static host.

## Project Structure

```
luxury-tanz/
├── index.html          ← Home page
├── pages/
│   ├── products.html   ← All Products
│   ├── creams.html     ← Tanning Creams category
│   ├── drops.html      ← Tanning Drops category
│   ├── about.html      ← About page
│   └── contact.html    ← Contact page
├── css/
│   └── style.css       ← All shared styles
├── js/
│   ├── main.js         ← Interactions, form handling, animations
│   └── components.js   ← Shared nav & footer (auto-injected)
├── images/
│   └── README.md       ← Image replacement guide
└── README.md           ← This file
```

## Deploying to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects static HTML — click Deploy
4. Done! Your site is live.

## Deploying to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, root `/`
4. Save — your site will be live at `username.github.io/repo-name`

## Adding Your Images

Replace the image placeholders by adding your photos to the `/images/` folder.
See `images/README.md` for the full list of filenames needed.

To show an actual image instead of a placeholder, replace the `.img-ph` div inside
any `.product-card-img`, `.cat-card-img`, or similar container with:

```html
<img src="../images/your-photo.jpg" alt="Product name" style="width:100%;height:100%;object-fit:cover">
```

(Use `images/` path prefix from `index.html`, `../images/` from inside `/pages/`)

## Customising

- **Colours**: Edit CSS variables at the top of `css/style.css`
- **Brand name**: Search & replace "Luxury Tanz" across all files
- **Social links**: Update Instagram/TikTok URLs in `js/components.js`
- **Email**: Replace `hello@luxurytanz.com` throughout
- **Prices**: Update directly in the relevant product HTML files

## Features

- ✅ Fully responsive (mobile + desktop)
- ✅ Smooth scroll animations
- ✅ Working contact form (visual feedback)
- ✅ Working add-to-cart toast notifications
- ✅ Mobile hamburger menu
- ✅ FAQ accordion on contact page
- ✅ Shade selector on drops page
- ✅ Newsletter signup with feedback
- ✅ Sticky nav with scroll shrink effect
- ✅ All pages linked correctly
- ✅ No broken links or missing assets

© 2024 Luxury Tanz
