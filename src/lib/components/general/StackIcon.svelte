<script>
	// https://devicon.dev/

	export let type = '';
	export let showName = false;

	let customUrl = null;

	switch (type) {
		case 'cs':
			customUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg';
			break;
		case 'python':
			customUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg';
			break;
	}

	let name;
	switch (type) {
		case 'cs':
			name = 'C#';
			break;
		case 'python':
			name = 'Python';
			break;
		case 'pun2':
			name = 'Photon';
			break;
		case 'unet':
			name = 'UNet (Deprecated)';
			break;
		case 'unity':
			name = 'Unity';
			break;
	}
</script>

<div class="flex gap-1.5 items-center">
	<div class="flex justify-center items-center">
		<img
			class="object-contain ${showName ? 'w-4 h-4' : 'w-5 h-5'}"
			src={customUrl || `stacks/${type}.png`}
			alt={name}
		/>
	</div>
	{#if showName}
		<div class="text-sm">{name}</div>
	{/if}
</div>
