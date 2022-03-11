<script context="module">
	export const containerPadding = 20;
	export const containerMaxWidth = 1152;
</script>

<div
	class="ml-auto mr-auto"
	style="padding: {containerPadding}px; max-width: {containerMaxWidth}px"
>
	<slot />
</div>
