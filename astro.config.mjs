// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { writeFile } from 'node:fs/promises';
import { redirects } from './src/data/redirects.mjs';

/**
 * Writes real HTTP 301 redirects for the Apache host (the old WordPress URLs).
 * Astro's own `redirects` below still emit meta-refresh pages, so other static hosts work too.
 * @returns {import('astro').AstroIntegration}
 */
const apacheRedirects = () => ({
  name: 'apache-redirects',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const esc = (/** @type {string} */ s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const rules = Object.entries(redirects)
        .map(([from, to]) => `RewriteRule ^${esc(from.slice(1))}/?$ ${to} [R=301,L]`)
        .join('\n');
      const htaccess = `# Generated at build time from src/data/redirects.mjs — do not edit by hand.
Options -Indexes
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]
RewriteRule ^sujets/mes-creations/.+$ /projets/ [R=301,L]
${rules}
</IfModule>

<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType text/html "access plus 0 seconds"
ExpiresByType text/css "access plus 1 year"
ExpiresByType application/javascript "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/avif "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 month"
ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/xml
</IfModule>

<IfModule mod_headers.c>
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>
`;
      await writeFile(new URL('.htaccess', dir), htaccess);
    },
  },
});

export default defineConfig({
  site: 'https://guilhempoties.fr',
  trailingSlash: 'ignore',
  redirects,
  integrations: [sitemap(), apacheRedirects()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
