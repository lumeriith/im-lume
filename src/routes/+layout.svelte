<script>
	import { inject } from '@vercel/analytics';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import 'ress/dist/ress.min.css';
	import { onMount } from 'svelte';
	import '../app.css';
	import { dev } from '$app/environment';

	let root;

	onMount(() => {
		root = document.getElementsByTagName('html')[0];
		root?.classList.add('smoothscroll');
	});

	beforeNavigate(() => {
		root?.classList.remove('smoothscroll');
	});

	afterNavigate(() => {
		root?.classList.add('smoothscroll');
	});

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
