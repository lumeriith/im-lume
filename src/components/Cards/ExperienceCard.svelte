<script>
	import ColorfulCard from './ColorfulCard.svelte';

	export let title = '';
	export let subtitle = '';
</script>

<ColorfulCard class="p-4">
	<h2 class="text-xl">
		{title}
	</h2>
	<h2 class="text-sm opacity-50">{subtitle}</h2>
</ColorfulCard>
