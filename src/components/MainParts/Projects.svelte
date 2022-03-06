<script>
	import { fade, scale } from 'svelte/transition';

	import ProjectCard from '../Cards/ProjectCard.svelte';
	import ProjectDetailCard from '../Cards/ProjectDetailCard.svelte';
	import Container from '../Container.svelte';
	import FullWidthSpace from '../FullWidthSpace.svelte';
	import PartHeading from '../PartHeading.svelte';
	import projects from './ProjectsData';

	let isDetailShown = false;
	let selectedProject;

	$: {
	}

	function showDetail(proj) {
		isDetailShown = true;
		selectedProject = proj;
	}

	function hideDetail() {
		isDetailShown = false;
	}
</script>

<PartHeading title="Projects" subtitle="수상경력, 대외활동 등 여러 활동" />

<FullWidthSpace class="mb-24">
	<Container>
		<div class="flex gap-3 md:gap-10 flex-wrap justify-center items-stretch">
			{#each projects as project, i (i)}
				<ProjectCard {...project} on:mousedown={() => showDetail(project)} />
			{/each}
		</div>
	</Container>
</FullWidthSpace>

{#if isDetailShown}
	<div class="fixed inset-0 z-10 pt-12  sm:p-8">
		<div
			transition:fade={{ duration: 100 }}
			class="absolute inset-0"
			style="background: hsl(319, 97%, 2%, 70%)"
			on:mousedown={hideDetail}
		/>
		<div
			class="w-full h-full flex justify-center items-center"
			transition:scale={{ duration: 200, start: 0.8 }}
		>
			<ProjectDetailCard {...selectedProject} on:close={hideDetail} />
		</div>
	</div>
{/if}
