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

<Background />
<div class="w-full">
	<MainTitle />
	<div class="h-32" />
	<ProjectsSection />
	<div class="h-32" />
	<AwardsSection />
	<div class="h-32" />
	<ExperiencesSection />
	<div class="h-32" />
	<CareerSection />
	<div class="h-32" />
	<AboutSection />
</div>
