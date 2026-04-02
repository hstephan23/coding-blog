// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://example.com',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'github-dark',
		},
	},
	vite: {
		build: {
			rollupOptions: {
				onwarn(warning, warn) {
					const isAstroUnusedImportWarning =
						warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
						warning.exporter === '@astrojs/internal-helpers/remote' &&
						warning.message.includes('node_modules/astro/dist/assets/utils/index.js');

					// Astro 6 currently emits this upstream warning during builds.
					if (isAstroUnusedImportWarning) {
						return;
					}

					warn(warning);
				},
			},
		},
	},
});