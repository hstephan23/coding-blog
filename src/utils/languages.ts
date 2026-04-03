import type { CollectionEntry } from 'astro:content';
import { slugifyTag } from './tags';

/** URL-safe slug for language routes (same rules as tags). */
export const slugifyLanguage = slugifyTag;

export function collectLanguageSlugsFromPosts(
	posts: CollectionEntry<'blog'>[],
): string[] {
	const slugs = new Set<string>();
	for (const p of posts) {
		for (const lang of p.data.languages) {
			const s = slugifyLanguage(lang);
			if (s) slugs.add(s);
		}
	}
	return [...slugs].sort();
}

/** First matching language label in publish order. */
export function displayLanguageForSlug(
	slug: string,
	posts: CollectionEntry<'blog'>[],
): string {
	for (const p of posts) {
		for (const lang of p.data.languages) {
			if (slugifyLanguage(lang) === slug) return lang;
		}
	}
	return slug;
}

export function postsForLanguageSlug(
	slug: string,
	posts: CollectionEntry<'blog'>[],
): CollectionEntry<'blog'>[] {
	return posts.filter((p) =>
		p.data.languages.some((lang) => slugifyLanguage(lang) === slug),
	);
}
