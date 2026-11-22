import { renderToString } from 'react-dom/server';
import { App } from './App.jsx';
import de from './content/de.js';
import en from './content/en.js';

export const PAGES = [en, de];

const ORIGIN = 'https://orefy.cloud';
const MODIFIED = '2026-11-22';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function structuredData(t) {
  const url = ORIGIN + t.path;
  const org = { '@id': `${ORIGIN}/#organization` };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', ...org,
        name: 'Orefy', legalName: 'VAMIT UG (haftungsbeschränkt)', url: `${ORIGIN}/`,
        logo: `${ORIGIN}/assets/orefy-logo-dark.svg`,
        email: 'info@orefy.cloud', telephone: '+49-176-23204351', vatID: 'DE462795245',
        address: { '@type': 'PostalAddress', streetAddress: 'Petersfeldstraße 16', postalCode: '46395', addressLocality: 'Bocholt', addressCountry: 'DE' },
      },
      { '@type': 'WebSite', '@id': `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: 'Orefy', inLanguage: ['en', 'de'], publisher: org },
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: t.meta.title, description: t.meta.description,
        datePublished: '2026-11-02', dateModified: MODIFIED, inLanguage: t.lang,
        isPartOf: { '@id': `${ORIGIN}/#website` }, about: { '@id': `${ORIGIN}/#application` }, author: org,
      },
      {
        '@type': 'SoftwareApplication', '@id': `${ORIGIN}/#application`,
        name: 'Orefy', applicationCategory: 'DeveloperApplication', operatingSystem: 'Cloud, Web', url: `${ORIGIN}/`,
        description: t.meta.description, publisher: org,
        featureList: t.steps.map((s) => `${s.title} (${t.status[s.status]})`),
        subjectOf: {
          '@type': 'WebApplication', '@id': 'https://demo.orefy.cloud/#demo', name: t.demo.frame,
          url: 'https://demo.orefy.cloud/', applicationCategory: 'DeveloperApplication', operatingSystem: 'Web',
          isAccessibleForFree: true, inLanguage: ['en', 'de'], description: t.demo.note,
        },
      },
      {
        // Same texts as the visible FAQ section.
        '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: t.lang,
        mainEntity: t.faq.items.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
      },
    ],
  };
}

export function renderPage(t, { css, script, preload }) {
  const url = ORIGIN + t.path;
  const image = ORIGIN + t.meta.ogImage;
  const title = esc(t.meta.title);
  const description = esc(t.meta.description);
  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="author" content="VAMIT UG (haftungsbeschränkt)">
<meta name="theme-color" content="#0A090D">
<link rel="canonical" href="${url}">
${PAGES.map((p) => `<link rel="alternate" hreflang="${p.lang}" href="${ORIGIN + p.path}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/">
<link rel="alternate" type="text/markdown" href="${ORIGIN}/llms.txt" title="Orefy LLM Context">
<link rel="alternate" type="text/markdown" href="${ORIGIN}/llms-full.txt" title="Orefy Full LLM Context">
<link rel="icon" href="/assets/orefy-favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Orefy">
<meta property="og:locale" content="${t.meta.ogLocale}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(`${t.hero.h1} ${t.hero.h1Em}`)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
<link rel="preload" href="/assets/fonts/inter-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-800-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${css}</style>
${preload.map((p) => `<link rel="modulepreload" href="${p}">`).join('\n')}
<script type="module" src="${script}"></script>
<script type="application/ld+json">${JSON.stringify(structuredData(t)).replace(/</g, '\\u003c')}</script>
</head>
<body>
<div id="root">${renderToString(<App copy={t} />)}</div>
<noscript><p class="noscript">${esc(t.noscript)}</p></noscript>
</body>
</html>
`;
}
