<script>
	import lizard from '$lib/assets/lizard.svg';
	import { onMount } from 'svelte';

	const scrollOffsetDecay = 0.99;
	const maxScrollOffset = 200;
	const maxCursorOffset = 100;

	export let showBottomLizard = false;

	let t = 0;
	let floatY = 0;
	let offsetY = 0;
	let rotate = 0;
	let cursorOffsetX = 0;
	let cursorOffsetY = 0;

	setInterval(() => {
		floatY = 40 + Math.sin(t / 6) * 10;
		rotate = Math.sin(t / 4.8) * 2;
		offsetY *= 0.9;
		t += 0.2;
	}, 50);

	$: yPos = floatY + offsetY + cursorOffsetY;
	$: xPos = cursorOffsetX;
</script>

<div
	class="absolute inset-0 pointer-events-none flex flex-col items-start p-8 justify-between select-none h-full overflow-hidden"
>
	<div
		class="aspect-square self-center"
		style="width: clamp(600px, 90%, 1200px); transform: translateX({xPos}px) translateY({yPos}px) rotate({rotate}deg); transition: transform linear 0.35s"
	>
		<img
			src={lizard}
			alt=""
			class="rotate-12"
			style="filter: grayscale(1); opacity: 0.175"
			width="100%"
			height="100%"
		/>
	</div>
	{#if showBottomLizard}
		<div
			class="aspect-square self-end"
			style="width: clamp(500px, 90%, 1000px); transform: translateX({xPos}px) translateY({yPos}px) rotate({rotate}deg); transition: transform linear 0.25s"
		>
			<img
				src={lizard}
				alt=""
				class="rotate-180"
				style="filter: grayscale(1); opacity: 0.07"
				width="100%"
				height="100%"
			/>
		</div>
	{/if}
</div>
