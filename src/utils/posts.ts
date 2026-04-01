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
