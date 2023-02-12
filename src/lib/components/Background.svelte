<script>
	import bg from '$lib/assets/ricky.jpg';
	import gradient from '$lib/assets/bottomgradient.png';

	import { onDestroy } from 'svelte';

	const backgroundHandle = setInterval(() => {
		bgBrightness = Math.random() * 0.4 + Math.min(window.scrollY / 800, 0.9);
	}, 100);

	onDestroy(() => {
		clearInterval(backgroundHandle);
	});

	let bgBrightness = 1;
</script>

<div
	class="font-monospace bg-wrapper select-none absolute inset-0 top-[100vh] -z-20"
	style="background: url({bg}) no-repeat center/cover;"
/>

<div
	class="font-monospace bg-wrapper select-none fixed inset-0 -z-10 opacity-70 hidden"
	style="background: url({gradient}) no-repeat center/cover; filter: brightness({bgBrightness})"
/>

<style>
	a:hover {
		text-decoration: underline;
		opacity: 1;
	}

	.bg-wrapper {
		transition: filter 1s;
	}
</style>
