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
	<a href={url} target="_blank" class="bg-[#ff7ea938] text-[#b77882] py-1 px-2 flex items-center"
		><Icon icon="line-md:hash-small" class="text-lg -ml-1" />{text}<Icon
			icon="ci:external-link"
			class="ml-1"
		/>
	</a>
{:else}
	<div class="bg-[#fff1] text-[#fff8] py-1 px-2 flex items-center">
		<Icon icon="line-md:hash-small" class="text-lg -ml-1" />{text}
	</div>
{/if}

<style>
	a {
		transform: translateY(0);
		filter: brightness(100%);
		transition: transform 0.1s;
	}

	a:hover {
		transform: translateY(-3px);
		filter: brightness(150%);
	}

	a:active {
		transform: scale(0.97);
		filter: brightness(70%);
	}
</style>
