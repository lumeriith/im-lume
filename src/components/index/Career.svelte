<script>
	import career from '@data/career';

	import LineCard from '@components/cards/LineCard.svelte';
	import Container from '@components/general/Container.svelte';
	import PartHeading from '@components/general/PartHeading.svelte';
	import FullWidthSpace from '@components/general/FullWidthSpace.svelte';
</script>

<PartHeading title="Career" subtitle="경력 및 프리랜서 활동" />
<FullWidthSpace>
	<Container>
		<div class="flex justify-center items-center py-5">
			<div class="flex flex-wrap flex-col gap-4 items-stretch" style="width: min(700px, 100%)">
				{#each career as { content, time, type }, i}
					<LineCard {time} {type}>{content}</LineCard>
					{#if i !== career.length - 1}
						<div
							class="ml-auto mr-auto h-5 -m-2"
							style="border-left: 4px dotted hsl(325, 20%, 60%, 90%)"
							data-aos="fade"
						/>
					{/if}
				{/each}
			</div>
		</div>
	</Container>
</FullWidthSpace>
