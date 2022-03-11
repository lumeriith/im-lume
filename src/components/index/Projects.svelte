<script>
	import { onMount, tick } from 'svelte';
	import ScrollBooster from 'scrollbooster';
	import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'svelte-feather-icons';

	import projects from '@data/projects';

	import { containerPadding, containerMaxWidth } from '@components/general/Container.svelte';
	import ProjectCard from '@components/cards/ProjectCard.svelte';
	import ProjectDetailCard from '@components/cards/ProjectDetailCard.svelte';
	import FullWidthSpace from '@components/general/FullWidthSpace.svelte';
	import PartHeading from '@components/general/PartHeading.svelte';

	let isDetailShown = false;

	let selectedProject = null;

	let projectsPadding = 0;
	onMount(() => {
		updateProjectsPadding();
	});

	function updateProjectsPadding() {
		if (window.innerWidth <= 767) {
			projectsPadding = window.innerWidth / 2 - projectsContent.firstChild.offsetWidth / 2;
		} else if (window.innerWidth < containerMaxWidth + containerPadding) {
			projectsPadding = containerPadding;
		} else {
			projectsPadding =
				(window.innerWidth - containerMaxWidth - containerPadding) / 2 + containerPadding;
		}
	}

	let projectsViewport;
	let projectsContent;
	let scrollBooster;
	onMount(async () => {
		if (window.matchMedia('(pointer: coarse)').matches) {
			projectsViewport.style.overflow = 'auto';
			projectsViewport.addEventListener('scroll', updateCanScroll);
			return; // If touchscreen
		}
		scrollBooster = new ScrollBooster({
			viewport: projectsViewport,
			content: projectsContent,
			scrollMode: 'transform',
			direction: 'horizontal',
			onUpdate: updateCanScroll
		});
		await tick();
		updateCanScroll();
		scrollBooster.updateMetrics();
	});

	const distanceThreshold = 50;
	let totalDistance = 0;
	let lastCursorPosition = { x: 0, y: 0 };
	function onCardMouseDown(e, project) {
		selectedProject = project;
		totalDistance = 0;
		lastCursorPosition = { x: e.pageX, y: e.pageY };
	}

	function onCardMouseMove(e) {
		let delta = { x: e.pageX - lastCursorPosition.x, y: e.pageY - lastCursorPosition.y };
		lastCursorPosition = { x: e.pageX, y: e.pageY };
		totalDistance += delta.x * delta.x + delta.y * delta.y;
	}

	function onCardMouseUp(e) {
		if (totalDistance < distanceThreshold && selectedProject) {
			showDetail(selectedProject);
			selectedProject = null;
		}
	}

	let canScrollLeft = false;
	let canScrollRight = false;
	function updateCanScroll() {
		if (scrollBooster) {
			const state = scrollBooster.getState();
			canScrollLeft = !state.borderCollision.left;
			canScrollRight = !state.borderCollision.right;
		}
	}

	function scroll(left) {
		if (scrollBooster) {
			const { position } = scrollBooster.getState();
			const minX = 0;
			const maxX = projectsContent.clientWidth - projectsViewport.clientWidth;
			let newPosX = position.x + window.innerWidth * (left ? -1 : 1);
			if (newPosX < minX) newPosX = minX - 1;
			if (newPosX > maxX) newPosX = maxX + 1;
			scrollBooster.scrollTo({
				x: newPosX,
				y: position.y
			});
			return;
		}
	}

	let shownProject;
	function showDetail(project) {
		shownProject = project;
		isDetailShown = true;
		const top = document.body.getBoundingClientRect().top;
		document.body.style.width = document.body.clientWidth + 'px';
		document.body.style.top = top + 'px';
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
	}

	function hideDetail() {
		isDetailShown = false;

		const lastPos = -document.body.style.top.substring(0, document.body.style.top.length - 2);
		document.body.style.width = '';
		document.body.style.top = '';
		document.body.style.overflow = '';
		document.body.style.position = '';

		window.scrollTo(0, lastPos);
	}

	function onWindowResize() {
		updateProjectsPadding();
		if (scrollBooster) scrollBooster.updateMetrics();
	}
</script>

<svelte:window on:resize={onWindowResize} />

<PartHeading title="Projects" subtitle="대외활동 및 프로젝트" />

<FullWidthSpace class="relative">
	{#if scrollBooster}
		<div class="absolute inset-0 z-10 pointer-events-none flex justify-between">
			<button
				class="items-center p-2 pointer-events-auto mr-auto {canScrollLeft ? 'flex' : 'hidden'}"
				style="background: linear-gradient(90deg, #000a, #0008 30%, #0000)"
				on:click={() => scroll(true)}><ChevronLeftIcon class="w-10" /></button
			>
			<button
				class="items-center p-2 pointer-events-auto ml-auto {canScrollRight ? 'flex' : 'hidden'}"
				style="background: linear-gradient(-90deg, #000a, #0008 30%, #0000)"
				on:click={() => scroll(false)}><ChevronRightIcon class="w-10" /></button
			>
		</div>
	{/if}
	<div class="overflow-hidden snap-x snap-mandatory" bind:this={projectsViewport}>
		<div
			class="flex gap-8 md:gap-12 items-stretch p-10 w-fit select-none"
			style="padding-left: {projectsPadding}px; padding-right: {projectsPadding}px"
			bind:this={projectsContent}
		>
			{#each projects as project, i (i)}
				<div
					class="shrink-0 cursor-pointer"
					on:mousedown={(e) => onCardMouseDown(e, project)}
					on:mousemove={onCardMouseMove}
					on:mouseup={onCardMouseUp}
				>
					<ProjectCard {...project} />
				</div>
			{/each}
		</div>
	</div>
</FullWidthSpace>

<div
	class="fixed inset-0 z-40 pt-16 pl-3 pr-3 sm:p-8 sm:flex flex-col sm:items-center sm:justify-center overflow-auto sm:overflow-hidden transition-opacity {isDetailShown
		? 'pointer-events-auto'
		: 'pointer-events-none'}"
>
	<div
		class="fixed inset-0 bg-[#0A000788] text-white {isDetailShown
			? 'opacity-100'
			: 'opacity-0'} transition-opacity"
		on:mousedown={hideDetail}
	>
		<XIcon class="w-8 h-8 ml-auto mr-auto m-3 sm:hidden" />
	</div>

	<ProjectDetailCard
		class="detail-card {isDetailShown ? 'show' : ''} mb-4"
		project={shownProject}
		on:close={hideDetail}
	/>
</div>

<style>
	:global(.detail-card) {
		transform: scale(0.7);
		opacity: 0;
		will-change: transform;
		transition: transform 0.3s, opacity 0.3s;
	}
	:global(.detail-card.show) {
		opacity: 1;
		transform: scale(1);
	}

	@media (max-width: 640px) {
		:global(.detail-card) {
			transition-delay: 0.1s;
		}
	}
</style>
