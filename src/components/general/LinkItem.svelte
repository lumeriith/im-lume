<script>
	export let type;
	export let url;
	let text;

	let iconUrl, iconName;
	if (type === 'youtube') {
		iconUrl = 'icons/youtube.svg';
		text = '유튜브';
	} else if (type === 'github') {
		iconName = 'devicon-github-original';
		text = '소스코드';
	} else if (type === 'binary') {
		iconName = 'devicon-windows8-original';
		text = '바이너리';
	} else if (type === 'play') {
		iconUrl = 'icons/controller.svg';
		text = '플레이';
	}
</script>

<a
	href={url}
	target="_blank"
	class="flex justify-center items-center h-7 pl-3 pr-3 gap-1.5 hover:no-underline"
>
	{#if iconUrl}
		<img src={iconUrl} alt="" width="20px" />
	{:else}
		<i class={iconName} style="font-size: 1.2rem" />
	{/if}
	<div>{text}</div>
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
