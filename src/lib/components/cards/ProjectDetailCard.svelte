<script>
	import Icon from '@iconify/svelte';
	import ColorfulCard from './ColorfulCard.svelte';
	import LinkItem from '$lib/components/general/LinkItem.svelte';
	import { scale, fade } from 'svelte/transition';

	export let project = {
		title: '',
		icon: '',
		subtitle: '',
		content: '',
		stacks: [''],
		role: '',
		awards: [''],
		links: [{ type: '', url: '' }],
		thumb: '',
		photo: ''
	};

	export let style = '';
	let _class = '';
	export { _class as class };
</script>

<div
	transition:scale={{ duration: 150, start: 0.95 }}
	class="absolute inset-0 flex justify-center items-center flex-col pointer-events-none gap-4"
>
	<img class="maw-w-[80%] max-h-[50%] pointer-events-auto rounded-sm" src={project.photo} alt="" />

	<div class="pointer-events-auto">
		<ColorfulCard class="flex flex-col px-5 py-3 pb-5" {style} on:click>
			<header class="flex items-center">
				{#if project.icon}
					<Icon icon={project.icon} class="mr-1.5 text-2xl mt-1" />
				{/if}
				<div class="text-3xl font-bold">
					{project.title}
				</div>
				<div class="text-sm ml-auto pl-5 opacity-50">
					{project.subtitle}
				</div>
			</header>
			<div class="h-3" />
			<div class="text-sm flex-1">
				<main>
					{project.content}
				</main>
				<div class="flex flex-col gap-2 mt-5 text-sm justify-center">
					<div class="flex gap-1 items-center text-white opacity-70">
						<Icon icon="carbon:user-avatar-filled" />
						<div>{project.role}</div>
					</div>
					{#if project.awards}
						{#each project.awards as award}
							<div class="flex gap-1.5 award items-center">
								<Icon icon="fa-solid:award" />
								<div>{award}</div>
							</div>
						{/each}
					{/if}
					{#if project.links}
						<div class="flex gap-1.5 mt-3 flex-wrap justify-end">
							{#each project.links as { type, url } (url)}
								<LinkItem {type} {url} />
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</ColorfulCard>
	</div>
</div>

<style>
	.award {
		text-shadow: 0 0 4px rgba(243, 146, 0, 0.596);
		color: rgb(255, 196, 0);
	}
</style>
