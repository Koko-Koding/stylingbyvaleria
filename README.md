# Styling by Valeria

Website for [Styling by Valeria](https://www.stylingbyvaleria.nl/), hosted on GitHub Pages.

It is a single static page — plain HTML, CSS and a few lines of JavaScript.
No framework, no build step and no dependencies to keep up to date.

```
index.html         the whole site (services, about, reviews, contact)
assets/styles.css  styling
assets/main.js     mobile menu, "Lees meer" toggles, copyright year
assets/images/     photos and icons
assets/fonts/      Moon Flower (heading font)
```

## Editing

Edit `index.html` directly. To add a review, copy an existing
`<figure class="review">…</figure>` block inside `<div class="reviews">`.

## Running locally

Any static file server works, for example:

```sh
bunx serve .
# or
python3 -m http.server
```

## Deployment

GitHub Pages serves the repository root of the default branch
(Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`).
Every push to that branch is live within a minute.

### Custom domain (not active yet)

Until DNS is moved, the site is served at https://koko-koding.github.io/stylingbyvaleria/.
To switch to the custom domain, set the DNS records below, then add
`www.stylingbyvaleria.nl` under Settings → Pages → Custom domain
(this commits a `CNAME` file to the repository).

### DNS (at the domain registrar)

| Type  | Name  | Value                   |
| ----- | ----- | ----------------------- |
| CNAME | `www` | `koko-koding.github.io` |
| A     | `@`   | `185.199.108.153`       |
| A     | `@`   | `185.199.109.153`       |
| A     | `@`   | `185.199.110.153`       |
| A     | `@`   | `185.199.111.153`       |
| AAAA  | `@`   | `2606:50c0:8000::153`   |
| AAAA  | `@`   | `2606:50c0:8001::153`   |
| AAAA  | `@`   | `2606:50c0:8002::153`   |
| AAAA  | `@`   | `2606:50c0:8003::153`   |

GitHub redirects `stylingbyvaleria.nl` to `www.stylingbyvaleria.nl` and issues the
HTTPS certificate automatically. Once DNS resolves, tick *Enforce HTTPS* in the Pages settings.
