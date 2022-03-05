<script>
	import { each } from 'svelte/internal';
	import StackCard from '../Cards/StackCard.svelte';
	import ExperienceCard from '../Cards/ExperienceCard.svelte';

	import Container from '../Container.svelte';
	import PartHeading from '../PartHeading.svelte';

	const stacks = [
		{
			title: 'Unity, C#',
			subtitle: '3년+',
			details: ['Photon_Unity_Networking_2', 'Mirror'],
			imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
			background: 'white'
		},
		{
			title: 'JavaScript',
			subtitle: '6개월',
			details: ['Node', 'React.js', 'Svelte', 'Redux'],
			imgUrl:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
			background: 'hsl(56, 100%, 95%)',
			color: 'hsl(56, 100%, 10%)'
		},
		{
			title: 'React.js',
			subtitle: '6개월',
			details: ['Bootstrap', 'Redux', 'Electron', 'FunctionalComponents', 'Hooks'],
			imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			background: 'hsl(193, 20%, 10%)',
			color: 'hsl(193, 80%, 80%)'
		},

		{
			title: 'HTML5/CSS5',
			subtitle: '6개월',
			details: ['TailwindCSS'],
			imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
			background: 'hsl(12, 78%, 65%)',
			color: 'hsl(12, 100%, 10%)'
		},
		{
			title: 'Python',
			subtitle: '1년 넘었찌만 쌩초보',
			details: ['Selenium', 'pyautogui', 'opencv'],
			imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			background: 'hsl(207, 51%, 20%)',
			color: 'white'
		}
	];

	const experiences = [
		{
			type: 'work',
			time: '2019.6 ~ 2019.9',
			content: '청청당당 초등학생~고등학생 대상 파이썬 코딩교육 강사'
		},
		{
			type: 'work',
			time: '2020.2 ~ 2020.6',
			content: '누라임게임즈 Unity 기반 서버/클라이언트 개발자'
		},
		{
			type: 'contribution',
			time: '2020.6 ~ 2021.7',
			content:
				'오픈소스 유니티 멀티플레이어 솔루션 <a href="https://github.com/vis2k/Mirror" target="_blank">vis2k/Mirror</a> 기여 <a href="https://github.com/vis2k/Mirror/pull/2032" target="_blank">#2032</a> <a href="https://github.com/vis2k/Mirror/pull/2803" target="_blank">#2803</a> <a href="https://github.com/vis2k/Mirror/pull/2808" target="_blank">#2808</a> '
		},
		{
			type: 'work',
			time: '2020.8 ~ 2022.2',
			content: '국가의 부름;'
		},
		{
			type: 'work',
			time: '2022.2 ~ 현재',
			content: '글로벌링크 쇼피 관리 솔루션 프론트 엔드 개발자'
		}
	];
</script>

<Container>
	<PartHeading title="Experiences" subtitle="경험, 경력 및 운용 가능한 기술 스택" />
	<div class="flex flex-col gap-10 justify-center items-center mb-32">
		<div
			class="flex flex-wrap flex-col gap-2 md:gap-5 items-stretch"
			style="width: min(600px, 100%)"
		>
			{#each stacks as { title, subtitle, details, imgUrl, background, color }}
				<StackCard {title} {subtitle} {details} {imgUrl} {background} {color} />
			{/each}
		</div>
		<div
			class="flex flex-wrap flex-col gap-1 md:gap-4 items-stretch"
			style="width: min(700px, 100%)"
		>
			{#each experiences as { content, time, type }}
				<ExperienceCard {content} {time} {type} />
			{/each}
		</div>
	</div>
</Container>
