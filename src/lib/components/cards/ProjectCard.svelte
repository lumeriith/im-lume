<script>
	import ColorfulCard from '$lib/components/cards/ColorfulCard.svelte';
	import Icon from '@iconify/svelte';

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
</script>

<ColorfulCard
	class="overflow-hidden relative project-card flex flex-col px-4 py-3 w-full md:w-[500px] cursor-pointer"
	on:click
>
	<div
		class="absolute inset-0 -z-10 bg-img"
		style="background: url({project.thumb}); background-size: cover; background-position: center center;"
	/>
	<div class="text-desc flex flex-col flex-1 gap-1">
		<header class="flex items-center gap-1.5">
			{#if project.icon}
				<Icon class="text-2xl mt-[1px]" icon={project.icon} />
			{/if}
			<div class="text-2xl font-bold" style="text-shadow: 0 0 12px #000a;">
				{project.title}
			</div>
			<div class="text-xs opacity-50 ml-auto" style="text-shadow: 0 0 12px #000a;">
				{project.subtitle || ''}
			</div>
		</header>
		<main class="text-sm opacity-70" style="text-shadow: 0 0 12px #000a;">
			{project.content}
		</main>
	</div>
</ColorfulCard>

<style>
	:global(.project-card) {
		transform: scale(1);
		transition: transform 0.1s;
	}

	:global(.project-card):active {
		transform: scale(0.97) !important;
		filter: brightness(0.8) !important;
	}

	:global(.project-card) .bg-img {
		transition: opacity 0.1s;
		opacity: 0.4;
	}

	:global(.project-card) .text-desc {
		transition: opacity 0.1s;
	}

	:global(.project-card):hover .bg-img {
		opacity: 0.7;
	}

	@media (pointer: fine) {
		:global(.project-card):hover,
		:global(.project-card.open) {
			transform: scale(1.02);
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
