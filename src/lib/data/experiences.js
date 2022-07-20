import ue from '$lib/assets/stacks/ue.png';

export default [
	{
		title: 'Unity',
		subtitle:
			'모바일 게임 프론트/서버 로직 개발, 온라인/LAN 멀티플레이어 게임 개발, 게임 시스템 설계',
		details: [
			'C#',
			'GameSpark',
			['PUN', 'https://www.photonengine.com/pun'],
			['Mirror', 'https://github.com/vis2k/Mirror']
		],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
		background: 'white'
	},
	{
		title: 'Unreal Engine 5',
		subtitle: 'PhysX 활용 물리 장면 연출 프로젝트 연구',
		details: ['C++', 'Blueprint', 'PhysX'],
		imgUrl: ue,
		background: 'black',
		color: 'white'
	},
	{
		title: 'React.js',
		subtitle: '쇼핑몰 관리 웹사이트 프론트 엔드',
		details: ['Redux', 'Electron', 'Bootstrap'],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		background: 'hsl(193, 20%, 10%)',
		color: 'hsl(193, 80%, 80%)'
	},
	{
		title: 'Svelte',
		subtitle: '교육 회사 홈페이지 프론트 엔드, 포트폴리오 사이트 프론트 엔드 & 자동 배포',
		details: [
			['SvelteKit', 'https://svelte.dev/'],
			['TailwindCSS', 'https://tailwindcss.com/']
		],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
		background: 'white',
		color: 'hsl(12, 100%, 50%)'
	},
	{
		title: 'Python',
		subtitle: '작업 자동화, 이미지 인식',
		details: ['Selenium', 'pyautogui', 'opencv'],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		background: 'hsl(207, 51%, 20%)',
		color: 'white'
	}
];
