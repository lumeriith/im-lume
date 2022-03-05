<script>
	export let type;
	export let url;

	let iconUrl, iconName;
	if (type === 'youtube') {
		iconUrl = 'youtube.svg';
	} else if (type === 'github') {
		iconName = 'devicon-github-original';
	} else if (type === 'binary') {
		iconName = 'devicon-windows8-original';
	}
</script>

<a
	href={url}
	target="_blank"
	class="flex justify-center items-center"
	style="width: 40px; height: 30px"
>
	{#if iconUrl}
		<img src={iconUrl} alt="" width="20px" />
	{:else}
		<i class={iconName} style="font-size: 1.2rem" />
	{/if}
</a>

<style>
	a {
		font-size: 0.75rem;
		font-weight: bold;
		color: black;
		background-color: #fff;
		border-radius: 999px;
	}

	a:active,
	a:hover {
		background-color: #fffc;
	}
</style>
