<script>
	import Icon from '@iconify/svelte';
	import MultiClamp from './MultiClamp.svelte';

	export let type;
	export let url;
</script>

<a class="flex gap-2 items-center" href={url} target="_blank">
	<Icon icon="akar-icons:link-chain" />
	<div class="shrink-0">{type}</div>
	<MultiClamp class="text-xs opacity-50">{url}</MultiClamp>
</a>

<style>
	a {
		filter: brightness(100%);
		transition: transform 0.1s;
	}

	a:hover {
		filter: brightness(150%);
	}

	a:active {
		filter: brightness(70%);
	}
</style>
