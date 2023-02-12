<script>
	import experiences from '$lib/data/experiences';

	import StackCard from '$lib/components/cards/StackCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
</script>

<div style="--main-color: #ff5c17">
	<PartHeading title="Experiences" subtitle="경험 및 운용 가능한 기술 스택" id="experiences" />
	<FullWidthSpace>
		<Container>
			<div
				class="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-8 py-8 flex-wrap flex-col gap-x-24 gap-y-32 items-stretch"
			>
				{#each experiences as { title, subtitle, details, imgUrl, background, color, forceWhite }}
					<StackCard {title} {subtitle} {details} {imgUrl} {background} {color} {forceWhite} />
				{/each}
			</div>
		</Container>
	</FullWidthSpace>
</div>
