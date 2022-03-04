<script>
	import { each } from 'svelte/internal';
	import ExperienceCard from '../Cards/ExperienceCard.svelte';

	import Container from '../Container.svelte';
	import PartHeading from '../PartHeading.svelte';

	const experiences = [
		{
			title: 'Unity'
		},
		{
			title: 'C#'
		},
		{
			title: 'JavaScript'
		},
		{
			title: 'React.js'
		},

		{
			title: 'HTML5/CSS5'
		},
		{
			title: 'Python'
		},
		{
			title: 'Electron'
		}
	];
</script>

<Container>
	<PartHeading title="Experiences" subtitle="경험 및 운용 가능한 기술 스택" />
	<div class="flex justify-center items-center">
		<div class="flex flex-wrap flex-col gap-5 items-stretch w-full max-w-2xl">
			{#each experiences as { title, subtitle }}
				<ExperienceCard {title} {subtitle} />
			{/each}
		</div>
	</div>
</Container>
