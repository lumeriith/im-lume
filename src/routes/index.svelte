<script>
	import MainTitle from '$lib/components/MainTitle.svelte';
	import BigLizard from '$lib/components/BigLizard.svelte';

	import AboutSection from '$lib/components/index/AboutSection.svelte';
	import ProjectsSection from '$lib/components/index/ProjectsSection.svelte';
	import BackgroundSection from '$lib/components/index/BackgroundSection.svelte';
	import ExperiencesSection from '$lib/components/index/ExperiencesSection.svelte';
	import CareerSection from '$lib/components/index/CareerSection.svelte';
</script>

<svelte:head>
	<title>Portfolio - imlu.me</title>
</svelte:head>

<div class="opacity-0 select-none">
	without this div the background lizard gets cut off for some reason. probably some bug related to
	border box cutting off margins?
</div>

<BackgroundSection />
<BigLizard />

<MainTitle />
<ProjectsSection />
<div class="h-16" />
<ExperiencesSection />
<div class="h-16" />
<CareerSection />
<div class="h-16" />
<AboutSection />
