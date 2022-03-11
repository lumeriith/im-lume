<script>
	import ColorfulCard from './ColorfulCard.svelte';

	export let title = '';
	export let subtitle = '';
	export let details = [];
	export let imgUrl = '';
	export let background = 'white';
	export let color = 'black';
</script>

<div data-aos="zoom-in">
	<ColorfulCard class="flex flex-col flex-1 sm:flex-row">
		<div
			class="flex flex-row gap-5 p-4 text-black"
			style={`background: ${background}; color: ${color}`}
		>
			<div class="h-full w-12">
				<img src={imgUrl} alt={title} />
			</div>
			<div class="w-36 shrink-0">
				<h2 class="text-xl font-bold">
					{title}
				</h2>
				<h2 class="text-sm opacity-50">{subtitle}</h2>
			</div>
		</div>
		<div class="flex flex-row flex-wrap gap-x-3 gap-y-1 text-sm p-4">
			{#each details as detail, i (i)}
				<div>#{detail}</div>
			{/each}
		</div>
	</ColorfulCard>
</div>
