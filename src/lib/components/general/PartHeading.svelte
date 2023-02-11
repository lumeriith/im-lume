<script>
	import Container from './Container.svelte';

	export let title = '';
	export let subtitle = '';
	export let id = undefined;
</script>

<Container {id}>
	<div class="text-xl mb-1 mt-7 font-monospace flex">
		<span class="text-[#ffcc22]">{title}</span>
		<span class="opacity-30">(</span>
		<span class="text-[#72da4c] font-sans">"{subtitle}"</span>
		<span class="opacity-30">);</span>
	</div>
</Container>
