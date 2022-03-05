<script>
	import Card from '@smui/card/src/Card.svelte';

	let _class = '';
	export { _class as class };
</script>

<Card {...$$props} class={`colorful-card overflow-hidden ${_class}`}>
	<slot />
</Card>

<style>
	:global(.colorful-card) {
		background-color: #111;
		box-shadow: 0 0 36px #ff6e992a;
		transform: scale(0.975);
		transition: transform 0.1s;
	}

	:global(.colorful-card):hover {
		transform: scale(1);
		filter: brightness(1);
	}

	:global(.colorful-card)::before {
		content: '';
		position: absolute;
		inset: 5px;
		z-index: -1;
		opacity: 0.25;
		background: conic-gradient(
			#0099ff 0deg,
			#ff0019 140deg,
			#6e00ce 160deg,
			#004ba7 240deg,
			#96011a 360deg
		);
		filter: blur(20px);
		border-radius: 6px;
	}
</style>
