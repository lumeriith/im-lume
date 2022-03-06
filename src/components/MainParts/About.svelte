<script>
	import Container from '../Container.svelte';
	import IconButton from '@smui/icon-button';
	import FullWidthSpace from '../FullWidthSpace.svelte';
</script>

<FullWidthSpace class="pt-3 pb-5 text-center">
	<Container>
		<h2 class="font-bold text-lg opacity-90">Contact</h2>
		<a class="text-xs opacity-50 mb-6 inline-block" href="mailto:lumeriith@gmail.com"
			>lumeriith@gmail.com</a
		>
		<div class="flex justify-center items-center gap-3 mb-4">
			<IconButton class="white-icon-button" href="https://github.com/lumeriith" target="_blank">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
					alt=""
				/>
			</IconButton>
			<IconButton
				class="white-icon-button"
				href="https://www.linkedin.com/in/eunseop-shim-5b5098172/"
				target="_blank"
			>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
					alt="LinkedIn"
				/>
			</IconButton>
		</div>
		<div class="flex flex-row gap-2 justify-center text-xs opacity-50">
			<div>Made with ❤️ in South Korea</div>
			<div>·</div>
			<div>Powered by Svelte</div>
		</div>
	</Container>
</FullWidthSpace>

<style>
	:global(.white-icon-button) {
		background-color: #fffe;
		border-radius: 50%;
	}
</style>
