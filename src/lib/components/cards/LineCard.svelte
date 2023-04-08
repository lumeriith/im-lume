<script>
	import { applyAction } from '$app/forms';
	import Icon from '@iconify/svelte';
	import ColorfulCard from './ColorfulCard.svelte';

	export let time = '';
	export let at = '';
	export let atUrl = '';
</script>

<div class="gap-2 flex-1 flex flex-col items-center font-monospace font-bold text-center">
	<div class="text-sm sm:text-base text-[var(--main-color)]">{time}</div>

	<div class="text-base sm:text-xl"><slot /></div>
	{#if atUrl}
		<a href={atUrl} target="_blank">
			<div class="text-sm sm:text-base text-[var(--main-color)] flex items-center gap-1">
				@ {at}<Icon icon="ci:external-link" class="text-sm sm:text-base mt-0.5" />
			</div>
		</a>
	{:else}
		<div class="text-sm sm:text-base text-[var(--main-color)]">
			@ {at}
		</div>
	{/if}
</div>

<style>
	a:hover {
		@apply underline;
		text-decoration-color: var(--main-color);
	}
</style>
