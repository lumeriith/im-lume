<script>
	import Icon from '@iconify/svelte';
	import Container from './general/Container.svelte';
	import bg from '$lib/assets/gradientbg.png';
	import { onDestroy } from 'svelte';
	import LizardSmoothie from './LizardSmoothie.svelte';

	const typewriterHandle = setInterval(() => {
		currentTypewriterLength++;
		if (currentTypewriterLength > typewriterText.length) {
			clearInterval(typewriterHandle);
		}
	}, 120);

	const backgroundHandle = setInterval(() => {
		bgBrightness = Math.random() * 0.4 + 0.9;
	}, 500);

	onDestroy(() => {
		clearInterval(backgroundHandle);
	});

	const typewriterText = 'Eunseop Shim';
	let currentTypewriterLength = 1;
	let bgBrightness = 1;

	const defocusYSize = 400;
	const defocusStartYRatio = 1 / 4;
	let defocusFactor = 0;
	let titleDiv;

	function updateBlurStrength() {
		defocusFactor = Math.max(
			0,
			Math.min(1, (window.scrollY - defocusStartYRatio * titleDiv.scrollHeight) / defocusYSize)
		);
	}
</script>

<svelte:window on:scroll={updateBlurStrength} />

<div
	bind:this={titleDiv}
	class="h-[100vh] pt-6 flex justify-center items-center font-monospace bg-wrapper"
	style="background: url({bg}); background-repeat: no-repeat; background-size: 100% 100%; filter: brightness({bgBrightness})"
>
	<div
		class="pb-12 inner-container"
		style="filter: blur({defocusFactor *
			8}px) brightness(var(--brightness)); transform: scale(calc({1 +
			defocusFactor * 0.1} + var(--add-scale)))"
	>
		<header class="flex gap-2 items-center mb-1">
			<LizardSmoothie />
			<div class="glow text-2xl text-center typewriter px-1 whitespace-nowrap typewriter">
				{typewriterText.substring(0, currentTypewriterLength)}
			</div>
		</header>
		<main class="flex text-sm mb-4">Personal Portfolio</main>
		<section class="text-md content mb-3">
			<div>- Kyunghee University Undergraduate</div>
			<div>- Wannabe Game Developer</div>
			<div>- Hobbiest Web Developer</div>
		</section>
		<div class="flex flex-col items-end gap-1">
			<a class="glow" href="#projects">>Explore</a>
			<a class="glow" href="#about">>Contact</a>
		</div>
		<div class="h-4" />
	</div>
</div>

<style>
	a {
		opacity: 0.8;
	}

	a:hover {
		text-decoration: underline;
		opacity: 1;
	}

	a:active {
		filter: brightness(0.5);
	}

	.inner-container {
		transition: transform 0.5s, filter 0.1s;
		--brightness: 1;
		--add-scale: 0;
	}

	.inner-container:hover {
		--add-scale: 0;
		--brightness: 1.2;
	}

	.bg-wrapper {
		transition: filter 1s;
	}

	.glow {
		text-shadow: 0 0 8px #fff9;
	}

	.content {
		filter: brightness(1.8);
		text-shadow: 0 0 20px rgba(255, 81, 148, 0.4);
		background: linear-gradient(135deg, #11d573 0%, #257d38 30%, #713e57 70%, #351d1d 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.typewriter {
		border-right: 0.12em solid; /* The typwriter cursor */
		animation: blink-caret 0.75s step-end infinite;
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: rgba(255, 255, 255, 0.486);
		}
	}
</style>
