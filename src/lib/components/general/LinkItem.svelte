<script>
	import Icon from '@iconify/svelte';
	import MultiClamp from './MultiClamp.svelte';

	export let type;
	export let url;
	export let display;
</script>

{#if display == 'big-button'}
	<a href={url} target="_blank" class="big-button">
		{type}
	</a>
{:else}
	<a href={url} target="_blank" class="normal-link">
		<div class="flex gap-2 items-center" href={url} target="_blank">
			<Icon class="w-4" icon="akar-icons:link-chain" />
			<div class="shrink-0 type-display">{type}</div>

			<div class="url-display">
				<MultiClamp class="text-xs">{url}</MultiClamp>
			</div>
		</div>
	</a>
{/if}

<style>
	.normal-link .url-display {
		transition: transform 0.1s;
		opacity: 0.5;
	}

	.normal-link:hover .url-display {
		filter: brightness(150%);
		text-decoration: underline;
		opacity: 0.8;
	}

	.normal-link:active .url-display {
		filter: brightness(70%);
		opacity: 0.5;
	}

	.big-button {
		@apply py-2 px-4 rounded-md;
		background-color: var(--color-0);
		color: white;
		text-shadow: 1px 1px 4px #0005;
		position: relative;
	}

	.big-button::before {
		@apply rounded-md;
		display: block;
		content: ' ';
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.5;
		box-shadow: 0 0 20px 0 var(--color-0);
	}

	.big-button:hover {
		background-color: var(--color-0);
		filter: brightness(1.2);
	}

	.big-button:active {
		opacity: 0.5;
	}
</style>
