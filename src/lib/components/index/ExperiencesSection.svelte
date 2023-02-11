<script>
	import experiences from '$lib/data/experiences';

	import StackCard from '$lib/components/cards/StackCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
</script>

<PartHeading title="Experiences" subtitle="경험 및 운용 가능한 기술 스택" id="experiences" />
<FullWidthSpace>
	<Container>
		<div class="flex flex-wrap flex-col gap-12 items-stretch">
			{#each experiences as { title, subtitle, details, imgUrl, background, color }}
				<StackCard {title} {subtitle} {details} {imgUrl} {background} {color} />
			{/each}
		</div>
	</Container>
</FullWidthSpace>
