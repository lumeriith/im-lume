<script>
	import StackIcon from '@components/general/StackIcon.svelte';
	import FaAward from 'svelte-icons/fa/FaAward.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import ColorfulCard from './ColorfulCard.svelte';
	import LinkItem from '@components/general/LinkItem.svelte';
	import Button from '@smui/button';
	import { createEventDispatcher } from 'svelte';

	export let project = {};
	let id = '',
		title = '',
		subtitle = '',
		content = '',
		stacks = [],
		awards = [],
		role = '',
		links = [];
	$: {
		({
			id = '',
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
	style="box-shadow: 0 0 32px 16px hsl(329, 80%, 14%, 0.7); {style}"
>
	{#key id}
		<img class="object-cover aspect-square sm:w-72" src="projects/{id}/thumbnail.jpg" alt="" />
	{/key}

	<div class="p-4 text-sm flex-1">
		<div class="relative">
			<div class="flex gap-1.5 absolute justify-end inset-0 items-center">
				{#each stacks as stack (stack)}
					<StackIcon type={stack} />
				{/each}
			</div>
			<h2 class="text-lg font-bold ">
				{title}
			</h2>
		</div>
		<h3 class="text-xs mb-3">
			{subtitle}
		</h3>
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
				{#each links as { type, url }}
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
