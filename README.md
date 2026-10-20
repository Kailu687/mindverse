# MINDVERSE website

The landing page for **MINDVERSE**, entertainment you take part in: mysteries, escape rooms, strategy, quick puzzles, creative challenges and short sourced stories, with no endless feed, no streaks and no ads.

- **Live site:** https://kailashamarnath.me/mindverse/
- **Download the Android app:** the *Download* section of the site (`downloads/MINDVERSE.apk`, version 2.1)
- **Try it in a browser:** https://mindverse-184ed.web.app
- **App source code (open source, MIT):** https://github.com/Kailu687/mindverse-app

This repository holds only the website. The app lives in the repository above.

## What is here

Plain HTML, CSS and a few lines of JavaScript. There is no build step, no cookies, no analytics and no external requests.

```
index.html  styles.css  script.js  404.html  robots.txt  sitemap.xml  .nojekyll
assets/      logo.svg, favicon.svg, og.png (share image), shots/*.webp (real app screenshots)
downloads/   MINDVERSE.apk
```

All links are relative, so the site works under the `/mindverse/` sub-path.

## How it is served

GitHub Pages serves this repository from `main` / `(root)`. The custom domain `kailashamarnath.me` is attached to one of the account's other Pages repositories, so this project site appears at `kailashamarnath.me/<repo-name>/`. Do not add a `CNAME` file here.

## Updating

- **A new APK:** replace `downloads/MINDVERSE.apk`, then update the version, size and SHA-256 in the *Download* section of `index.html` (`certutil -hashfile MINDVERSE.apk SHA256` on Windows).
- **The statistics:** each card links to its source and states who was surveyed and when. If you change a number, change its source line too.
- **Preview locally:** serve this folder with any static server, for example `npx serve .`, and open it.

## Sources used on the page

Gallup (Oct 2023), Pew Research Center (Apr 2025 teen survey, and the Nov 2022 survey for the "honest picture" panel), UC Irvine (Gloria Mark, 2023 interview). Links are on each card.

## Licence

MIT, see `LICENSE`.
