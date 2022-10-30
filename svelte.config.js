import adapterGhpages from "svelte-adapter-ghpages";
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
	kit: {
		adapter: adapter(),
		paths: {
			base: "/your-repo-name",
		  },
		adapter: adapterGhpages(
		pages: 'build',
		assets: 'build',
		fallback: null
		),
	};

};

export default config;
