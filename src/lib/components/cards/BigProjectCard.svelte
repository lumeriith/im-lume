<script>
	import ColorfulCard from '$lib/components/cards/ColorfulCard.svelte';
	import Icon from '@iconify/svelte';
	import MultiClamp from '../general/MultiClamp.svelte';

	export let project = {
		id: '',
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
	export let selected;
</script>

<a
	class="relative project-card flex w-full cursor-pointer font-monospace items-center flex-col-reverse sm:flex-row"
	on:mouseenter
	on:mouseleave
	class:selected
	on:click
	href="/projects/{project.id}"
	style="--main-color: {project.colors[0]}; transform: scale(0.9)"
>
	<div class="flex-1 sm:mb-8 md:mb-12">
		<div class="flex flex-col">
			<div
				class="flex items-center justify-center sm:justify-start sm:items-end flex-wrap mb-3 sm:mb-0"
			>
				<div
					class="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 font-bold text-[var(--main-color)] flex items-center"
				>
					{project.title}
				</div>
				<div
					class="w-full lg:w-auto text-base lg:text-sm ml-2 font-bold text-[var(--main-color)] text-center sm:text-left"
				>
					{project.type}
				</div>
			</div>
			{#if project.tags}
				<div
					class="flex gap-x-2 gap-y-0.5 content-container text-lg sm:text-lg lg:text-xl xl:text-2xl font-bold justify-center mr-3 md:ml-14 md:mr-6 flex-wrap text-right"
				>
					{#each project.tags as tag}
						<div class="flex gap-0.5 items-center">
							<span>#</span>
							<span>{tag}</span>
						</div>
					{/each}
				</div>
			{/if}
			<div class="mt-4 sm:mt-8 text-xs md:text-sm lg:text-base text-center sm:text-left">
				{project.subtitle}
				{#if project.awards}
					<div class="mt-2">{project.awards[0]} 수상작</div>
				{/if}
			</div>
		</div>
	</div>
	<div
		class="aspect-video h-32 sm:h-28 md:h-44 lg:h-56 -z-10 project-img"
		style="background: url({project.thumb}); background-size: cover; background-position: center center; box-shadow: 0 6px 36px #0006;"
	/>
</a>

<style>
	a {
		transition: filter 0.2s, --main-color 0.2s;
		filter: grayscale(1) brightness(0.7);
	}

	a.selected {
		filter: grayscale(0);
	}

	a .project-img {
		transition: filter 0.2s, transform 0.2s;
		filter: brightness(1.2) contrast(0.8);
	}

	a.selected .project-img {
		filter: brightness(1);
		transform: scale(1.05);
	}
</style>
