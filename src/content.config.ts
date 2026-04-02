import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		/** Primary languages / runtimes featured in the post (for browsing by “type”). */
		languages: z.array(z.string()).default([]),
		draft: z.boolean().optional().default(false),
		/** Optional URL segment; overrides the default id derived from the filename. */
		slug: z.string().optional(),
		/** Optional absolute URL or site-relative path for Open Graph / Twitter cards. */
		image: image().optional(),
	}),
});

export const collections = { blog };
