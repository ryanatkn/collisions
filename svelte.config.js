import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	compilerOptions: {immutable: true},
	vitePlugin: {inspector: true}, // docs: https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
	kit: {
		adapter: adapter(),
		alias: {$routes: 'src/routes', $fixtures: 'src/fixtures'},
		// This `paths` config is for non-root domains like the default GitHub Pages
		// `username.github.io/repo` where `repo` is `base` - delete this comment for top-level domains.
		// paths: import.meta.env.DEV ? undefined : {base: '/template'},
	},
};
