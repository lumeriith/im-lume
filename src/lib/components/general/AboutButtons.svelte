<script>
	import Icon from '@iconify/svelte';
	export { _class as class };
	let _class = '';
	const icons = [
		{
			text: 'Eunseop Shim',
			href: 'https://kr.linkedin.com/in/lumeriith',
			icon: 'akar-icons:linkedin-box-fill'
		},
		{
			text: '@lumeriith',
			href: 'https://github.com/lumeriith',
			icon: 'akar-icons:github-fill'
		}
	];
</script>

<div class="flex items-center gap-3 {_class}">
	{#each icons as icon}
		<a
			class="h-10 flex justify-center items-center text-white font-bold icon gap-2 pr-2"
			href={icon.href}
			target="_blank"
			rel="noreferrer"
		>
			<Icon class="text-xl" icon={icon.icon} />
			<span class="text-base">{icon.text}</span>
		</a>
	{/each}
</div>

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
