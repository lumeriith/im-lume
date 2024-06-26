/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Noto Sans KR', 'sans-serif'],
			serif: ['Roboto Slab', 'serif'],
			cursive: ['Lobster', 'cursive'],
			monospace: ['Noto Sans KR', 'Noto Sans KR', 'monospace', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
