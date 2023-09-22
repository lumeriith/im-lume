<script>
	import MainTitle from '$lib/components/MainTitle.svelte';
	import AboutSection from '$lib/components/index/AboutSection.svelte';
	import ProjectsSection from '$lib/components/index/ProjectsSection.svelte';
	import ExperiencesSection from '$lib/components/index/ExperiencesSection.svelte';
	import CareerSection from '$lib/components/index/CareerSection.svelte';
	import BigLizard from '$lib/components/BigLizard.svelte';
	import AwardsSection from '$lib/components/index/AwardsSection.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<svelte:head>
	<title>Eunseop Shim's Portfolio</title>
</svelte:head>

<Background class="top-[100vh]" />
<div class="w-full">
	<MainTitle />
	<div class="h-28" />
	<ProjectsSection />
	<div class="h-28" />
	<AwardsSection />
	<div class="h-28" />
	<ExperiencesSection />
	<div class="h-28" />
	<CareerSection />
	<div class="h-28" />
	<AboutSection />
</div>
