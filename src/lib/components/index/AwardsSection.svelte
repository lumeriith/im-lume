<script>
	import career from '$lib/data/career';

	import LineCard from '$lib/components/cards/LineCard.svelte';
	import Container from '$lib/components/general/Container.svelte';
	import PartHeading from '$lib/components/general/PartHeading.svelte';
	import FullWidthSpace from '$lib/components/general/FullWidthSpace.svelte';
	import awards from '$lib/data/awards';
	import Icon from '@iconify/svelte';
	import projects from '$lib/data/projects';

	function getId(project) {
		return projects.findIndex((p) => p.title == project);
	}
</script>

<div style="--main-color: #ffc934">
	<PartHeading title="Awards" subtitle="수상경력" id="awards" />
	<FullWidthSpace>
		<Container>
			<div class="flex justify-center items-center py-8">
				<div class="flex flex-wrap flex-col gap-10 items-stretch" style="width: min(700px, 100%)">
					{#each awards as { date, issuer, name, project }, i}
						<div class="flex items-center ">
							<div class="text-xl font-bold whitespace-nowrap w-20">{date}</div>
							<a href="/projects/{getId(project)}" class="text-[var(--main-color)]">
								<span class="text-xl font-bold">{name}</span>
								{#if project}
									<Icon class="inline-block mb-0.5 text-md" icon="ci:external-link" />
								{/if}
							</a>
							<div class="text-sm opacity-60 ml-4 sm:block hidden">{issuer}</div>
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
		text-decoration-color: #ffde82;
		filter: brightness(1.5);
	}

	a:active {
		filter: brightness(0.7);
	}
</style>
