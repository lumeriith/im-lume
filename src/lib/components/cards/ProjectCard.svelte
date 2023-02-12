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
	class="overflow-hidden relative project-card flex flex-col w-full h-12 sm:h-16 md:h-24 cursor-pointer font-monospace"
	on:click
	href="/projects/{id}"
	style="--main-color: {project.colors[0]}"
>
	<div class="text-desc flex h-full content-container">
		<img
			src={project.thumb}
			alt={project.title}
			class="w-16 sm:w-24 md:w-32 md:mr-1 h-full object-cover"
		/>
		<div class="flex flex-1 flex-col md:gap-1 px-3 py-1 justify-center">
			<header class="flex flex-wrap items-center gap-1.5">
				<div class="flex gap-1.5 items-center flex-1">
					<div
						class="text-lg sm:text-xl md:text-2xl font-bold"
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
				<div
					class="text-xs sm:text-sm md:text-base lg:text-lg opacity-50 ml-auto"
					style="text-shadow: 0 0 12px #000a;"
				>
					{project.type || ''}
				</div>
			</header>
			{#if project.tags}
				<div
					class="flex gap-2 text-xs sm:text-lg md:text-xl font-bold whitespace-nowrap tags -mt-1.5 sm:mt-0"
				>
					{#each project.tags as tag}
						<div class="flex gap-0.5 items-center">
							<span>#</span>
							<span>{tag}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</a>

<style>
	a .tags {
		@apply text-[#aaa];
	}
	a:hover .tags {
		@apply text-[var(--main-color)];
	}

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
		background-color: #000b;
	}

	.project-card .text-desc {
		transition: opacity 0.1s;
	}
</style>
