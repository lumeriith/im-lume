<script>
	import Container from './Container.svelte';

	export let title = '';
	export let subtitle = '';
	export let id = undefined;
</script>

<Container {id}>
	<div class="mb-1 mt-14 font-monospace text-center flex justify-center select-none">
		<div>
			<div class="text-5xl sm:text-5xl md:text-6xl font-bold text-[var(--main-color)] w-auto">
				{title}.
			</div>
			<div class="text-2xl sm:text-2xl md:text-3xl font-bold -mt-3.5 ml-12 w-auto">{subtitle}</div>
		</div>
	</div>
</Container>
