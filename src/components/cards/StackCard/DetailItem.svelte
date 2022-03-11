<script>
	import { HashIcon, LinkIcon } from 'svelte-feather-icons';

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
		class="bg-[#ff69a823] text-[#ff579d] py-1 px-3 rounded-lg flex items-center gap-1"
		><HashIcon class="w-3.5 h-3.5 -ml-1.5 -mr-0.5 opacity-50" />{text}<LinkIcon
			class="w-3.5 h-3.5 -mr-1"
		/>
	</a>
{:else}
	<div class="bg-[#fff1] text-[#fffe] py-1 px-3 rounded-lg flex items-center gap-1">
		<HashIcon class="w-3.5 h-3.5 -ml-1.5 -mr-0.5 opacity-50" />{text}
	</div>
{/if}

<style>
	a {
		transform: scale(1);
		filter: brightness(100%);
		transition: transform 0.1s;
	}

	a:hover {
		transform: scale(1.1);
		filter: brightness(150%);
	}

	a:active {
		transform: scale(0.9);
		filter: brightness(70%);
	}
</style>
