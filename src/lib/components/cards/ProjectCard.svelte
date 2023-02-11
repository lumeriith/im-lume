<script>
	import ColorfulCard from '$lib/components/cards/ColorfulCard.svelte';
	import Icon from '@iconify/svelte';
	import MultiClamp from '../general/MultiClamp.svelte';

	export let large = false;

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
	class="overflow-hidden relative project-card flex flex-col w-full {large
		? 'h-52 sm:h-72 md:h-80'
		: 'h-16 md:col-span-2'} cursor-pointer font-monospace"
	on:click
	href="/projects/{id}"
>
	{#if large}
		<div class="absolute right-0 bottom-6 p-3 z-10 go-icon">
			<Icon
				class={large ? 'text-5xl' : 'text-4xl hidden md:block'}
				icon="akar-icons:circle-chevron-right-fill"
			/>
		</div>
	{/if}

	<div
		class="absolute inset-0 -z-10 bg-img"
		style="background: url({project.thumb}); background-size: cover; background-position: center center;"
	/>
	<div class="text-desc flex {!large ? 'h-full' : ''} content-container">
		{#if !large}
			<img src={project.thumb} class="w-16 md:w-20 md:mr-1 h-full object-cover" />
		{/if}
		<div class="flex flex-1 flex-col gap-1 px-3 py-1 justify-center">
			<header class="flex flex-wrap items-center gap-1.5">
				<div class="flex gap-1.5 items-center flex-1">
					{#if project.icon}
						<Icon
							class="text-lg md:text-xl mt-[1px]"
							style="transform: scale(0.8)"
							icon={project.icon}
						/>
					{/if}
					<div
						class={large ? 'text-lg md:text-xl' : 'text-sm md:text-md'}
						style="text-shadow: 0 0 12px #000a;"
					>
						<MultiClamp clamp={1}>
							{project.title}
						</MultiClamp>
					</div>
					{#if project.awards}
						<Icon icon="fa-solid:award" class="text-xs text-[#ffc04b]" />
					{/if}
				</div>
				<div class="text-xs opacity-50 ml-auto" style="text-shadow: 0 0 12px #000a;">
					{project.type || ''}
				</div>
			</header>
			<main class="text-xs md:text-sm flex flex-col" style="text-shadow: 0 0 12px #000a;">
				{#if large}
					<MultiClamp
						clamp={3}
						class="whitespace-pre-line opacity-70 mb-0.5"
						style="line-height: 1.5;">{project.subtitle}</MultiClamp
					>
				{/if}
				{#if project.tags && !large}
					<div class="flex gap-2 text-sm whitespace-nowrap">
						{#each project.tags as tag}
							<div class="flex gap-0.5 items-center">
								<span class="opacity-60">#</span>
								<span>{tag}</span>
							</div>
						{/each}
					</div>
				{/if}

				{#if project.awards && false}
					<div class="mt-1 hidden md:block">
						{#each project.awards as award}
							<div class="flex gap-2 items-center text-[#ffb53e]">
								<Icon icon="fa-solid:award" class="text-xs" /><span>{award}</span>
							</div>
						{/each}
					</div>
				{/if}
			</main>
			{#if large}
				<div class="h-0.5" />
			{/if}
		</div>
	</div>
	{#if large && project.tags}
		<div class="flex-1" />
		<div class="flex gap-2 content-container px-3 py-1 justify-end text-sm">
			{#each project.tags as tag}
				<div class="flex gap-0.5 items-center">
					<span class="opacity-60">#</span>
					<span>{tag}</span>
				</div>
			{/each}
		</div>
	{/if}
</a>

<style>
	.project-card .go-icon {
		transition: opacity 0.1s, transform 0.1s;
		opacity: 0;
		transform: scale(0.8);
		fill: none;
		stroke: #0003;
		stroke-width: 1px;
		stroke-linejoin: round;
	}

	.project-card:hover .go-icon {
		opacity: 1;
		transform: scale(1);
	}

	.content-container {
		background-color: #0009;
		backdrop-filter: blur(4px);
	}

	.project-card {
		transform: scale(1);
		transition: transform 0.1s;
	}

	.project-card:active {
		transform: scale(0.985) !important;
		filter: brightness(0.8) !important;
	}

	.project-card .text-desc {
		transition: opacity 0.1s;
	}

	@media (pointer: fine) {
		:global(.project-card):hover,
		:global(.project-card.open) {
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
