<script>
	import career from '$lib/data/career';

	import LineCard from '$lib/components/cards/LineCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import awards from '$lib/data/awards';
	import Icon from '@iconify/svelte';
	import projects from '$lib/data/projects';
</script>

<div style="--main-color: #ffc100">
	<PartHeading title="Awards" subtitle="수상경력" id="awards" />
	<FullWidthSpace>
		<Container>
			<div class="flex justify-center items-center py-8">
				<div class="flex flex-wrap flex-col gap-5 items-stretch">
					{#each awards as { date, issuer, name, project }, i}
						<div class="text-base sm:text-lg lg:text-xl flex items-center flex-wrap" style="transform: scale(0.9)">
							<div class="font-bold whitespace-nowrap w-full sm:w-20 text-center sm:text-left">
								{date}
							</div>
							<a
								href="/projects/{project}"
								class="text-[var(--main-color)] py-2 w-full sm:ml-0 sm:w-auto text-center"
							>
								<span class="font-bold">{name}</span>
								{#if project}
									<Icon class="inline-block mb-0.5 text-base" icon="ci:external-link" />
								{/if}
							</a>
							<div class="text-xs md:text-sm opacity-60 sm:ml-4 w-full sm:w-auto text-center">
								{issuer}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</Container>
	</FullWidthSpace>
</div>

<style>
	a:hover {
		text-decoration: underline;
		text-decoration-color: var(--main-color);
	}
</style>
