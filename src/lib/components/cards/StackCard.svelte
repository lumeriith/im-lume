<script>
	import ColorfulCard from './ColorfulCard.svelte';
	import HashTagItem from './StackCard/HashTagItem.svelte';

	export let title = '';
	export let subtitle = '';
	export let details = [];
	export let imgUrl = '';
	export let background = 'white';
	export let color = 'black';
</script>

<ColorfulCard class="flex flex-col flex-1">
	<div
		class="flex flex-row gap-3 p-3 text-black items-center"
		style={`background: ${background}; color: ${color}`}
	>
		<img class="h-7" src={imgUrl} alt={title} />
		<div class="shrink-0 text-xl font-bold">
			{title}
		</div>
	</div>
	<div class="p-4 pt-3">
		<h2 class="text-sm opacity-60 px-2 pb-3">{subtitle}</h2>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-2 text-sm items-start">
			{#each details as detail, i}
				<HashTagItem {detail} />
			{/each}
		</div>
	</div>
</ColorfulCard>
