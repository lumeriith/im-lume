import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			resolve: {
				alias: {
					'@components': '/src/components',
					'@data': '/src/data',
					'@utils': '/src/utils'
				}
			}
		}
	}
};

export default config;
