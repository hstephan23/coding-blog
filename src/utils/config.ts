/** Centralised access to environment-driven site configuration. */

/** Resolve the site URL from the Astro config, falling back to SITE_URL env. */
export function getSiteUrl(astroSite: URL | undefined): URL {
	return astroSite ?? new URL('https://example.com');
}

/** Resolve the default Open Graph image path from env or fall back to the apple-touch-icon. */
export function getDefaultOgPath(): string {
	return (
		(import.meta.env.PUBLIC_OG_IMAGE as string | undefined)?.trim() ||
		'/apple-touch-icon.png'
	);
}

/** Read Giscus comment config from environment variables. */
export function getGiscusConfig() {
	const repo = import.meta.env.PUBLIC_GISCUS_REPO as string | undefined;
	const repoId = import.meta.env.PUBLIC_GISCUS_REPO_ID as string | undefined;
	const categoryId = import.meta.env.PUBLIC_GISCUS_CATEGORY_ID as string | undefined;
	const category =
		(import.meta.env.PUBLIC_GISCUS_CATEGORY as string | undefined) ?? 'Comments';
	const enabled = Boolean(repo) && Boolean(repoId) && Boolean(categoryId);

	return { repo, repoId, categoryId, category, enabled };
}
