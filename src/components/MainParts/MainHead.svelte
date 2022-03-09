<script>
	import { scale } from 'svelte/transition';

	const handle = setInterval(() => {
		currentTopTitleLength++;
		if (currentTopTitleLength > topTitleText.length) {
			clearInterval(handle);
		}
	}, 60);

	const topTitleText = '#EunseopShim #lumeriith #imlu.me';
	let currentTopTitleLength = 1;
</script>

<div
	class="pl-4 pr-4 h-screen -mt-24 md:h-60 md:mt-0 flex flex-col justify-center items-center"
	data-aos="fade-down"
	data-aos-duration="800"
	data-aos-once="true"
>
	<h1
		class="text-3xl font-extrabold text-center typewriter pl-1 pr-1"
		style="font-size: 1.3rem; line-height: 1"
	>
		{topTitleText.substring(0, currentTopTitleLength)}
	</h1>

	<h1
		class="font-extrabold mt-1 pb-1 text-center z-10 mb-1"
		style="font-size: 3.5rem; line-height: 1.2"
	>
		Hand-made Portfolio
	</h1>
	<h2 class="text-2xl font-bold text-center opacity-90" style="font-size: 1.25rem">
		경희대학교 소프트웨어융합학과 3학년 심은섭
	</h2>
</div>

<style>
	h1 {
		text-shadow: 0 0 30px rgb(77, 56, 110);
	}

	h1.typewriter {
		border-right: 0.1em solid; /* The typwriter cursor */
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
