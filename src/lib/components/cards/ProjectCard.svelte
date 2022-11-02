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
</script>

<a
	class="overflow-hidden relative project-card flex flex-col w-full {project.featured
		? 'h-52 md:h-80'
		: 'md:col-span-2'} cursor-pointer font-monospace"
	on:click
	href="/projects/{id}"
>
	<div
		class="absolute inset-0 -z-10 bg-img"
		style="background: url({project.thumb}); background-size: cover; background-position: center center;"
	/>
	<div class="text-desc flex flex-col gap-1 content-container px-2 py-1">
		<header class="flex items-center gap-1.5">
			{#if project.icon}
				<Icon class="text-lg md:text-xl mt-[1px]" icon={project.icon} />
			{/if}
			<div class="text-lg md:text-xl" style="text-shadow: 0 0 12px #000a;">
				{project.title}
			</div>
			{#if project.awards}
				<Icon icon="fa-solid:award" class="text-xs text-[#ffc04b] md:hidden" />
			{/if}
			<div class="text-xs opacity-50 ml-auto" style="text-shadow: 0 0 12px #000a;">
				{project.type || ''}
			</div>
		</header>
		<main class="text-xs md:text-sm flex flex-col" style="text-shadow: 0 0 12px #000a;">
			<MultiClamp
				clamp={project.featured ? 3 : 1}
				class="whitespace-pre-line opacity-70"
				style="line-height: 1.5;">{project.subtitle}</MultiClamp
			>
			{#if project.awards}
				<div class="mt-1 hidden md:block">
					{#each project.awards as award}
						<div class="flex gap-2 items-center text-[#ffb53e]">
							<Icon icon="fa-solid:award" class="text-xs" /><span>{award}</span>
						</div>
					{/each}
				</div>
			{/if}
		</main>
		{#if project.featured}
			<div class="h-0.5" />
		{/if}
	</div>
</a>

<style>
	.content-container {
		background-color: #0009;
		backdrop-filter: blur(4px);
	}

	:global(.project-card) {
		transform: scale(1);
		transition: transform 0.1s;
	}

	:global(.project-card):active {
		transform: scale(0.97) translateY(3px) !important;
		filter: brightness(0.8) !important;
	}

	:global(.project-card) .text-desc {
		transition: opacity 0.1s;
	}

	@media (pointer: fine) {
		:global(.project-card):hover,
		:global(.project-card.open) {
			transform: translateY(-6px);
			filter: brightness(1.1);
		}
	}

	@media (pointer: coarse) {
		:global(.project-card) {
			transform: scale(1);
			transition: transform 0.15s;
		}

		:global(.project-card.open) {
			transform: scale(1.02);
			filter: brightness(1.1);
		}
	}
</style>
