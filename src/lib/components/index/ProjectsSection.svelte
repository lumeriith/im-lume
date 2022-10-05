<script>
	import projects from '$lib/data/projects';
	import { fade, scale } from 'svelte/transition';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import ProjectDetailCard from '$lib/components/cards/ProjectDetailCard.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import Container from '../general/Container.svelte';

	let isDetailShown = false;
	let selectedIndex = -1;

	function showDetail(i) {
		isDetailShown = true;
		selectedIndex = i;
	}

	function hideDetail() {
		isDetailShown = false;
		selectedIndex = -1;
	}
</script>

<PartHeading title="Projects" subtitle="대외활동 및 프로젝트" />

<FullWidthSpace class="relative">
	<Container>
		<div class="flex flex-wrap gap-3 md:gap-4 items-stretch py-3 w-fit select-none">
			{#each projects as project, i}
				<ProjectCard {project} id={i} />
			{/each}
		</div>
	</Container>
</FullWidthSpace>

{#if isDetailShown}
	<div class="fixed inset-0 z-40 sm:p-8">
		<div
			class="fixed inset-0 bg-[#1a050ea4] text-white flex flex-col justify-end items-center -z-10"
			on:mousedown={hideDetail}
			transition:fade={{ duration: 100 }}
		/>

		<ProjectDetailCard project={projects[selectedIndex]} on:close={hideDetail} />
	</div>
{/if}
