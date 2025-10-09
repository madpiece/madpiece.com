// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.madpiece.com',
    integrations: [preact()],
    adapter: netlify(),

    vite: {
        plugins: [tailwindcss()],
        server: {
            proxy: {
                '/ph-events': {
                    target: 'https://eu.i.posthog.com',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/ph-events/, ''),
                },
                '/ph-static': {
                    target: 'https://eu-assets.i.posthog.com',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/ph-static/, ''),
                },
            },
        },
    },
});
