<script>
	import bg from '$lib/assets/gradientbg.png';
	import { page } from '$app/stores';
	import Container from '$lib/components/general/Container.svelte';
	import LizardSmoothie from '$lib/components/LizardSmoothie.svelte';
	import projects from '$lib/data/projects';
	import Icon from '@iconify/svelte';
	import LinkItem from '$lib/components/general/LinkItem.svelte';
	import SvelteMarkdown from 'svelte-markdown';

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

<div class="fixed w-full top-0 z-40 flex bg-black">
	<a class="flex gap-2 p-2 items-center" href="/">
		<LizardSmoothie size={20} />
		<div class="font-monospace text-md">imlu.me</div></a
	>
</div>

<div class="h-8" />

<div
	class="h-[100vh] top-0 w-full pt-6 flex justify-center items-center font-monospace bg-wrapper opacity-50 absolute -z-10"
	style="background: url({bg}); background-repeat: no-repeat; background-size: 100% 100%; {project.hueRotate
		? `filter: hue-rotate(${project.hueRotate});`
		: ''}"
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
			{project.type}
		</div>
	</header>
	<div class="text-sm flex-1">
		<main class="whitespace-pre-line" style="line-height: 1.8;">
			{project.subtitle}
		</main>
	</div>

	<section class="flex flex-col items-start gap-2 mt-5 text-sm justify-center mb-4">
		<div class="flex gap-2 items-center opacity-50">
			<Icon icon="carbon:user-avatar-filled" />
			<div>{project.role}</div>
		</div>
		{#if project.awards}
			{#each project.awards as award}
				<div class="flex gap-2 items-center opacity-50">
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
	<Container maxWidth={800}>
		{#if project.content}
			<div
				class="content-markdown"
				style={project.hueRotate ? `filter: hue-rotate(${project.hueRotate});` : ''}
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
		filter: brightness(1.8);
		text-shadow: 0 0 15px #ffa6c863;
		background: linear-gradient(135deg, #11d573 0%, #257d38 30%, #822c55 85%, #351d1d 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.content-markdown :global(h2) {
		font-size: 1.3em;
		margin-top: 14px;
		margin-bottom: 2px;
		text-shadow: 0 0 10px #a6ffcab3;
		background: linear-gradient(135deg, #6dffb6 0%, #86b510 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.content-markdown :global(h3) {
		font-size: 1.2em;
		margin-top: 14px;
		text-shadow: 0 0 10px #ffa6cab3;
		background: linear-gradient(135deg, #ff63a9 0%, #ea2c82 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
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
		color: #8eebb8;
	}
	.content-markdown :global(p) {
		text-indent: 0.6em;
		margin-bottom: 7px;
	}
</style>
