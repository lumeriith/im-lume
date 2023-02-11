<script>
	import Icon from '@iconify/svelte';
	import MultiClamp from './MultiClamp.svelte';

	export let type;
	export let url;
</script>

<div class="flex gap-2 items-center" href={url} target="_blank">
	<Icon class="opacity-50 w-4" icon="akar-icons:link-chain" />
	<div class="shrink-0">{type}</div>
	<a href={url}>
		<MultiClamp class="text-xs">{url}</MultiClamp>
	</a>
</div>

<style>
	a {
		transition: transform 0.1s;
		opacity: 0.5;
	}

	a:hover {
		filter: brightness(150%);
		text-decoration: underline;
		opacity: 0.8;
	}

	a:active {
		filter: brightness(70%);
		opacity: 0.5;
	}
</style>
