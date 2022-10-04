<script>
	import Icon from '@iconify/svelte';
	import Container from '$lib/components/general/Container.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';

	const icons = [
		{
			href: 'https://github.com/lumeriith',
			icon: 'akar-icons:github-fill'
		},
		{
			href: 'https://www.linkedin.com/in/eunseop-shim-5b5098172/',
			icon: 'akar-icons:linkedin-box-fill'
		}
	];
</script>

<FullWidthSpace>
	<Container class="font-monospace">
		<h2 class="font-bold opacity-90 mb-1 mt-5">Contact</h2>
		<a class="text-xs opacity-50 mb-6 inline-block underline" href="mailto:lumeriith@gmail.com"
			>lumeriith@gmail.com</a
		>
		<div class="flex items-center gap-3 mb-7">
			{#each icons as icon}
				<a
					class="bg-white h-8 w-8 flex justify-center items-center text-black text-2xl icon"
					href={icon.href}
					target="_blank"
				>
					<Icon icon={icon.icon} />
				</a>
			{/each}
		</div>
		<div class="flex flex-row gap-2 text-xs opacity-50 mb-8">
			<div>Made with ❤️ by Eunseop Shim</div>
			<div>·</div>
			<div>Powered by SvelteKit</div>
		</div>
	</Container>
</FullWidthSpace>

<style>
	.icon {
		transition: transform 0.1s;
	}

	.icon:hover {
		transform: scale(1.1);
	}
</style>
