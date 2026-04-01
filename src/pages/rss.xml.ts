import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../utils/posts';

export const GET: APIRoute = async (context) => {
	const site = context.site;
	if (!site) {
		throw new Error(
			'RSS requires `site` in astro.config.mjs (e.g. site: "https://example.com").',
		);
	}

	const posts = await getPublishedPosts();

	return rss({
		title: 'Code blog',
		description: 'Notes and snippets with syntax-highlighted code.',
		site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id}/`,
		})),
	});
};
