<script>
	import Card from '@smui/card/src/Card.svelte';
	import { onMount } from 'svelte';
	let card;
	export function getElement() {
		return card.getElement();
	}

	let _class = '';
	export { _class as class };
</script>

<Card {...$$props} class={`colorful-card overflow-hidden rounded-lg ${_class}`} bind:this={card}>
	<slot />
</Card>

<style>
	:global(.colorful-card) {
		background: url(/cardbg.png) no-repeat;
		background-size: 100% 100%;
		box-shadow: 0 0 16px 4px #ffd2f51f inset;
	}
</style>
