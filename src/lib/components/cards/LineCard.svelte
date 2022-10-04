<script>
	import ColorfulCard from './ColorfulCard.svelte';

	export let time = '';
</script>

<div class="gap-2 flex-1 flex items-center flex-row font-monospace">
	<div class="opacity-50 text-xs w-32">{time}</div>

	<div class="text-left text-sm"><slot /></div>
</div>
