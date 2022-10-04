<script>
	let _class = '';
	export { _class as class };
</script>

<div class="space-wrapper z-10 {_class}">
	<slot />
</div>

<style>
	.space-wrapper {
		border-top: 1px solid rgba(90, 67, 74, 0.459);
		border-bottom: 1px solid rgba(90, 67, 74, 0.459);
	}
</style>
