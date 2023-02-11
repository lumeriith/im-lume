<script>
	import career from '$lib/data/career';

	import LineCard from '$lib/components/cards/LineCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
</script>

<PartHeading title="Career" subtitle="경력 및 프리랜서 활동" id="career" />
<FullWidthSpace>
	<Container>
		<div class="flex justify-start items-center py-5">
			<div class="flex flex-wrap flex-col gap-4 items-stretch" style="width: min(700px, 100%)">
				{#each career as { content, time, at }, i}
					<LineCard {time}>{content} <span class="opacity-50">@ {at}</span></LineCard>
					{#if i !== career.length - 1}
						<div class="ml-[52px] h-3 -m-1" style="border-left: 2px dotted #666" />
					{/if}
				{/each}
			</div>
		</div>
	</Container>
</FullWidthSpace>
