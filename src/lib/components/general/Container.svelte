<script context="module">
	export const containerPadding = 20;
	export const containerMaxWidth = 1152;

	let _class = '';
	export { _class as class };
</script>

<div
	class="ml-auto mr-auto {_class}"
	style="padding: {containerPadding}px; max-width: {containerMaxWidth}px"
>
	<slot />
</div>
