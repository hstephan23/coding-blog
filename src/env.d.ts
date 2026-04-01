/// <reference types="astro/client" />

interface ImportMetaEnv {
	/** Root-relative path or absolute URL; default social image when a page has no `image`. */
	readonly PUBLIC_OG_IMAGE?: string;
	readonly PUBLIC_GISCUS_REPO?: string;
	readonly PUBLIC_GISCUS_REPO_ID?: string;
	readonly PUBLIC_GISCUS_CATEGORY_ID?: string;
	readonly PUBLIC_GISCUS_CATEGORY?: string;
}
