<script>
	import { onMount } from 'svelte/internal';

	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import NavBar from '../components/NavBar.svelte';

	onMount(() => {
		AOS.init();
	});
</script>

<NavBar />
<slot />
