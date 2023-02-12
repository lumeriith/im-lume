<script>
	import projects from '$lib/data/projects';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import Container from '../general/Container.svelte';
	import Icon from '@iconify/svelte';
	import BigProjectCard from '../cards/BigProjectCard.svelte';

	const featured = projects.filter((p) => p.featured);
	featured.forEach((f) => (f.id = projects.findIndex((p) => p.title == f.title)));

	const divs = [];
	featured.forEach(() => divs.push(null));

	let hoverIndex = 0;
	let centerIndex = -1;
	$: selectedIndex = hoverIndex != -1 ? hoverIndex : centerIndex;
</script>

<div style="--main-color: #ff3832;">
	<PartHeading title="Projects" subtitle="대외활동 및 프로젝트" id="projects" />

	<FullWidthSpace class="relative">
		<Container class="mt-24">
			<div class="flex flex-col gap-3 md:gap-4 xl:gap-16 items-stretch py-3 w-full select-none">
				{#each featured as project, i}
					<div
						bind:this={divs[i]}
						on:mouseenter={() => (hoverIndex = i)}
						on:mouseleave={() => (hoverIndex = i)}
					>
						<BigProjectCard {project} id={project.id} large selected={selectedIndex == i} />
					</div>
				{/each}
			</div>
			<div class="flex justify-end mt-12">
				<a class="show-more" href="/projects">More Projects</a>
			</div>
		</Container>
	</FullWidthSpace>
</div>

<style>
	.show-more {
		@apply text-4xl font-bold flex items-center;
	}

	.show-more:hover {
		@apply brightness-150 underline;
	}

	.show-more:active {
		@apply brightness-75;
	}
</style>
