<script>
	import IconButton from '@smui/icon-button';
	let scrollY;
	$: showBackground = scrollY > 0;
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
	/>
</svelte:head>

<div class="h-12" />

<div class="h-12 fixed top-0 left-0 right-0  z-30 flex items-center pl-4 pr-4 text-xl">
	<div
		class="absolute inset-0 transition-opacity -z-10 block lg:hidden navbar-background"
		style={`opacity: ${showBackground ? 1 : 0}`}
	/>
	<div
		class="absolute inset-0 transition-opacity -z-10 hidden lg:block big-screen-background"
		style={`opacity: ${showBackground ? 1 : 0}`}
	/>
	<div class="font-extrabold select-none">imlu.me</div>
	<div class="ml-auto flex items-center">
		<IconButton
			href="https://github.com/lumeriith"
			target="_blank"
			size="mini"
			style="color:aliceblue; text-decoration: none"
		>
			<i class="devicon-github-original" />
		</IconButton>
		<!-- <IconButton
			href="https://www.linkedin.com/in/eunseop-shim-5b5098172/"
			target="_blank"
			size="mini"
		>
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
				alt=""
			/>
		</IconButton> -->
	</div>
</div>

<style>
	.navbar-background {
		background: linear-gradient(90deg, #16030a, #490b20, #120329, #130325);
		box-shadow: 0 4px 16px #1502358f;
	}

	.big-screen-background {
		background: linear-gradient(#0006, #0003 60%, #0000);
	}
</style>
