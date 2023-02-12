<script>
	import { goto } from '$app/navigation';
	import bg from '$lib/assets/gradientbg.png';
	import Icon from '@iconify/svelte';
	import { onDestroy } from 'svelte';
	import BigLizard from './BigLizard.svelte';
	import Container from './general/Container.svelte';

	const backgroundHandle = setInterval(() => {
		bgBrightness = Math.random() * 0.4 + 0.4;
	}, 500);

	onDestroy(() => {
		clearInterval(backgroundHandle);
	});

	let bgBrightness = 0.6;

	function onScroll(e) {
		const projects = document.getElementById('projects');
		const rect = projects?.getBoundingClientRect();
		console.log(rect.top);
		if (e.deltaY > 0 && rect.top > 0) {
			e.preventDefault();
			projects.scrollIntoView({ behavior: 'smooth' });
		} else if (e.deltaY < 0 && rect.top - e.deltaY > 0) {
			window.scrollTo({ behavior: 'smooth', top: 0 });
			e.preventDefault();
		}
	}
</script>

<svelte:window on:wheel|nonpassive={onScroll} />

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
	class="absolute top-[100vh] w-full h-[20vw] pointer-events-none -z-20"
	style="background: linear-gradient(#111 0%, #1110 100%);"
/>

<Container
	class="flex flex-col h-[100vh] justify-center select-none overflow-hidden relative"
	style="--main-color: #ff009a;"
>
	<div
		class="text-4xl sm:text-6xl md:text-7xl font-bold text-center px-1 whitespace-nowrap self-end mb-3"
	>
		Eunseop Shim.
	</div>
	<main
		class="flex text-2xl sm:text-3xl md:text-4xl font-bold mb-8 self-end -mt-2 mr-1 sm:mr-6 text-[var(--main-color)] -z-10"
		style="text-shadow: 0 0 24px #aaa1;"
	>
		Developer Portfolio
	</main>
	<section
		class="font-bold text-sm sm:text-base content mb-5 flex flex-col items-end gap-2 mr-1 sm:mr-9"
	>
		<div>Kyunghee University Undergraduate</div>
		<div>Enthusiastic Game Developer</div>
		<div>Hobbyist Web Developer</div>
	</section>
	<div
		class="flex flex-col gap-2 sm:gap-6 text-base sm:text-xl font-bold items-start mt-8 sm:mt-0"
		style="letter-spacing: 4px;"
	>
		<a href="#projects">Projects</a>
		<a href="#awards">Awards</a>
		<a href="#experiences">Experiences</a>
		<a href="#career">Career</a>
		<a href="#about">Contacts</a>
	</div>
	<div class="absolute inset-0 pointer-events-none flex justify-center items-end">
		<div
			class="mb-8 md:mb-12 text-xl font-bold flex flex-col items-center"
			style="letter-spacing: 6px"
		>
			<span class="mb-1.5 md:mb-3 arrow">Explore</span>
			<div class="arrow" style="animation-delay: 250ms;">
				<Icon icon="mdi:chevron-down" class="text-2xl" />
			</div>
		</div>
	</div>
</Container>

<style>
	a {
		text-decoration: underline;
	}

	a:hover {
		text-decoration: underline;
	}

	.bg-wrapper {
		transition: filter 1s;
	}

	.arrow {
		animation: MoveUpDown 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
	}

	@keyframes MoveUpDown {
		0%,
		100% {
			transform: translateY(8px);
		}
		50% {
			transform: translateY(-8px);
		}
	}
</style>
