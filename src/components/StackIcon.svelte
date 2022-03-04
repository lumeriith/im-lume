<script>
	// https://devicon.dev/

	export let type = '';

	let customUrl = null;
	switch (type) {
		case 'cs':
			customUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg';
			break;
		case 'python':
			customUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg';
			break;
	}
</script>

<div class="w-5 h-5 flex justify-center items-center">
	<img
		class="object-contain w-full h-full"
		src={customUrl || `/static/stacks/${type}.png`}
		alt=""
	/>
	<icon />
</div>
