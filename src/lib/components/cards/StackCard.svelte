<script>
	import ColorfulCard from './ColorfulCard.svelte';
	import DetailItem from './StackCard/DetailItem.svelte';

	export let title = '';
	export let subtitle = '';
	export let details = [];
	export let imgUrl = '';
	export let background = 'white';
	export let color = 'black';
</script>

<div data-aos="zoom-in">
	<ColorfulCard class="flex flex-col flex-1">
		<div
			class="flex flex-row gap-3.5 p-4 text-black items-center"
			style={`background: ${background}; color: ${color}`}
		>
			<img class="h-8" src={imgUrl} alt={title} />
			<div class="shrink-0 text-xl font-bold">
				{title}
			</div>
		</div>
		<div class="p-4">
			<h2 class="text-sm opacity-60 px-2 pb-3">{subtitle}</h2>
			<div class="flex flex-row flex-wrap gap-x-2 gap-y-2 text-sm items-start">
				{#each details as detail, i}
					<DetailItem {detail} />
				{/each}
			</div>
		</div>
	</ColorfulCard>
</div>
