<script>
	import Icon from '@iconify/svelte';
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
	class="fixed w-full top-0 z-40 flex justify-center h-12"
	style="background-color: {isTopped
		? '#0000'
		: '#000f'}; transition: opacity 0.1s, background-color 0.1s"
>
	<div class="absolute inset-0 flex items-center">
		<a href="javascript:history.back()" class="flex items-center p-2 font-monospace font-bold">
			<Icon class="text-2xl" icon="material-symbols:chevron-left" />
			돌아가기
		</a>
	</div>
	<a class="flex gap-2 p-2 items-center" href="/">
		<LizardSmoothie size={24} />
	</a>
</div>

<style>
	a:hover {
		filter: brightness(1.5);
	}
	a:active {
		filter: brightness(0.7);
	}
</style>
