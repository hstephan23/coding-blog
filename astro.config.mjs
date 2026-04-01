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
});