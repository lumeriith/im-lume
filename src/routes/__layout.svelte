<script>
	import { onMount } from 'svelte/internal';

	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import NavBar from '../components/NavBar.svelte';

	onMount(() => {
		AOS.init();
		window.addEventListener('load', AOS.refresh);
	});
</script>

<div class="flex flex-col min-h-screen">
	<NavBar />
	<slot />
</div>
