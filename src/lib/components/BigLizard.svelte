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
		floatY = 40 + Math.sin(t / 3) * 40;
		rotate = Math.sin(t / 2.4) * 5;
		offsetY *= 0.9;
		t += 0.2;
	}, 50);

	let lastPos = 0;
	function onScroll(e) {
		offsetY += (window.scrollY - lastPos) * 1;
		if (offsetY > maxScrollOffset) offsetY = maxScrollOffset;
		if (offsetY < -maxScrollOffset) offsetY = -maxScrollOffset;
		lastPos = window.scrollY;
	}

	onMount(() => {
		lastPos = window.scrollY;
		document.onmousemove = (e) => {
			cursorOffsetX = -((e.clientX / window.innerWidth) * 2 - 1) * maxCursorOffset;
			cursorOffsetY = -((e.clientY / window.innerHeight) * 2 - 1) * maxCursorOffset;
		};
	});

	$: yPos = floatY + offsetY + cursorOffsetY;
	$: xPos = cursorOffsetX;
</script>

<svelte:window on:scroll={onScroll} />

<div
	class="absolute inset-0 pointer-events-none flex flex-col items-start p-8 justify-between overflow-hidden select-none h-full"
>
	<div
		class="aspect-square self-center"
		style="width: clamp(600px, 90%, 1200px); transform: translateX({xPos}px) translateY({yPos}px) rotate({rotate}deg); transition: transform linear 0.35s"
	>
		<img
			src={lizard}
			alt=""
			class="rotate-12"
			style="filter: hue-rotate(260deg); opacity: 0.10"
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
				style="filter: hue-rotate(260deg); opacity: 0.07"
				width="100%"
				height="100%"
			/>
		</div>
	{/if}
</div>
