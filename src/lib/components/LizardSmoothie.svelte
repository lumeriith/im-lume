<script>
	import Icon from '@iconify/svelte';

	export let size = 32;
</script>

<div class="flex items-center">
	<Icon
		icon="fluent-emoji-high-contrast:lizard"
		class="lizard-icon text-[27px] text-[#87ff1e]"
		style="font-size: {(size / 32) * 27}px;"
	/>
	<Icon
		icon="fluent:drink-to-go-20-filled"
		class="smoothie-icon text-[32px] text-[#ff9db2]"
		style="font-size: {size}px"
	/>
</div>

<style>
	:global(.lizard-icon) {
		color: #87ff1e;
		filter: drop-shadow(0 0 4px #87ff1e);
	}

	:global(.smoothie-icon) {
		color: #ff6788;
		filter: drop-shadow(0 0 4px #ff5a7e);
	}
</style>
