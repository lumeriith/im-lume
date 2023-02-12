<script>
	import career from '$lib/data/career';

	import LineCard from '$lib/components/cards/LineCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
</script>

<div style="--main-color: #ccff36">
	<PartHeading title="Career" subtitle="경력 및 프리랜서 활동" id="career" />
	<FullWidthSpace>
		<Container class="mt-16">
			<div class="flex flex-wrap flex-col gap-6 items-center">
				{#each career as { content, time, at }, i}
					<LineCard {time} {at}>
						{content}
					</LineCard>
					{#if i !== career.length - 1}
						<div class="h-5 -m-1" style="border-left: 4px dotted #666" />
					{/if}
				{/each}
			</div>
		</Container>
	</FullWidthSpace>
</div>
