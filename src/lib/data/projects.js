import cardkin_t from '$lib/assets/projects/cardkin/thumbnail.jpg';
import cardkin_c from '$lib/assets/projects/cardkin/card.png';

import cube_t from '$lib/assets/projects/cube/thumbnail.jpg';
import cube_c from '$lib/assets/projects/cube/card.png';

import dew_t from '$lib/assets/projects/dew/thumbnail.jpg';
import dew_c from '$lib/assets/projects/dew/card.png';

import goat_t from '$lib/assets/projects/goat/thumbnail.jpg';
import goat_c from '$lib/assets/projects/goat/card.png';

import magical_t from '$lib/assets/projects/magical/thumbnail.jpg';
import magical_c from '$lib/assets/projects/magical/card.png';

import report_t from '$lib/assets/projects/report/thumbnail.jpg';
import report_c from '$lib/assets/projects/report/card.png';

import phys_t from '$lib/assets/projects/runtimephys/thumbnail.jpg';
import phys_c from '$lib/assets/projects/runtimephys/card.jpg';
import phys_1 from '$lib/assets/projects/runtimephys/pic1.jpg';
import phys_2 from '$lib/assets/projects/runtimephys/pic2.jpg';

import tim_t from '$lib/assets/projects/tim/thumbnail.jpg';
import tim_c from '$lib/assets/projects/tim/card.jpg';
import tim_gif from '$lib/assets/projects/tim/gif.gif';
import tim_1 from '$lib/assets/projects/tim/pic1.jpg';
import tim_2 from '$lib/assets/projects/tim/pic2.jpg';

