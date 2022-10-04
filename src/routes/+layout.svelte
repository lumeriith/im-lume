<script>
	import BigLizard from '$lib/components/BigLizard.svelte';

	import 'ress/dist/ress.min.css';
	import '../app.css';
</script>

<BigLizard />

<div class="z-10 absolute w-full">
	<slot />
</div>
