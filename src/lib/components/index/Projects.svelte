<script>
	import projects from '$lib/data/projects';

	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import ProjectDetailCard from '$lib/components/cards/ProjectDetailCard.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';

	let isDetailShown = false;

	let projectsPadding = 0;
</script>

<PartHeading title="Projects" subtitle="대외활동 및 프로젝트" />

<FullWidthSpace class="relative">
	<div class="overflow-hidden snap-x snap-mandatory">
		<div
			class="flex gap-8 md:gap-12 items-stretch p-10 w-fit select-none"
			style="padding-left: {projectsPadding}px; padding-right: {projectsPadding}px"
		>
			{#each projects as project, i (i)}
				<div class="shrink-0 cursor-pointer">
					<ProjectCard {...project} />
				</div>
			{/each}
		</div>
	</div>
</FullWidthSpace>

<div
	class="fixed inset-0 z-40 pt-16 pb-16 pl-3 pr-3 sm:p-8 flex flex-col items-center justify-center overflow-auto sm:overflow-hidden transition-opacity {isDetailShown
		? 'pointer-events-auto'
		: 'pointer-events-none'}"
>
	<div
		class="fixed inset-0 bg-[#0A0007bb] text-white flex flex-col justify-end items-center {isDetailShown
			? 'opacity-100'
			: 'opacity-0'} transition-opacity"
	>
		X Icon
	</div>

	<div>
		<ProjectDetailCard
			class="detail-card {isDetailShown ? 'show' : ''} mb-4"
			project={{}}
			on:close={() => {}}
		/>
	</div>
</div>

<style>
	:global(.detail-card) {
		transform: scale(0.7);
		opacity: 0;
		transition: transform 0.3s, opacity 0.3s;
	}
	:global(.detail-card.show) {
		opacity: 1;
		transform: scale(1);
	}
</style>
