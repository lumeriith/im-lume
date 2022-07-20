<script>
	import experiences from '$lib/data/experiences';

	import StackCard from '$lib/components/cards/StackCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
</script>

<PartHeading title="Experiences" subtitle="경험 및 운용 가능한 기술 스택" />
<FullWidthSpace>
	<Container>
		<div class="flex justify-center items-center py-6">
			<div class="flex flex-wrap flex-col gap-3 items-stretch" style="width: min(600px, 100%)">
				{#each experiences as { title, subtitle, details, imgUrl, background, color }}
					<StackCard {title} {subtitle} {details} {imgUrl} {background} {color} />
				{/each}
			</div>
		</div>
	</Container>
</FullWidthSpace>
