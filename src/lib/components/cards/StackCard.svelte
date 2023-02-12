<script>
	import ColorfulCard from './ColorfulCard.svelte';
	import HashTagItem from './StackCard/HashTagItem.svelte';

	export let title = '';
	export let subtitle = '';
	export let details = [];
	export let imgUrl = '';
	export let background = 'white';
	export let color = 'black';
	export let forceWhite = false;
</script>

<div
	class="flex flex-col flex-1 font-monospace text-center justify-center"
	style="--main-color: {color};"
>
	<div class="flex flex-col flex-wrap gap-x-2 gap-y-2 items-center">
		<div
			class="flex flex-row gap-2 px-1.5 items-center text-3xl sm:text-4xl font-bold"
			style="color: {color};"
		>
			<img
				class="h-6 sm:h-7 mt-0.5 sm:mt-1.5"
				style={forceWhite ? 'filter: brightness(100)' : ''}
				src={imgUrl}
				alt={title}
			/>
			<div class="shrink-0">
				{title}
			</div>
		</div>
		<div class="flex gap-x-2 gap-y-1 mb-3 flex-wrap justify-center">
			{#each details as detail, i}
				<HashTagItem {detail} />
			{/each}
		</div>
	</div>
	<div class="pt-2 flex flex-col gap-3 items-center">
		{#each subtitle.split('\n') as s}
			<div class="text-xs sm:text-sm opacity-80 text-[#ffffff]">{s}</div>
		{/each}
	</div>
</div>
