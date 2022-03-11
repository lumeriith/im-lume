<script>
	import StackIcon from '@components/general/StackIcon.svelte';
	import FaAward from 'svelte-icons/fa/FaAward.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import ColorfulCard from './ColorfulCard.svelte';
	import LinkItem from '@components/general/LinkItem.svelte';
	import Button from '@smui/button';
	import { createEventDispatcher } from 'svelte';

	export let project = {};
	let id = 'dew',
		title = '',
		subtitle = '',
		content = '',
		stacks = [],
		awards = [],
		role = '',
		links = [];
	$: {
		({
			id = 'dew',
			title = '',
			subtitle = '',
			content = '',
			stacks = [],
			awards = [],
			role = '',
			links = []
		} = project || {});
	}

	export let style = '';
	let _class = '';
	export { _class as class };

	console.log(project);

	const dispatch = createEventDispatcher();
</script>

<ColorfulCard
	class="flex flex-col sm:flex-row {_class}"
	style="box-shadow: 0 0 32px 16px hsl(329, 80%, 7%, 0.7); {style}"
>
	{#key id}
		<img
			class="object-cover aspect-video w-full sm:aspect-square sm:w-72"
			src="projects/{id}/thumbnail.jpg"
			alt=""
		/>
	{/key}

	<div class="p-6 pb-8 md:p-6 text-md flex-1">
		<h2 class="text-2xl font-bold mb-1 ">
			{title}
		</h2>
		<h3 class="text-md mb-2">
			{subtitle}
		</h3>
		<div class="flex gap-3 items-center mb-5">
			{#each stacks as stack (stack)}
				<StackIcon type={stack} showName />
			{/each}
		</div>
		<div>
			{content}
		</div>
		<div class="flex flex-col gap-2 mt-5 text-sm justify-center">
			<div class="flex gap-2 items-center text-white opacity-60">
				<div class="w-5 flex justify-center items-center">
					<div class="w-4 h-4"><FaUser /></div>
				</div>
				<div>{role}</div>
			</div>
			{#each awards as award}
				<div class="flex gap-2 award items-start">
					<div class="w-5 h-5 mt-0.5"><FaAward /></div>
					<div>{award}</div>
				</div>
			{/each}
			<div class="flex gap-2 mt-2 flex-wrap">
				{#each links as { type, url } (url)}
					<LinkItem {type} {url} />
				{/each}
			</div>
		</div>
	</div>
</ColorfulCard>

<style>
	.award {
		text-shadow: 0 0 4px rgba(243, 146, 0, 0.596);
		color: rgb(255, 196, 0);
	}
</style>
