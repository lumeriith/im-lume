<script>
	export const containerPadding = 20;
	export const containerMaxWidth = 1152;

	let _class = '';
	export let style = '';
	export let id = undefined;
	export { _class as class };
</script>

<div
	{id}
	class="ml-auto mr-auto {_class}"
	style="padding: {containerPadding}px; max-width: {containerMaxWidth}px; {style}"
>
	<slot />
</div>
