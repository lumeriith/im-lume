<script>
	export let title = '';
	export let subtitle = '';
</script>

<h2 class="text-4xl text-center mb-2 mt-7 font-bold" data-aos="fade">{title}</h2>
<h3 class="text-lg text-center mb-8 font-bold" data-aos="fade">{subtitle}</h3>

<style>
	h2 {
		text-shadow: 0 0 8px rgba(255, 255, 255, 0.342);
	}

	h3 {
		color: rgb(255, 37, 110);
		text-shadow: 0 0 8px rgba(255, 0, 55, 0.432);
	}
</style>
