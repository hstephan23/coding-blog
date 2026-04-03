import type { CollectionEntry } from 'astro:content';

/** URL-safe slug for tag filter routes (e.g. "Web Dev" → "web-dev"). */
export function slugifyTag(tag: string): string {
	return tag
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

export function collectTagSlugsFromPosts(
	posts: CollectionEntry<'blog'>[],
): string[] {
	const slugs = new Set<string>();
	for (const p of posts) {
		for (const t of p.data.tags) {
			const s = slugifyTag(t);
			if (s) slugs.add(s);
		}
	}
	return [...slugs].sort();
}

/** First matching tag label in publish order (post order, then tag order). */
export function displayTagForSlug(
	slug: string,
	posts: CollectionEntry<'blog'>[],
): string {
	for (const p of posts) {
		for (const t of p.data.tags) {
			if (slugifyTag(t) === slug) return t;
		}
	}
	return slug;
}

export function postsForTagSlug(
	slug: string,
	posts: CollectionEntry<'blog'>[],
): CollectionEntry<'blog'>[] {
	return posts.filter((p) =>
		p.data.tags.some((t) => slugifyTag(t) === slug),
	);
}
