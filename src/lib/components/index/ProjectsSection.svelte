<script>
	import projects from '$lib/data/projects';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import Container from '../general/Container.svelte';
	import Icon from '@iconify/svelte';

	const featured = projects.filter((p) => p.featured);
</script>

<PartHeading title="Projects" subtitle="대외활동 및 프로젝트" id="projects" />

<FullWidthSpace class="relative">
	<Container>
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch py-3 w-full select-none"
		>
			{#each featured as project, i}
				<ProjectCard {project} id={i} large />
			{/each}
		</div>
		<div class="flex justify-end">
			<a class="show-more" href="/projects">
				프로젝트 더보기
				<Icon class="text-3xl" icon="material-symbols:chevron-right" />
			</a>
		</div>
	</Container>
</FullWidthSpace>

<style>
	.show-more {
		@apply text-xl flex items-center underline text-[#58ee65];
	}

	.show-more:hover {
		@apply brightness-150;
	}

	.show-more:active {
		@apply brightness-75;
	}
</style>
