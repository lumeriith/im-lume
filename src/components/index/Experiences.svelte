<script>
	import experiences from '@data/experiences';

	import StackCard from '@components/cards/StackCard.svelte';
	import Container from '@components/general/Container.svelte';
	import PartHeading from '@components/general/PartHeading.svelte';
	import FullWidthSpace from '@components/general/FullWidthSpace.svelte';
</script>

<PartHeading title="Experience" subtitle="경험 및 운용 가능한 기술 스택" />
<FullWidthSpace>
	<Container>
		<div class="flex justify-center items-center py-6">
			<div class="flex flex-wrap flex-col gap-5 items-stretch" style="width: min(600px, 100%)">
				{#each experiences as { title, subtitle, details, imgUrl, background, color }}
					<StackCard {title} {subtitle} {details} {imgUrl} {background} {color} />
				{/each}
			</div>
		</div>
	</Container>
</FullWidthSpace>
