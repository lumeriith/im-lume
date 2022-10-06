<script>
	import bg from '$lib/assets/gradientbg.png';
	import { page } from '$app/stores';
	import Container from '$lib/components/general/Container.svelte';
	import LizardSmoothie from '$lib/components/LizardSmoothie.svelte';
	import projects from '$lib/data/projects';
	import Icon from '@iconify/svelte';
	import LinkItem from '$lib/components/general/LinkItem.svelte';

	let project = {};

	$: project = projects[$page.params.projectId];
</script>

<div class="fixed w-full top-0 z-40 flex bg-black">
	<a class="flex gap-2 p-2 items-center" href="/">
		<LizardSmoothie size={20} />
		<div class="font-monospace text-md">imlu.me</div></a
	>
</div>

<div class="h-8" />

<div
	class="h-[100vh] top-0 w-full pt-6 flex justify-center items-center font-monospace bg-wrapper opacity-50 absolute -z-10"
	style="background: url({bg}); background-repeat: no-repeat; background-size: 100% 100%;"
/>

<Container class="font-monospace">
	<header class="flex items-center mb-1">
		{#if project.icon}
			<Icon icon={project.icon} class="mr-1.5 text-2xl mt-1" />
		{/if}
		<div class="text-3xl font-bold mr-2">
			{project.title}
		</div>
		<div class="text-sm opacity-50">
			{project.subtitle}
		</div>
	</header>
	<div class="text-sm flex-1">
		<main class="whitespace-pre-line" style="line-height: 1.8;">
			{project.content}
		</main>
	</div>

	<section class="flex flex-col items-start gap-2 mt-5 text-sm justify-center mb-4">
		<div class="flex gap-1 items-center opacity-50">
			<Icon icon="carbon:user-avatar-filled" />
			<div>{project.role}</div>
		</div>
		{#if project.awards}
			{#each project.awards as award}
				<div class="flex gap-1.5 items-center opacity-50">
					<Icon icon="fa-solid:award" />
					<div>{award}</div>
				</div>
			{/each}
		{/if}
		{#if project.links}
			{#each project.links as { type, data }}
				<LinkItem {type} url={data} />
			{/each}
		{/if}
	</section>
	<div class="grid lg:grid-cols-2 mb-4 gap-2">
		{#each project.medias as { type, data }}
			{#if type == 'image'}
				<img class="w-full shadow-lg object-cover aspect-video" src={data} alt="" />
			{:else if type == 'youtube'}
				<iframe
					class="w-full aspect-video"
					src="https://www.youtube.com/embed/{data}"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			{/if}
		{/each}
	</div>

	<div class="h-3" />
</Container>
