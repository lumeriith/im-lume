<script>
	import Card from '@smui/card/src/Card.svelte';

	let _class = '';
	export { _class as class };
</script>

<Card class={`colorful-card ${_class}`}>
	<slot />
</Card>

<style>
	:global(.colorful-card) {
		background-color: #111;
		transform: scale(0.975) translateY(0);
		transition: transform 0.2s;
		box-shadow: 0 0 36px #ff6e992a;
	}

	:global(.colorful-card)::before {
		content: '';
		position: absolute;
		inset: 5px;
		z-index: -1;
		background: conic-gradient(
			#00233b 0deg,
			#2e0509 90deg,
			#21162b 180deg,
			#001531 240deg,
			#3d0710 360deg
		);
		filter: blur(20px);
		border-radius: 6px;
	}

	:global(.colorful-card):hover {
		transform: scale(1) translateY(-3px);
	}
</style>
