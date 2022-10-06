<script>
	import Icon from '@iconify/svelte';

	export let type;
	export let url;
	let text;

	if (type === 'youtube') {
		text = 'Youtube';
	} else if (type === 'github') {
		text = 'Github';
	} else if (type === 'binary') {
		text = 'Release';
	} else if (type === 'play') {
		text = 'Play';
	}
</script>

<a class="flex gap-1.5 items-center" href={url}>
	<Icon icon="akar-icons:link-chain" />
	<div>{text}</div>
	<div class="text-xs opacity-50">{url}</div>
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
