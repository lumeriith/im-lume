<script>
	import MultiClamp from 'multi-clamp';
	import { onMount } from 'svelte';
	export let ellipsis = '...';
	export let clamp = 1;
	export let reverse = false;
	export let splitByWords = false;
	export let disableCssClamp = false;
	export let onClampStart = () => {};
	export let onClampEnd = () => {};

	export let style = '';
	let _class = '';

	export { _class as class };

	let instance;
	$: {
		if (instance) {
			instance.reload({
				ellipsis,
				clamp,
				reverse,
				splitByWords,
				disableCssClamp,
				onClampStart,
				onClampEnd
			});
		}
	}
	onMount(() => {
		instance = new MultiClamp(containerDiv, {
			ellipsis,
			clamp,
			reverse,
			splitByWords,
			disableCssClamp,
			onClampStart,
			onClampEnd
		});
	});

	let containerDiv;
</script>

<div bind:this={containerDiv} class={_class} {style}><slot /></div>
