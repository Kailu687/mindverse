# MINDVERSE website

Static site (plain HTML, CSS and a few lines of JavaScript; no build step, no cookies, no analytics, no external requests).
It is written with relative links, so it works at **https://kailashamarnath.me/mindverse/**.

```
index.html  styles.css  script.js  404.html  robots.txt  sitemap.xml  .nojekyll
assets/      logo.svg, favicon.svg, og.png (share image), shots/*.webp (real app screenshots)
downloads/   MINDVERSE.apk  (version 2.1)
```

## Put it online (GitHub Pages)

1. On GitHub, create a **public** repository named `mindverse` in your account.
2. Upload everything in this folder to the repository root (drag and drop in the browser works: *Add file → Upload files*; remember to include the hidden file `.nojekyll`, or add an empty file with that name). With git instead:
   ```bash
   git init && git add -A && git commit -m "MINDVERSE website"
   git branch -M main && git remote add origin https://github.com/<your-username>/mindverse.git && git push -u origin main
   ```
3. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**.
4. The site appears at `https://<your-username>.github.io/mindverse/` within a minute or two.

## Make it appear at kailashamarnath.me/mindverse

A project site is served under the *same domain as your user site*, so the domain itself is set up once, on the user-site repository:

1. Create a public repository named exactly `<your-username>.github.io` (if you don't have one) containing at least an `index.html`.
2. In that repository: **Settings → Pages → Custom domain → `kailashamarnath.me` → Save**, then tick **Enforce HTTPS** when it becomes available.
3. At your domain registrar, add DNS records:
   - four `A` records for the apex `kailashamarnath.me`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - a `CNAME` record for `www` pointing to `<your-username>.github.io`
4. After DNS updates (minutes to a few hours), `https://kailashamarnath.me/mindverse/` serves this site, because the `mindverse` repository's Pages site inherits the domain.

Do **not** add a `CNAME` file to the `mindverse` repository; only the user-site repository holds the custom domain.

## Updating

- **A new APK:** replace `downloads/MINDVERSE.apk`, then update the version, size and SHA-256 in the *Download* section of `index.html` (`certutil -hashfile MINDVERSE.apk SHA256` on Windows).
- **The statistics:** each card links to its source and states who was surveyed and when. If you change a number, change its source line too.
- **Preview locally exactly as GitHub will serve it:** `node tools/serve-site.mjs` from the app project, then open http://127.0.0.1:4173/mindverse/.

## Sources used on the page

Pew Research Center (Dec 2024 and Apr 2025 teen surveys; Nov 2022 teen survey), Gallup (Oct 2023), WHO Europe / HBSC (Sep 2024), UC Irvine (Gloria Mark, 2023 interview), DataReportal Digital 2025. Links are on each card.