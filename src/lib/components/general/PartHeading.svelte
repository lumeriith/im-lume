<script>
	import Container from './Container.svelte';

	export let title = '';
	export let subtitle = '';
	export let id = undefined;
</script>

<Container {id}>
	<div class="mb-1 mt-7 font-monospace text-center flex flex-col select-none">
		<span class="text-5xl sm:text-5xl md:text-6xl font-bold -ml-6 text-[var(--main-color)]"
			>{title}.</span
		>
		<span class="text-2xl sm:text-2xl md:text-3xl font-bold -mt-3 ml-16">{subtitle}</span>
	</div>
</Container>
