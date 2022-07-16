<script>
	import lizard from '$lib/assets/lizard.svg';

	let t = 0;
	let floatY = 0;
	let rotate = 0;
	setInterval(() => {
		floatY = 40 + Math.sin(t / 1.5) * 40;
		rotate = Math.sin(t / 1.9) * 5;
		t += 0.2;
	}, 200);
</script>

<div
	class="absolute inset-0 pointer-events-none flex flex-col items-start p-8 justify-between overflow-hidden select-none"
>
	<div
		class="aspect-square self-center"
		style="width: clamp(600px, 90%, 1200px); transform: translateY({floatY}px) rotate({rotate}deg); transition: transform linear 0.35s"
	>
		<img
			src={lizard}
			alt=""
			class="rotate-12"
			style="filter: hue-rotate(260deg); opacity: 0.13"
			width="100%"
			height="100%"
		/>
	</div>
	<div
		class="aspect-square self-end"
		style="width: clamp(500px, 90%, 1000px); transform: translateY({floatY}px) rotate({rotate}deg); transition: transform linear 0.25s"
	>
		<img
			src="lizard_twemoji.svg"
			alt=""
			class="rotate-180"
			style="filter: hue-rotate(260deg); opacity: 0.11"
			width="100%"
			height="100%"
		/>
	</div>
</div>
