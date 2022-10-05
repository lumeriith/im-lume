<script>
	import bg from '$lib/assets/gradientbg.png';
	import { page } from '$app/stores';
	import Container from '$lib/components/general/Container.svelte';
	import LizardSmoothie from '$lib/components/LizardSmoothie.svelte';
</script>

<div
	class="h-[100vh] pt-6 flex justify-center items-center font-monospace bg-wrapper opacity-50"
	style="background: url({bg}); background-repeat: no-repeat; background-size: 100% 100%;"
/>

<div class="fixed w-full top-0 z-100 flex bg-black">
	<a class="flex gap-2 p-2 items-center" href="/">
		<LizardSmoothie size={20} />
		<div class="font-monospace text-md">imlu.me</div></a
	>
</div>

<Container>
	<div>
		{$page.params.projectId}
	</div>
</Container>
