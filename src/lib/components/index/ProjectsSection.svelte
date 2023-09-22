<script>
	import projects from '$lib/data/projects';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import Container from '../general/Container.svelte';
	import Icon from '@iconify/svelte';
	import BigProjectCard from '../cards/BigProjectCard.svelte';

	const featured = projects.filter((p) => p.featured);

	const divs = [];
	featured.forEach(() => divs.push(null));

	let hoverIndex = 0;
	let centerIndex = -1;
	let isHovering = false;
	$: selectedIndex = hoverIndex != -1 ? hoverIndex : centerIndex;

	function onScroll(e) {
		if (!isHovering || matchMedia('(pointer:coarse)').matches) hoverIndex = -1;
		const centerOfScreen = window.scrollY + window.innerHeight / 2;
		let closestDistance = 999999;
		let bestIndex = 0;
		for (let i = 0; i < divs.length; i++) {
			let rect = divs[i].getBoundingClientRect();
			let centerOfElement =
				rect.top + document.documentElement.scrollTop + divs[i].clientHeight / 2;
			const distance = Math.abs(centerOfElement - centerOfScreen);

			if (closestDistance > distance) {
				bestIndex = i;
				closestDistance = distance;
			}
		}
		centerIndex = bestIndex;
	}
</script>

<svelte:window on:scroll={onScroll} />

<div style="--main-color: #ff3832;">
	<PartHeading title="Projects" subtitle="대외활동 및 프로젝트" id="projects" />

	<FullWidthSpace class="relative">
		<Container class="mt-12">
			<div
				class="flex flex-col gap-6 sm:gap-2 md:gap-6 xl:gap-10 items-stretch py-3 w-full select-none"
			>
				{#each featured as project, i}
					<div
						bind:this={divs[i]}
						on:mouseenter={() => {
							hoverIndex = i;
							isHovering = true;
						}}
						on:mouseleave={() => (isHovering = false)}
					>
						<BigProjectCard {project} large selected={selectedIndex == i} />
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
		@apply text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold flex items-center underline;
	}

	.show-more:hover {
		@apply brightness-150 underline;
	}

	.show-more:active {
		@apply brightness-75;
	}
</style>
