<script>
	import Card, { Content } from '@smui/card';
	import StackIcon from '../StackIcon.svelte';
	import FaAward from 'svelte-icons/fa/FaAward.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import ColorfulCard from './ColorfulCard.svelte';

	export let title = 'This is a test title';
	export let subtitle = '';
	export let content = 'This is a test content';
	export let imgName = '';
	export let stacks = [];
	export let awards = [];
	export let role = '';
</script>

<ColorfulCard class="w-72 overflow-hidden relative">
	<img class="object-cover aspect-square" src={`/static/screenshots/${imgName}.png`} alt="" />

	<div class="p-4 text-sm">
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
		{content}
		<div class="flex flex-col gap-1 mt-5 text-sm justify-center">
			<div class="flex gap-2 items-center text-white opacity-60">
				<div class="w-5 w-5 flex justify-center items-center">
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
		</div>
	</div>
</ColorfulCard>

<style>
	.award {
		background: linear-gradient(45deg, rgb(255, 217, 0), rgb(255, 153, 0));
		background-clip: text;
		text-shadow: 0 0 4px rgba(243, 146, 0, 0.596);
		-webkit-text-fill-color: transparent;
		color: rgb(255, 196, 0);
	}
</style>
