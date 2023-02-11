<script>
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import NavBar from '$lib/components/general/NavBar.svelte';
	import projects from '$lib/data/projects';
</script>

<NavBar />

<div class="h-32" />
<Container>
	<div class="text-2xl mb-1 mt-7 font-monospace flex">
		<span class="text-[#ffcc22]">Projects</span>
		<span class="opacity-30">(</span>
		<span class="text-[#72da4c] font-sans">"대외활동 및 프로젝트"</span>
		<span class="opacity-30">);</span>
	</div>
</Container>
<Container>
	<div class="flex flex-col gap-2 md:gap-4 items-stretch py-3 w-full select-none">
		{#each projects as project, i}
			<ProjectCard {project} id={i} />
		{/each}
	</div>
</Container>
<div class="h-32" />
