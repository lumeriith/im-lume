<script>
	import StackIcon from '../StackIcon.svelte';
	import ColorfulCard from './ColorfulCard.svelte';

	export let title = 'This is a test title';
	export let subtitle = '';
	export let content = 'This is a test content';
	export let mediaName = '';
	export let stacks = [];
	export let role = '';
	export let links = [];
	export let awards = [];
</script>

<div data-aos="zoom-in">
	<ColorfulCard
		class="w-72 overflow-hidden relative lg:brightness-90 h-full project-card"
		on:mousedown
	>
		<div class="relative">
			<img class="object-cover aspect-square" src="projects/{mediaName}/card.png" alt="" />
		</div>

		<div class="p-4 text-sm">
			<div class="relative">
				<div class="flex gap-1.5 absolute justify-end inset-0 items-center">
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
</div>

<style>
	:global(.project-card) {
		transform: scale(1);
		transition: transform 0.15s;
	}

	:global(.project-card):hover,
	:global(.project-card.open) {
		transform: scale(1.05);
		filter: brightness(1.1);
	}
</style>
