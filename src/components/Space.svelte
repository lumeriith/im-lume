<script>
	let _class;
	export { _class as class };
</script>

<div class="space-wrapper {_class}">
	<slot />
</div>

<style>
	.space-wrapper {
		border-top: 1px solid rgba(90, 67, 74, 0.459);
		border-bottom: 1px solid rgba(90, 67, 74, 0.459);
		background-color: #0003;
		position: relative;
	}
</style>
