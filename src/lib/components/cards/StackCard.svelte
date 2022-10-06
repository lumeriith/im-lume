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

<div class="flex flex-col flex-1 font-monospace">
	<div class="flex flex-row flex-wrap gap-x-2 gap-y-2 text-sm items-stretch">
		<div
			class="flex flex-row gap-2 px-1.5 text-black items-center text-sm"
			style={`background: ${background}; color: ${color}`}
		>
			<img class="h-4" src={imgUrl} alt={title} />
			<div class="shrink-0">
				{title}
			</div>
		</div>
		{#each details as detail, i}
			<HashTagItem {detail} />
		{/each}
	</div>
	<div class="pt-2">
		<div class="text-sm opacity-80 text-[#ffffff]">// {subtitle}</div>
	</div>
</div>
