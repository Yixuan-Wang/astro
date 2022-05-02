/// <reference types="vite/client" />

type Astro = import('astro').AstroGlobal;

// We duplicate the description here because editors won't show the JSDoc comment from the imported type (but will for its properties, ex: Astro.request will show the AstroGlobal.request description)
/**
 * Astro global available in all contexts in .astro files
 *
 * [Astro documentation](https://docs.astro.build/reference/api-reference/#astro-global)
 */
declare const Astro: Readonly<Astro>;

declare const Fragment: any;

declare module '*.md' {
	type MD = import('astro').MarkdownInstance<Record<string, any>>;

	export const frontmatter: MD['frontmatter'];
	export const file: MD['file'];
	export const url: MD['url'];
	export const excerpt: MD['excerpt'];
	export const getHeaders: MD['getHeaders'];
	export const Content: MD['Content'];

	const load: MD['default'];
	export default load;
}
