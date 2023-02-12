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
		rel="noreferrer"
		class="text-[var(--main-color)] py-0.5 px-1.5 flex items-center hash-tag"
		>{text}<Icon icon="ci:external-link" class="ml-1" />
	</a>
{:else}
	<div class="py-0.5 px-1.5 flex items-center hash-tag opacity-80">
		{text}
	</div>
{/if}

<style>
	.hash-tag {
		@apply font-bold text-lg;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
