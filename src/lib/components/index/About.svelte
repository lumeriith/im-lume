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

<FullWidthSpace class="text-center">
	<Container>
		<h2 class="font-bold text-lg opacity-90 mb-1">Contact</h2>
		<a class="text-sm opacity-50 mb-6 inline-block" href="mailto:lumeriith@gmail.com"
			>lumeriith@gmail.com</a
		>
		<div class="flex justify-center items-center gap-3 mb-14">
			{#each icons as icon}
				<a
					class="bg-white rounded-full h-10 w-10 flex justify-center items-center text-black text-2xl"
					href={icon.href}
					target="_blank"
				>
					<Icon icon={icon.icon} />
				</a>
			{/each}
		</div>
		<div class="flex flex-row gap-2 justify-center text-xs opacity-50">
			<div>Made with ❤️ by Eunseop Shim</div>
			<div>·</div>
			<div>Powered by SvelteKit</div>
		</div>
	</Container>
</FullWidthSpace>
