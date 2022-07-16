<script>
	import About from '$lib/components/index/About.svelte';
	import Projects from '$lib/components/index/Projects.svelte';
	import Background from '$lib/components/index/Background.svelte';
	import BigLizard from '$lib/components/index/BigLizard.svelte';
	import Experiences from '$lib/components/index/Experiences.svelte';
	import MainHead from '$lib/components/index/MainHead.svelte';
	import Career from '$lib/components/index/Career.svelte';
</script>

<svelte:head>
	<title>Portfolio - imlu.me</title>
</svelte:head>

<Background />
<BigLizard />

<MainHead />
<Projects />
<div class="h-16" />
<Experiences />
<div class="h-16" />
<Career />
<div class="h-16" />
<About />
