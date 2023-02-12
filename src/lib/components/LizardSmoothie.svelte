<script>
	import Icon from '@iconify/svelte';

	export let size = 32;
</script>

<div class="flex items-center">
	<Icon
		icon="fluent-emoji-high-contrast:lizard"
		class="lizard-icon text-[27px]"
		style="font-size: {(size / 32) * 27}px;"
	/>
	<Icon
		icon="fluent:drink-to-go-20-filled"
		class="smoothie-icon text-[32px]"
		style="font-size: {size}px"
	/>
</div>
