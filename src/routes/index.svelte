<script>
	import About from '@components/index/About.svelte';
	import Projects from '@components/index/Projects.svelte';
	import Background from '@components/index/Background.svelte';
	import BigLizard from '@components/index/BigLizard.svelte';
	import Experiences from '@components/index/Experiences.svelte';
	import MainHead from '@components/index/MainHead.svelte';
</script>

<svelte:head>
	<title>Portfolio - imlu.me</title>
</svelte:head>

<Background />
<BigLizard />
<MainHead />
<Projects />
<Experiences />
<About />
