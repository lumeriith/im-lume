<script>
	import Background from '$lib/components/Background.svelte';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import NavBar from '$lib/components/general/NavBar.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import projects from '$lib/data/projects';
</script>

<NavBar />
<Background />
<div style="--main-color: #ff3832">
	<div class="h-32" />
	<Container>
		<PartHeading title="All Projects" subtitle="프로젝트 더보기" />
	</Container>
	<Container>
		<div class="flex flex-col gap-2 md:gap-4 items-stretch py-3 w-full select-none">
			{#each projects as project, i}
				<ProjectCard {project} id={i} />
			{/each}
		</div>
	</Container>
	<div class="h-32" />
</div>