export default [
	{
		title: 'RuntimeBakedPhysics',
		featured: true,
		subtitle: '연구, 2022',
		icon: 'bxs:book-open',
		content: `펄어비스x경희대 소프트웨어융합학과 인재양성 프로그램 2차
    Creating Complex & Performant Physics Scene by Runtime Physics Baking, Simuating on Demand, and Physics LOD`,
		stacks: ['unreal', 'cpp', 'physx'],
		role: '개인 참여',
		links: [
			{ type: 'Github', data: 'https://github.com/lumeriith/UE5-RuntimeBakedPhysics' },
			{ type: 'Youtube (Overview)', data: 'https://youtu.be/Wwjn05zgbg8' },
			{ type: 'Youtube (SoD Stress Test)', data: 'https://youtu.be/i0U_fU-rdSs' }
		],
		thumb: phys_t,
		medias: [
			{ type: 'youtube', data: 'Wwjn05zgbg8' },
			{ type: 'youtube', data: 'i0U_fU-rdSs' },
			{ type: 'image', data: phys_c },
			{ type: 'image', data: phys_1 }
		]
	},
	{
		title: 'TrappedInMetaverse',
		featured: true,
		subtitle: '게임, 2022',
		icon: 'carbon:game-console',
		content: '온라인 강의 세계와 두 게임 세계를 오가는 한 대학생의 메타버스 탈출기',
		stacks: ['unity', 'svelte', 'firebase'],
		role: 'LizardSmoothie팀 (개인)',
		links: [
			{ type: 'Github (Game)', data: 'https://github.com/lumeriith/TrappedInMetaverse' },
			{ type: 'Github (Web Front)', data: 'https://github.com/lumeriith/tim-web-front' },
			{ type: 'Web Front', data: 'https://tim-web-front.vercel.app/' }
		],
		awards: ['경희대학교 2022 쿠러그 해커톤 KHUTHON 최우수상'],
		thumb: tim_t,
		medias: [
			{ type: 'image', data: tim_gif },
			{ type: 'image', data: tim_c },
			{ type: 'image', data: tim_1 },
			{ type: 'image', data: tim_2 }
		]
	},
	{
		title: 'Dew',
		featured: true,
		subtitle: '게임, 2019',
		icon: 'carbon:game-console',
		content: '서로가 최종 보스가 되어 싸우는 2인용 던전 크롤러.',
		stacks: ['unity', 'cs', 'pun2'],
		role: 'Lizard_0209 팀, 개발 총괄, 시스템 개발',
		awards: ['경희대학교 2019 소융과 학부생 대회 최우수상', '경희대학교 2019 SW페스티벌 대상'],
		links: [
			{ type: 'Youtube', data: 'https://www.youtube.com/watch?v=pfnvd6xF_iA' },
			{ type: 'Youtube (초기 버전)', data: 'https://www.youtube.com/watch?v=KcsNJQg7pr8' }
		],
		thumb: dew_t,
		medias: [
			{ type: 'youtube', data: 'pfnvd6xF_iA' },
			{ type: 'image', data: dew_c }
		]
	},
	{
		title: 'Goat5',
		featured: true,
		subtitle: '게임, 2018',
		icon: 'carbon:game-console',
		content: '자신과 사물의 질량을 조작하여 풀어나가는 1인칭 퍼즐 게임.',
		stacks: ['unity', 'cs'],
		role: '개인 개발',
		awards: ['경희대학교 2018 SW페스티벌 대상'],
		links: [
			{ type: 'Github', data: 'https://github.com/lumeriith/GoatGoatGoatGoatGoat' },
			{ type: 'Youtube', data: 'https://www.youtube.com/watch?v=A7RkZRJcMso' }
		],
		thumb: goat_t,
		medias: [
			{
				type: 'youtube',
				data: `A7RkZRJcMso`
			},
			{ type: 'image', data: goat_c }
		]
	},
	{
		title: '하울의 움직이는 대학',
		subtitle: '게임, 2019',
		icon: 'carbon:game-console',
		content: '마법대학이 걸어서 직접 유능한 인재를 찾아 나서는 이야기.',
		stacks: ['unity', 'cs'],
		role: 'Lizard_0209 팀, 개발 총괄',
		awards: ['경희대학교 2019 쿠러그 해커톤 KHUTHON 대상'],
		links: [{ type: 'Youtube', data: 'https://youtu.be/RHylp18lxUg' }],
		thumb: magical_t,
		medias: [
			{
				type: 'youtube',
				data: 'RHylp18lxUg'
			},
			{ type: 'image', data: magical_c }
		]
	},
	{
		title: 'Cube5',
		subtitle: '게임, 2018',
		icon: 'carbon:game-console',
		content: '총의 반동, 시간 조작을 이용한 캐주얼+하드코어 무한 러너-슈터 게임.',
		stacks: ['unity', 'cs'],
		role: '개인 개발',
		awards: ['경희대 소프트웨어융합학과 X retr0 해커톤 금상'],
		links: [
			{ type: 'Github', data: 'https://github.com/lumeriith/CubeCubeCubeCubeCube' },
			{ type: 'Youtube', data: 'https://www.youtube.com/watch?v=UN0Rky9AqAE' }
		],
		thumb: cube_t,
		medias: [
			{
				type: 'youtube',
				data: `UN0Rky9AqAE`
			},
			{
				type: 'youtube',
				data: `S-dYejGxnO0`
			},
			{ type: 'image', data: cube_c }
		]
	},
	{
		title: 'Cardkin',
		subtitle: '게임, 2018',
		icon: 'carbon:game-console',
		content: '실시간 멀티플레이 PvP 3인칭 슈터 카드 배틀 게임.',
		stacks: ['unity', 'cs', 'unet'],
		role: 'Indian 팀, 개발/기획 총괄',
		awards: ['경희대학교 2018 SW페스티벌 주니어상'],
		links: [
			{ type: 'Release', data: 'https://github.com/lumeriith/Cardkin/releases' },
			{ type: 'Youtube', data: 'https://www.youtube.com/watch?v=MyQEFMC94Ok' }
		],
		thumb: cardkin_t,
		medias: [
			{
				type: 'youtube',
				data: `MyQEFMC94Ok`
			},
			{ type: 'image', data: cardkin_c }
		]
	},
	{
		title: '나는 레포트를 날렸다',
		subtitle: '게임, 2018',
		icon: 'carbon:game-console',
		content: '정문부터 교수님의 연구실까지 날아가는 레포트의 모험.',
		stacks: ['unity', 'cs'],
		role: '소시 팀, 개발/기획 총괄',
		awards: ['경희대학교 2018 쿠러그 해커톤 KHUTHON 최우수상'],
		links: [
			{ type: 'Release', data: 'https://github.com/lumeriith/Thrown-my-report-by-me/releases' }
		],
		thumb: report_t,
		medias: [{ type: 'image', data: report_c }]
	}
];
