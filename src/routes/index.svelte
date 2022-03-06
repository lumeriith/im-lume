<script>
	import About from '../components/MainParts/About.svelte';
	import Projects from '../components/MainParts/Projects.svelte';
	import Background from '../components/MainParts/Background.svelte';
	import BigLizard from '../components/MainParts/BigLizard.svelte';
	import Experiences from '../components/MainParts/Experiences.svelte';
	import MainHead from '../components/MainParts/MainHead.svelte';
</script>

<Background />
<BigLizard />

<div class="z-10">
	<MainHead />
	<Projects />
	<Experiences />
	<About />
</div>
