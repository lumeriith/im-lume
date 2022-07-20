<script>
	import cardbg from '$lib/assets/cardbg.png';

	let card;
	export function getElement() {
		return card.getElement();
	}

	let _class = '';
	export { _class as class };

	export let style = '';
</script>

<div
	{...$$props}
	class={`overflow-hidden rounded-sm ${_class}`}
	bind:this={card}
	style="background: url({cardbg}); background-size: 100% 100%; box-shadow: 0 0 16px 4px #ffd2f51f inset; {style}"
	on:click
>
	<slot />
</div>
