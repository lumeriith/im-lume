<script>
	export let padding = 20;
	export let maxWidth = 1152;

	let _class = '';
	export let style = '';
	export let id = undefined;
	export { _class as class };
</script>

<div
	{id}
	class="ml-auto mr-auto {_class}"
	style="padding: {padding}px; max-width: {maxWidth}px; {style}"
>
	<slot />
</div>
