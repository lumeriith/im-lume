<script>
	export let hueRotate = 0;

	let _class;
	export { _class as class };
</script>

<div class="space-wrapper {_class}" style="backdrop-filter: hue-rotate({hueRotate}deg);">
	<slot />
</div>

<style>
	.space-wrapper {
		border-top: 1px solid rgba(90, 67, 74, 0.459);
		border-bottom: 1px solid rgba(90, 67, 74, 0.459);
		background-color: #0005;
	}
</style>
