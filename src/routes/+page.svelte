<script>
	import MainTitle from '$lib/components/MainTitle.svelte';
	import AboutSection from '$lib/components/index/AboutSection.svelte';
	import ProjectsSection from '$lib/components/index/ProjectsSection.svelte';
	import ExperiencesSection from '$lib/components/index/ExperiencesSection.svelte';
	import CareerSection from '$lib/components/index/CareerSection.svelte';
	import BigLizard from '$lib/components/BigLizard.svelte';
</script>

<svelte:head>
	<title>Eunseop Shim's Portfolio</title>
</svelte:head>

<BigLizard />

<div class="w-full">
	<MainTitle />
	<ProjectsSection />
	<div class="h-16" />
	<ExperiencesSection />
	<div class="h-16" />
	<CareerSection />
	<div class="h-16" />
	<AboutSection />
</div>
