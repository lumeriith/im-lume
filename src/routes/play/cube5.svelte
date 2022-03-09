<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const gameId = 'cube5webgl';
	let gameName;
	switch (gameId) {
		case 'cube5webgl':
			gameName = 'Cube5';
			break;

		default:
			gameName = gameId;
	}

	onMount(() => {
		// @ts-ignore
		UnityLoader.instantiate(
			'unityContainer',
			`http://d2q76w8704miwb.cloudfront.net/${gameId}/Build.json`,
			{
				onProgress: console.log
			}
		);
	});
</script>

<svelte:head>
	<script src="http://d2q76w8704miwb.cloudfront.net/{gameId}/UnityLoader.js"></script>
	<title>Play {gameName} - imlu.me</title>
</svelte:head>

<div class="absolute overflow-hidden inset-0 top-12">
	<div id="unityContainer" class="w-full h-full" />
</div>
