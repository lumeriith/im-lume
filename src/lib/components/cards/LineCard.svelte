<script>
	import ColorfulCard from './ColorfulCard.svelte';

	export let time = '';
	export let type;
</script>

<ColorfulCard class="gap-2 flex-1 p-2 pl-3 pr-3 flex items-center flex-row justify-between">
	<div class="text-left text-sm"><slot /></div>
	<div class="opacity-50 text-xs text-right">{time}</div>
</ColorfulCard>
