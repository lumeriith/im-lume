<script>
	import Card, { Content } from '@smui/card';
	import StackIcon from '../StackIcon.svelte';
	import FaAward from 'svelte-icons/fa/FaAward.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';

	export let title = 'This is a test title';
	export let subtitle = '';
	export let content = 'This is a test content';
	export let imgName = '';
	export let stacks = [];
	export let awards = [];
	export let role = '';
</script>

<Card class="w-72 overflow-hidden activity-card relative">
	<div
		class="absolute w-full aspect-square"
		style="background: linear-gradient(20deg, #0000 60%, #0009 100%);"
	/>
	<div class="p-4 absolute w-full text-right" style="text-shadow: 0 0 16px #000a">
		<h2 class="text-lg font-bold ">
			{title}
		</h2>
		<h3 class="text-xs">
			{subtitle}
		</h3>
	</div>

	<img class="object-cover aspect-square" src={`/static/screenshots/${imgName}.png`} alt="" />

	<div class="p-4 text-sm">
		<div class="flex gap-1.5 pb-3">
			{#each stacks as stack (stack)}
				<StackIcon type={stack} />
			{/each}
		</div>
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
</Card>

<style>
	:global(.activity-card) {
		background-color: #111;
		transform: scale(0.975) translateY(0);
		transition: transform 0.2s;
		box-shadow: 0 0 36px #ff6e7a1c;
	}

	:global(.activity-card)::before {
		content: '';
		position: absolute;
		inset: 5px;
		z-index: -1;
		background: conic-gradient(
			#00233b 0deg,
			#2e0509 90deg,
			#21162b 180deg,
			#001531 240deg,
			#3d0710 360deg
		);
		filter: blur(20px);
		border-radius: 6px;
	}

	:global(.activity-card):hover {
		transform: scale(1) translateY(-3px);
	}

	.award {
		background: linear-gradient(45deg, rgb(255, 217, 0), rgb(255, 153, 0));
		background-clip: text;
		text-shadow: 0 0 4px rgba(243, 146, 0, 0.596);
		-webkit-text-fill-color: transparent;
		color: rgb(255, 196, 0);
	}
</style>
