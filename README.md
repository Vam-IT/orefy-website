# Orefy website

Source of https://orefy.cloud (English) and https://orefy.cloud/de/ (German). Static, prerendered, hosted on GitHub Pages.

```bash
npm install
npm run build      # writes _site
npm run preview    # http://127.0.0.1:4321
```

| Path | Purpose |
|---|---|
| `src/content/en.js`, `src/content/de.js` | All texts. Change both; the build fails when their structure differs. |
| `src/content/example.js` | Example numbers, the same as in the demo |
| `src/components/`, `src/App.jsx` | Page sections |
| `src/components/Legal.jsx` | Legal dialogs. Same texts as `imprint.html` and `privacy.html`: change both. |
| `src/document.jsx` | Head, SEO and structured data |
| `src/styles.css` | Styles; design tokens come from `_ds/` |
| `scripts/build.mjs` | Build and link check |

## Rules for content

- Mark what is not released as "in development" or "planned", in both languages and in the `llms` files.
- Label example numbers as examples. No customers, logos, prices or results that are not real.
- The privacy policy promises no cookies, no browser storage, no third-party requests and no tracking.
  Change the policy before adding any of them, including statistics or a form service.
