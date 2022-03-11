<script>
	const handle = setInterval(() => {
		currentTopTitleLength++;
		if (currentTopTitleLength > topTitleText.length) {
			clearInterval(handle);
		}
	}, 60);

	const topTitleText = 'KHU Software Conv. Eunseop Shim';
	let currentTopTitleLength = 1;
</script>

<div
	class="pl-4 pr-4 h-screen -mt-24 md:h-80 md:mt-12 flex flex-col justify-center items-center"
	data-aos="fade-down"
	data-aos-duration="800"
	data-aos-once="true"
>
	<h1
		class="subtitle text-3xl font-bold text-center typewriter p-1 whitespace-nowrap typewriter font-serif"
		style="font-size: clamp(0.5rem, 4vw, 1.2rem); line-height: 1"
	>
		{topTitleText.substring(0, currentTopTitleLength)}
	</h1>
	<h1
		class="title pb-1.5 text-center z-10 mb-5 font-[500] font-cursive"
		style="font-size: clamp(3rem, 17vw, 5.5rem); line-height: 1.12"
	>
		Home-made<br />Portfolio!
	</h1>
</div>

<style>
	.title {
		text-shadow: 0 0 20px rgba(255, 145, 187, 0.164);
	}

	.title {
		background: linear-gradient(135deg, #ffafd7 0%, #ff2982 40%, #a47dff 70%, #c9d1ff 100%);
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
		border-right: 0.15em solid; /* The typwriter cursor */
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
