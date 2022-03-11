<script>
	import About from '@components/index/About.svelte';
	import Projects from '@components/index/Projects.svelte';
	import Background from '@components/index/Background.svelte';
	import BigLizard from '@components/index/BigLizard.svelte';
	import Experiences from '@components/index/Experiences.svelte';
	import MainHead from '@components/index/MainHead.svelte';
	import Career from '@components/index/Career.svelte';
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
