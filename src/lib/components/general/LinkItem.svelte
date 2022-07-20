<script>
	export let type;
	export let url;
	let text;

	if (type === 'youtube') {
		text = '유튜브';
	} else if (type === 'github') {
		text = '소스코드';
	} else if (type === 'binary') {
		text = '바이너리';
	} else if (type === 'play') {
		text = '플레이';
	}
</script>

<a
	href={url}
	target="_blank"
	class="bg-[#ff7ea938] text-[#ffacba] py-1 px-2 rounded-sm flex items-center text-sm underline"
	>{text}
</a>

<style>
	a {
		transform: scale(1);
		filter: brightness(100%);
		transition: transform 0.1s;
	}

	a:hover {
		transform: scale(1.04);
		filter: brightness(150%);
	}

	a:active {
		transform: scale(0.97);
		filter: brightness(70%);
	}
</style>
