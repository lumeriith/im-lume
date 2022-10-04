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
	class="h-[100vh] pt-6 flex justify-center items-center font-monospace"
	style="background: url({bg}); background-repeat: no-repeat; background-size: 100% 100%"
>
	<div class="pb-12">
		<header class="flex gap-2 items-center mb-4">
			<div class="flex items-center">
				<Icon icon="fluent-emoji-high-contrast:lizard" class="text-[27px] text-[#87ff1e]" />
				<Icon icon="fluent:drink-to-go-20-filled" class="text-[32px] text-[#ff9db2]" />
			</div>
			<div class="title text-2xl text-center typewriter px-1 whitespace-nowrap typewriter">
				{typewriterText.substring(0, currentTypewriterLength)}
			</div>
		</header>

		<section class="text-md content">
			<div>- Kyunghee University Undergraduate</div>
			<div>- Wannabe Game Developer</div>
			<div>- Hobbiest Web Developer</div>
		</section>
		<div class="h-4" />
		<main class="text-md">Personal Portfolio</main>
	</div>
</div>

<style>
	.content {
		filter: brightness(1.8);
		text-shadow: 0 0 20px rgba(255, 81, 148, 0.4);
		background: linear-gradient(135deg, #ff71b8 0%, #ff2982 40%, #a47dff 70%, #6c82ff 100%);
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
