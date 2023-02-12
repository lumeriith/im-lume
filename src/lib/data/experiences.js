import ue from '$lib/assets/stacks/ue.png';

export default [
	{
		title: 'Unity',
		subtitle: `인디 게임 개발/기획, 게임 시스템 설계
		온라인/LAN 멀티플레이어 게임 개발 (Photon For Unity, Mirror)
		모바일 게임 프론트/서버 로직 개발 (GameSpark)
    오픈소스 프로젝트 멀티플레이어 라이브러리 vis2k/Mirror Contribution
		Assembly Separation, Editor Tool Development, etc`,
		details: [
			'C#',
			'GameSpark',
			['PUN', 'https://www.photonengine.com/pun'],
			['Mirror', 'https://github.com/vis2k/Mirror']
		],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
		background: 'white',
		color: 'white',
		forceWhite: true
	},
	{
		title: 'Unreal Engine 5',
		subtitle: `복잡한 물리 장면 성능 향상 프로젝트 연구
		PhysX 3.4 연동
		테스트/성능 지표 수집 자동화`,
		details: ['C++', 'Blueprint', ['PhysX', 'https://developer.nvidia.com/physx-sdk']],
		imgUrl: ue,
		background: 'black',
		color: 'white'
	},
	{
		title: 'Svelte',
		subtitle: `교육회사 웹사이트 프론트엔드 제작
		포트폴리오 사이트 제작
		브랜치 관리, 자동 배포 (Vercel)`,
		details: [
			['SvelteKit', 'https://svelte.dev/'],
			['TailwindCSS', 'https://tailwindcss.com/'],
			['Vercel', 'https://vercel.com/']
		],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
		background: 'white',
		color: 'hsl(12, 100%, 50%)'
	},
	{
		title: 'Firebase',
		subtitle: '교육회사 웹사이트 커뮤니티 백엔드 개발',
		details: ['Firestore', 'Edge Functions'],
		imgUrl: 'https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg',
		background: '#1A73E8',
		color: '#FFCB2B'
	},
	{
		title: 'React.js',
		subtitle: '쇼핑몰 관리 솔루션 프론트 엔드',
		details: ['Redux', 'Electron', 'Bootstrap'],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		background: 'hsl(193, 20%, 10%)',
		color: '#61dafb'
	},
	{
		title: 'Python',
		subtitle: '작업 자동화, 이미지 인식',
		details: ['Selenium', 'pyautogui', 'opencv'],
		imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		background: 'hsl(207, 51%, 20%)',
		color: '#5eb8ff'
	}
];
