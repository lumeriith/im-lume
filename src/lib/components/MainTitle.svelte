<script>
	import bg from '$lib/assets/gradientbg.png';
	import { onDestroy } from 'svelte';
	import BigLizard from './BigLizard.svelte';
	import Container from './general/Container.svelte';

	const backgroundHandle = setInterval(() => {
		bgBrightness = Math.random() * 0.4 + 0.8;
	}, 500);

	onDestroy(() => {
		clearInterval(backgroundHandle);
	});

	let bgBrightness = 1;
</script>

<div
	class="absolute w-full h-[100vh] bg-wrapper pointer-events-none"
	style="background: url({bg}); background-repeat: no-repeat; background-size: 100% 100%; filter: brightness({bgBrightness})"
/>

<div
	class="absolute w-full h-[100vh] pointer-events-none -z-20"
	style="background: linear-gradient(#111f 0%, #000f 75%, #0000 100%);"
>
	<BigLizard />
</div>

<div
	class="absolute w-full h-[100vh] pointer-events-none -z-10"
	style="background: linear-gradient(#1110 0%, #111f 100%);"
/>

<div
	class="absolute top-[100vh] w-full h-[600px] pointer-events-none -z-20"
	style="background: linear-gradient(#111 0%, #0000 100%);"
/>

<Container
	class="flex flex-col h-[100vh] justify-center select-none overflow-hidden relative"
	style="--main-color: #9d03ff;"
>
	<div class="text-7xl font-bold text-center px-1 whitespace-nowrap self-end mb-3">
		Eunseop Shim.
	</div>
	<main class="flex text-5xl font-bold mb-8 self-end -mt-6 mr-4 text-[var(--main-color)]">
		Personal Portfolio
	</main>
	<section class="font-bold text-md content mb-5 flex flex-col items-end gap-2 mr-9">
		<div>Kyunghee University Undergraduate</div>
		<div>Enthusiastic Game Developer</div>
		<div>Hobbyist Web Developer</div>
	</section>
	<div class="flex flex-col gap-4 text-4xl font-bold items-start">
		<a href="#projects">Explore.</a>
		<a href="#about">Contacts.</a>
	</div>
	<div class="h-4" />
</Container>

<style>
	a:hover {
		text-decoration: underline;
	}

	.bg-wrapper {
		transition: filter 1s;
	}
</style>
