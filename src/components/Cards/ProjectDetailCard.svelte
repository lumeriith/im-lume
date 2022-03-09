<script>
	import StackIcon from '../StackIcon.svelte';
	import FaAward from 'svelte-icons/fa/FaAward.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import ColorfulCard from './ColorfulCard.svelte';
	import LinkItem from '../LinkItem.svelte';
	import Button from '@smui/button';
	import { createEventDispatcher } from 'svelte';

	export let title = 'This is a test title';
	export let subtitle = '';
	export let content = 'This is a test content';
	export let mediaName = '';
	export let stacks = [];
	export let awards = [];
	export let role = '';
	export let links = [];

	const dispatch = createEventDispatcher();
</script>

<ColorfulCard class="h-full sm:h-auto" style="box-shadow: 0 0 32px 16px hsl(329, 80%, 14%, 0.7);">
	<div class="overflow-auto flex flex-col sm:flex-row w-full h-full">
		<img
			class="object-cover aspect-square sm:w-72"
			src="projects/{mediaName}/thumbnail.jpg"
			alt=""
		/>
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
			<Button class="block sm:hidden" on:click={() => dispatch('close')}>닫기</Button>
		</div>
	</div>
</ColorfulCard>

<style>
	.award {
		text-shadow: 0 0 4px rgba(243, 146, 0, 0.596);
		color: rgb(255, 196, 0);
	}
</style>
