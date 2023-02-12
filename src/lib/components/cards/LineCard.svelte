<script>
	import ColorfulCard from './ColorfulCard.svelte';

	export let time = '';
	export let at = '';
</script>

<div class="gap-2 flex-1 flex flex-col items-center font-monospace font-bold text-center">
	<div class="text-base sm:text-xl">{time}</div>

	<div class="text-base sm:text-xl"><slot /></div>
	<div class="text-sm sm:text-base text-[var(--main-color)]">@ {at}</div>
</div>
