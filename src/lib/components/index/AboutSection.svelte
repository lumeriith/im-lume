<script>
	import Icon from '@iconify/svelte';
	import Container from '$lib/components/general/Container.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';

	const icons = [
		{
			text: 'Eunseop Shim',
			href: 'https://www.linkedin.com/in/eunseop-shim-5b5098172/',
			icon: 'akar-icons:linkedin-box-fill'
		},
		{
			text: '@lumeriith',
			href: 'https://github.com/lumeriith',
			icon: 'akar-icons:github-fill'
		}
	];
</script>

<div id="about" />
<FullWidthSpace>
	<Container class="font-monospace">
		<h2 class="text-lg font-bold mb-4 mt-5">Contact</h2>
		<div class="mb-1">심은섭 Eunseop Shim</div>
		<div class="text-sm opacity-60 mb-1">경희대학교 소프트웨어융합학과 재학생</div>
		<div class="text-sm opacity-60 mb-4">엔진/네트워크 등 게임 개발 직군 희망</div>

		<a class="text-xs opacity-60 mb-6 inline-block underline" href="mailto:lumeriith@gmail.com">
			lumeriith@gmail.com
		</a>
		<div class="flex items-center gap-3 mb-7">
			{#each icons as icon}
				<a
					class="bg-white h-8 flex justify-center items-center text-black icon gap-2 pl-2 pr-3"
					href={icon.href}
					target="_blank"
					rel="noreferrer"
				>
					<Icon class="text-xl" icon={icon.icon} />
					<span class="text-sm">{icon.text}</span>
				</a>
			{/each}
		</div>
		<div class="flex flex-row gap-2 text-xs opacity-50 mb-2">
			<div>Made with ❤️ by Eunseop Shim</div>
			<div>·</div>
			<div>Hosted on Vercel</div>
			<div>·</div>
			<div>Powered by SvelteKit</div>
		</div>
		<div class="mb-8 text-xs opacity-50">
			Photo by <a
				href="https://unsplash.com/@sweetmangostudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Ricky Kharawala</a
			>
			on
			<a
				href="https://unsplash.com/photos/6s8GtWMjT3I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</div>
	</Container>
</FullWidthSpace>

<style>
	.icon {
		transition: transform 0.1s;
	}

	.icon:hover {
		opacity: 0.8;
	}

	.icon:active {
		opacity: 0.5;
	}
</style>
