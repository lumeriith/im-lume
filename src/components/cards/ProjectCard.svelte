<script>
	import StackIcon from '@components/general/StackIcon.svelte';
	import ColorfulCard from '@components/cards/ColorfulCard.svelte';

	export let title = 'This is a test title';
	export let subtitle = '';
	export let content = 'This is a test content';
	export let id = '';
	export let stacks = [];
	export let role = '';
	export let links = [];
	export let awards = [];
</script>

<ColorfulCard class="w-64 overflow-hidden relative h-full snap-center project-card">
	<div class="relative">
		<img class="object-cover aspect-square" src="projects/{id}/thumbnail.jpg" alt="" />
	</div>

	<div class="p-4 text-sm">
		<div class="relative">
			<div class="flex gap-1.5 absolute inset-0 justify-end items-center">
				{#each stacks as stack (stack)}
					<StackIcon type={stack} />
				{/each}
			</div>
			<h2 class="text-lg font-bold ">
				{title}
			</h2>
		</div>
		<h3 class="text-xs mb-3">
			{subtitle}
		</h3>
		<div>
			{content}
		</div>
	</div>
</ColorfulCard>

<style>
	:global(.project-card) {
		transform: scale(1);
		transition: transform 0.15s;
	}

	:global(.project-card):active {
		transform: scale(0.93) !important;
		filter: brightness(0.8) !important;
	}

	@media (pointer: fine) {
		:global(.project-card):hover,
		:global(.project-card.open) {
			transform: scale(1.05);
			filter: brightness(1.1);
		}
	}

	@media (pointer: coarse) {
		:global(.project-card) {
			transform: scale(1);
			transition: transform 0.15s;
		}

		:global(.project-card.open) {
			transform: scale(1.05);
			filter: brightness(1.1);
		}
	}
</style>
