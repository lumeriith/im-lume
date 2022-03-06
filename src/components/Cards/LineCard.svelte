<script>
	import ColorfulCard from './ColorfulCard.svelte';

	export let content = '';
	export let time = '';
</script>

<div data-aos="zoom-in">
	<ColorfulCard class="gap-2 flex-1 p-2 pl-3 pr-3 flex items-center flex-row justify-between">
		<div class="text-left">{@html content}</div>
		<div class="opacity-50 text-xs text-right">{time}</div>
	</ColorfulCard>
</div>
