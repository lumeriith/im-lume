<script>
	import Container from '$lib/components/general/Container.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import AboutButtons from '../general/AboutButtons.svelte';
</script>

<div id="about" />
<FullWidthSpace class="pb-8">
	<Container class="font-monospace">
		<h2 class="text-2xl font-bold mb-4 mt-5">Contact</h2>
		<div class="mb-1 text-lg font-bold">심은섭 · Eunseop Shim</div>
		<div class="text-sm opacity-60 mb-1">경희대학교 소프트웨어융합학과 4학년 휴학생</div>
		<!-- <div class="text-sm opacity-60 mb-1">경희대학교 소프트웨어융합학과 재학생</div> -->
		<div class="text-sm opacity-60 mb-4">엔진/네트워크 등 게임 개발 직군 희망</div>

		<a class="text-xs opacity-60 mb-6 inline-block underline" href="mailto:lumeriith@gmail.com">
			lumeriith@gmail.com
		</a>
		<AboutButtons class="mb-7" />
		<div class="text-xs opacity-50 mb-2" style="line-height: 180%;">
			<!-- <span>Made with ❤️ by Eunseop Shim</span>
			<span>·</span>
			<span>Hosted on Vercel</span>
			<span>·</span>
			<span>Powered by SvelteKit</span>
			<span>·</span> -->
			<span>
				Photo by <a
					class="underline"
					href="https://unsplash.com/@sweetmangostudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Ricky Kharawala</a
				>
				on
				<a
					href="https://unsplash.com/photos/6s8GtWMjT3I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					class="underline">Unsplash</a
				></span
			>
		</div>
	</Container>
</FullWidthSpace>
