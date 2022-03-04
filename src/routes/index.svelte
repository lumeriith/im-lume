<script>
	import Container from '../components/Container.svelte';
	import Activities from '../components/MainParts/Activities.svelte';
</script>

<Container>
	<div class="flex flex-col items-center">
		<h1 class="text-6xl font-extrabold mt-2 mb-3 p-5 pb-3">A Really Cool Résumé</h1>
		<h2 class="mb-7 text-2xl font-bold text-center opacity-90">
			경희대학교 소프트웨어융합학과 3학년 심은섭
		</h2>
	</div>
</Container>

<Activities />
