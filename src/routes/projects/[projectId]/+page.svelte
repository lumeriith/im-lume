<script>
	import bg from '$lib/assets/gradientbg.png';
	import { page } from '$app/stores';
	import Container from '$lib/components/general/Container.svelte';
	import LizardSmoothie from '$lib/components/LizardSmoothie.svelte';
	import projects from '$lib/data/projects';
	import Icon from '@iconify/svelte';
	import LinkItem from '$lib/components/general/LinkItem.svelte';
	import NavBar from '$lib/components/general/NavBar.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';

	let project = {};

	$: project = projects[$page.params.projectId];

	let trimmedContent;
	$: {
		if (project.content) {
			trimmedContent = '';
			const splitContent = project.content.trim().split('\n');
			splitContent.forEach((l) => (trimmedContent += l.trim() + '\n'));
		}
	}
</script>

<NavBar />

<div
	class="h-[100vh] top-0 w-full pt-6 flex justify-center items-center font-monospace bg-wrapper opacity-20 fixed -z-10"
	style="background-image: url({project.thumb}); background-repeat: no-repeat; background-size: 100% 100%; filter: blur(20px) brightness(1.5) contrast(0.7);"
>
	<div class="absolute inset-0" style="background: linear-gradient(#0000, #000)" />
</div>

<div class="pt-36 relative overflow-hidden">
	<Container class="font-monospace z-10 pb-4">
		<header class="flex items-center mb-1 flex-wrap">
			<div
				class="text-2xl sm:text-4xl md:text-6xl font-bold mr-2"
				style="color: {project.colors[0]};"
			>
				{project.title}
			</div>
			<div class="text-md font-bold self-end">
				{project.type}
			</div>
		</header>
		<div class="text-base sm:text-xl md:text-2xl font-bold flex-1">
			<main class="whitespace-pre-line" style="line-height: 1.8;">
				{project.subtitle}
			</main>
		</div>
	</Container>
</div>

<Container class="font-monospace">
	<section
		class="flex flex-col items-start gap-2 sm:gap-3 font-bold text-sm sm:text-base justify-center mb-10"
	>
		{#if project.awards}
			{#each project.awards as award}
				<div class="flex gap-2 items-center" style="color: {project.colors[0]};">
					<Icon class="w-4" icon="fa-solid:award" />
					<div>{award}</div>
				</div>
			{/each}
		{/if}
		<div class="flex gap-2 items-center">
			<Icon class="w-4" icon="carbon:user-avatar-filled" />
			<div>{project.role}</div>
		</div>
		{#if project.links}
			{#each project.links as { type, data }}
				<LinkItem {type} url={data} />
			{/each}
		{/if}
	</section>
	<div class="grid lg:grid-cols-2 mb-4 gap-2">
		{#each project.medias as { type, data }, i}
			{#if type == 'image'}
				<img
					class="w-full shadow-lg object-cover aspect-video"
					class:col-span-2={i == 0 && project.medias.length % 2 == 1}
					src={data}
					alt=""
				/>
			{:else if type == 'youtube'}
				<iframe
					class="w-full aspect-video"
					class:col-span-2={i == 0 && project.medias.length % 2 == 1}
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
	<Container maxWidth={1000}>
		{#if project.content}
			<div
				class="content-markdown"
				style={project.colors
					? `--color-0: ${project.colors[0]}; --color-1: ${project.colors[1]};`
					: ''}
			>
				<SvelteMarkdown source={trimmedContent} />
			</div>
		{/if}
	</Container>
</Container>

<style>
	.content-markdown {
		line-height: 1.7;
		white-space: pre-line;
		font-size: 0.95rem;
		padding-bottom: 60px;
		color: #eee;
	}

	.content-markdown :global(h1),
	.content-markdown :global(h2),
	.content-markdown :global(h3),
	.content-markdown :global(h4),
	.content-markdown :global(h5) {
		font-weight: 600;
		width: fit-content;
	}

	.content-markdown :global(h1) {
		font-size: 1.7em;
		margin-top: 14px;
		margin-bottom: 2px;
		filter: brightness(1.2);
		color: var(--color-0);
	}
	.content-markdown :global(h2) {
		font-size: 1.3em;
		margin-top: 14px;
		margin-bottom: 2px;
		filter: brightness(1.1);
		color: var(--color-0);
	}
	.content-markdown :global(h3) {
		font-size: 1.2em;
		margin-top: 14px;
		color: var(--color-0);
	}
	.content-markdown :global(h4) {
		font-size: 1.1em;
		margin-top: 14px;
	}
	.content-markdown :global(h5) {
		font-size: 1.05em;
		margin-top: 14px;
	}
	.content-markdown :global(ul) {
		list-style-type: disc;
		margin-left: 1.3em;
		margin-bottom: 10px;
	}
	.content-markdown :global(ol) {
		list-style-type: decimal;
		margin-left: 2em;
		margin-bottom: 10px;
	}
	.content-markdown :global(a) {
		text-decoration: underline;
		color: var(--color-0);
		filter: brightness(1.3);
	}
	.content-markdown :global(a:hover) {
		filter: brightness(1.45);
	}
	.content-markdown :global(a:active) {
		filter: brightness(0.8);
	}

	.content-markdown :global(p) {
		text-indent: 0.6em;
		margin-bottom: 7px;
	}
</style>
