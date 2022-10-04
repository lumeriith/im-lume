<script>
	import Icon from '@iconify/svelte';
	import Container from './general/Container.svelte';
	import bg from '$lib/assets/gradientbg.png';

	const handle = setInterval(() => {
		currentTypewriterLength++;
		if (currentTypewriterLength > typewriterText.length) {
			clearInterval(handle);
		}
	}, 120);

	const typewriterText = 'Eunseop Shim';
	let currentTypewriterLength = 1;
</script>

<div
	class="h-64 pt-6"
	style="background: url({bg}); background-repeat: no-repeat; background-size: 100% 100%"
>
	<Container class="font-monospace">
		<header class="flex gap-2 items-center mb-4">
			<div class="flex text-3xl">
				<Icon icon="fluent-emoji-high-contrast:lizard" />
				<Icon icon="fluent:drink-to-go-20-filled" />
			</div>
			<div class="title text-2xl text-center typewriter px-1 whitespace-nowrap typewriter">
				{typewriterText.substring(0, currentTypewriterLength)}
			</div>
		</header>

		<section class="text-md">
			<div>- Kyunghee University Undergraduate</div>
			<div>- Wannabe Game Developer</div>
			<div>- Hobbiest Web Developer</div>
		</section>
		<div class="h-4" />
		<main class="text-md">Personal Portfolio</main>
	</Container>
</div>

<style>
	.title {
		filter: brightness(1.2) saturate(1.2);
		text-shadow: 0 0 20px rgba(255, 81, 148, 0.4);
		background: linear-gradient(135deg, #ff71b8 0%, #ff2982 40%, #a47dff 70%, #6c82ff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		background: linear-gradient(135deg, #ff69b4 0%, #f00064 40%, #c64aff 70%, #6b4aff 100%);
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
			border-color: rgb(255, 0, 128);
		}
	}
</style>
