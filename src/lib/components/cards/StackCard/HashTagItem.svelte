<script>
	import Icon from '@iconify/svelte';
	export let detail;

	let text = '';
	let url = null;

	if (typeof detail === 'object') {
		text = detail[0];
		url = detail[1];
	} else {
		text = detail;
	}
</script>

{#if url}
	<a
		href={url}
		target="_blank"
		class="bg-[#ff7ea938] text-[#ffacba] py-1 px-3 rounded-sm flex items-center"
		><Icon icon="line-md:hash-small" class="text-lg -ml-1" />{text}<Icon
			icon="ci:external-link"
			class="ml-1"
		/>
	</a>
{:else}
	<div class="bg-[#fff1] text-[#fffe] py-1 px-3 rounded-sm flex items-center">
		<Icon icon="line-md:hash-small" class="text-lg -ml-1" />{text}
	</div>
{/if}

<style>
	a {
		transform: scale(1);
		filter: brightness(100%);
		transition: transform 0.1s;
	}

	a:hover {
		transform: scale(1.04);
		filter: brightness(150%);
	}

	a:active {
		transform: scale(0.97);
		filter: brightness(70%);
	}
</style>
