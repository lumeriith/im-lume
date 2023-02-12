<script>
	import ColorfulCard from '$lib/components/cards/ColorfulCard.svelte';
	import Icon from '@iconify/svelte';
	import MultiClamp from '../general/MultiClamp.svelte';

	export let project = {
		title: '',
		subtitle: '',
		icon: '',
		content: '',
		stacks: [''],
		role: '',
		awards: [''],
		links: [{ type: '', url: '' }],
		thumb: '',
		photo: ''
	};
	export let id;
	export let selected;
</script>

<a
	class="relative project-card flex w-full h-36 sm:h-48 md:h-64 cursor-pointer font-monospace"
	on:mouseenter
	on:mouseleave
	class:selected
	on:click
	href="/projects/{id}"
	style="--main-color: {project.colors[0]};"
>
	<div class="flex-1">
		<div class="flex flex-col">
			<div class="flex items-end">
				<div class="text-4xl mt-4 font-bold text-[var(--main-color)] flex items-center">
					{project.title}
				</div>
				<div class="text-sm ml-2 font-bold text-[var(--main-color)]">
					{project.type}
				</div>
			</div>
			{#if project.tags}
				<div
					class="flex gap-2 content-container text-2xl font-bold justify-center ml-14 mr-6 flex-wrap"
				>
					{#each project.tags as tag}
						<div class="flex gap-0.5 items-center">
							<span>#</span>
							<span>{tag}</span>
						</div>
					{/each}
				</div>
			{/if}
			<div class="mt-8">
				{project.subtitle}
				{#if project.awards}
					<div class="mt-2">{project.awards[0]} 수상작</div>
				{/if}
			</div>
		</div>
	</div>
	<div
		class="aspect-video h-full -z-10 project-img"
		style="background: url({project.thumb}); background-size: cover; background-position: center center; box-shadow: 0 6px 36px #0006;"
	/>
</a>

<style>
	a {
		transition: filter 0.2s, --main-color 0.2s;
		filter: grayscale(1);
	}

	a.selected {
		filter: grayscale(0);
	}

	a {
		filter: grayscale(1);
	}

	a .project-img {
		transition: filter 0.2s;
		filter: brightness(1.2) contrast(0.8);
	}

	a.selected .project-img {
		filter: brightness(1.2);
	}
</style>
