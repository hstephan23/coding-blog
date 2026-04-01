/** Resolve a frontmatter image (full URL or root-relative path) against the site origin. */
export function absoluteUrl(site: URL, pathOrUrl: string): string {
	if (/^https?:\/\//i.test(pathOrUrl)) {
		return pathOrUrl;
	}
	const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
	return new URL(path, site).href;
}
