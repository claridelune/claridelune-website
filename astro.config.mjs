import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
    site: 'https://claridelune.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
            cacheDir: './.cache/image',
            logLevel: 'debug',
        }),
        solidJs(),
    ],
});
