<script>
	import projects from '$lib/data/projects';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import Container from '../general/Container.svelte';
</script>

<PartHeading title="Projects" subtitle="대외활동 및 프로젝트" />

<FullWidthSpace class="relative">
	<Container>
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch py-3 w-fit select-none"
		>
			{#each projects as project, i}
				<ProjectCard {project} id={i} />
			{/each}
		</div>
	</Container>
</FullWidthSpace>
