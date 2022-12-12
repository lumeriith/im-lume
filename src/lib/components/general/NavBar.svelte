<script>
	import { onMount } from 'svelte';
	import LizardSmoothie from '../LizardSmoothie.svelte';

	function updateScroll() {
		isTopped = window.scrollY < 3;
	}

	let isTopped = true;

	onMount(updateScroll);
</script>

<svelte:window on:scroll={updateScroll} />

<div
	class="fixed w-full top-0 z-40 flex"
	style="opacity: {isTopped
		? '0'
		: '1'}; background-color: #000b; backdrop-filter: blur(16px); transition: opacity 0.3s"
>
	<a class="flex gap-2 p-2 items-center" href="/">
		<LizardSmoothie size={20} />
		<div class="font-monospace text-md">imlu.me</div></a
	>
</div>
