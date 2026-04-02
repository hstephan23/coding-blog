import { getCollection, type CollectionEntry } from 'astro:content';

/** Include drafts in dev; exclude from production builds (listing, RSS, static paths). */
export function isPublishedPost(entry: CollectionEntry<'blog'>): boolean {
	return import.meta.env.DEV || !entry.data.draft;
}

export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const all = await getCollection('blog');
	return all.filter(isPublishedPost).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

export function getReadingTime(content: string): string {
	const wordsPerMinute = 200;
	const words = content.split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return `${minutes} min read`;
}

/**
 * Identify posts that share tags or languages with the current post.
 * Excludes the current post and sorts by the number of shared categories.
 */
export function getRelatedPosts(
	current: CollectionEntry<'blog'>,
	all: CollectionEntry<'blog'>[],
	limit = 3,
): CollectionEntry<'blog'>[] {
	return all
		.filter((p) => p.id !== current.id)
		.map((p) => {
			const sharedTags = p.data.tags.filter((t) =>
				current.data.tags.includes(t),
			).length;
			const sharedLangs = p.data.languages.filter((l) =>
				current.data.languages.includes(l),
			).length;
			return { post: p, score: sharedTags + sharedLangs };
		})
		.filter((item) => item.score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, limit)
		.map((item) => item.post);
}
