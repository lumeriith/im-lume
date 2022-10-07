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

import tim_t from '$lib/assets/projects/tim/thumbnail.jpg';
import tim_c from '$lib/assets/projects/tim/card.jpg';
import tim_gif from '$lib/assets/projects/tim/gif.gif';
import tim_1 from '$lib/assets/projects/tim/pic1.jpg';
import tim_2 from '$lib/assets/projects/tim/pic2.jpg';

export default [
	{
		title: 'RuntimeBakedPhysics',
		featured: true,
		type: '연구, 2022',
		icon: 'bxs:book-open',
		subtitle: `펄어비스x경희대 소프트웨어융합학과 인재양성 프로그램 2차`,
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
		],
		content: `
    # Creating Complex & Performant Physics Scene by Runtime Physics Baking, Simuating on Demand, and Physics LOD
    ## 프로젝트 동기
    - 게임 속 물리 연산은 비용이 크다.
    - 물리 연산을 한정적으로 사용하거나 Baked Physics Animation 등을 이용한다.
    - Animation을 실시간 물리 연산을 대신하여 사용하는 것은 제한 사항이 많다.
    - 이러한 제한 사항을 극복하고 물리 장면의 부담을 줄여 복잡하고 화려한 연출의 Artistic Freedom을 주고자 하였다.
    ## 사용 기술
    ### Runtime Physics Baking
    게임 진행 중에 복잡한 물리 장면을 미리 연산하여 저장/재생
    => PhysX 3.4 연동 및 Collision Aggregate/Mesh Generation, Physics Event System, Scene Controller
    ### Simulate on Demand
    재생 중인 물체들 중 플레이어 등의 동적 물체들과 충돌할 가능성이 있는 것들을 선택적으로 실시간 시뮬레이션으로 대치
    => Spatial Hashing, AABB Collision Check
    ### Physics LoD
    멀리 있어 눈에 잘 띄지 않는 장면들에 대해 낮은 정확도와 프레임율의 시뮬레이션으로 성능 향상

    `
	},
	{
		title: 'TrappedInMetaverse',
		featured: true,
		type: '게임, 2022',
		icon: 'carbon:game-console',
		subtitle: '온라인 강의 세계와 두 게임 세계를 오가는 한 대학생의 메타버스 탈출기',
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
		],
		content: `
    # Trapped In Metaverse, 한 대학생의 메타버스 탈출기

    비대면 실시간 강의를 들으며 게임을 하다 메타버스 세계에 갇혀버린 한 대학생,
    강의 세계와 두 게임 세계를 넘나들며 탈출해야한다.

    ## 사용 기술 스택
    Unity (URP), SvelteKit, Firebase, Vercel

    ## 구현 부분
    - 강의, FPS, Platformer 세계를 바꿔가며 게임할 수 있는 시스템
    - 세계 변화에 반응하는 맵 구성과 퍼즐적 요소
    - Firebase 연동 게임 내 글로벌 채팅 시스템
    (익명 로그인과 Firestore Realtime Updates 활용)
    - Sveltekit, TailwindCSS, Vercel 이용 글로벌 채팅 웹 프론트
    - 그래픽적 요소는 대부분 무료 에셋 활용, 일부는 그리거나 Stable Diffusion으로 생성한 이미지 이용
    - 사운드 요소는 기존 에셋을 그대로 혹은 Audacity로 편집하여 사용

    ## 조작법
    숫자 1, 2, 3 키를 눌러 세 가지 세계로 전환할 수 있다.

    1. 강의 세계 : 게임이 멈추며 체력을 모두 회복한다.
    2. FPS 세계 : 적에게 총을 발사할 수 있고 체력이 0으로 떨어지면 사망한다. 왼쪽 마우스 버튼으로 발사, R키로 재장전이 가능하다.
    3. 플랫포머 세계 : 점프가 높아지고 적에게 닿으면 사망한다. 적을 밟아 해치울 수 있다.

    WASD 키로 이동하고 마우스를 이용해 시점 이동이 가능하다. Q를 눌러 재시작할 수 있다.
    Enter를 눌러 채팅이 가능하다.
    `
	},
	{
		title: 'Dew',
		featured: true,
		type: '게임, 2019',
		icon: 'carbon:game-console',
		subtitle: '서로가 최종 보스가 되어 싸우는 2인용 던전 크롤러.',
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
		],
		content: `
    # Dew
    PvE & PvP MOBA 온라인 던전 크롤러 게임
    ## PvE와 PvP의 결합
    Dew는 온라인 멀티 플레이어 게임으로 두 명의 플레이어가 각 진영에서 게임을 시작합니다. 초반부는 던전 크롤링 PvE를 통해 장비, 아이템, 돈, 능력치 등을 획득하며 성장하고, 후반에는 서로를 최종 보스로 만나 결투하게 됩니다.
    Dew는 Photon Networking을 통한 온라인 멀티 플레이가 구현되어 있습니다. Photon의 MasterClient-Client 구조의 장점을 살려 스킬, 몬스터 AI, 물리 처리 등을 알맞게 분배하고 동기화하였습니다. 예를 들어 스킬을 사용하면 해당 스킬의 인스턴스에 대한 초기화 정보들이 Serialize되어 전송되고, 이후 각 인스턴스들은 이 정보에 따라 동작하며 스킬을 사용한 플레이어가 주요 처리를 맡습니다. 처리 도중에 동기화의 필요가 생기는 경우 Remote Procedure들을 적절히 이용하여 모든 플레이어들이 같은 결과를 관측할 수 있도록 하였습니다.

    ## Hero Building Mechanics
    보통 MOBA 장르의 게임들은 챔피언이 고유한 스킬들을 가지고 있지만, Dew에서는 스킬들이 아이템에 귀속되어 있습니다. 무기(기본 공격, Q, R), 갑옷(W), 신발(E), 반지(Space), 투구(지속 효과)들이 각각의 스킬을 가지고 있어 장비의 조합에 따라 다양한 연계 플레이가 가능합니다. 또한 살아있는 개체, 스킬 인스턴스, 스킬 방아쇠 등을 OOP로 직관적으로 추상화하여 디자인하고, 마법 API, 상태 효과 API 등을 개발하여 마법 피해, 기절, 침묵, 지속 피해, 돌진, 넉백 등의 다양한 메커닉들을 구현할 수 있었습니다. 다양한 메커닉이 가능한 베이스 코드 덕에 리스크와 리턴이 있고 조합에 따른 시너지의 가능성이 풍부한 스킬들을 디자인할 수 있었습니다.

    ## 그래픽 및 환경 디자인
    21개의 각 던전들은 고유의 테마를 가지며 가시, 화염 등의 환경 위험 요소들, 까마귀나 항아리 같은 상호 작용 요소들이 등장합니다. 각 던전에 등장하는 몬스터들도 고유의 스킬과 AI를 가지고 있습니다. Blender와 Probuilder를 사용하여 3D 모델들, 애니메이션을 제작함과 더불어 유니티 에셋 스토어의 에셋들을 활용해 던전과 몬스터들을 제작하였고, 후처리 효과와 Aura 2를 이용해 Volumetric Lighting을 구현하였습니다.



    `
	},
	{
		title: 'Goat5',
		featured: true,
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '자신과 사물의 질량을 조작하여 풀어나가는 1인칭 퍼즐 게임.',
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
		],
		content: `
    # GoatGoatGoatGoatGoat
    질량을 조작하여 풀어나가는 1인칭 퍼즐 게임
    경희대학교 2018 SW페스티벌 대상 수상작

    ## 규칙 및 조작법
    - 플레이어는 사람처럼 두발로 걷는 염소이다.
    - 염소는 WASD키로 움직이고, 스페이스로 점프할 수 있다.
    - E키로 물체를 들 수 있지만, 자신보다 무거운 물체는 들 수 없다.
    - 염소는 초식 동물이기 때문에 초록색인 물체들을 마우스 왼쪽 클릭으로 먹거나 오른쪽 클릭으로 뱉을 수 있다.
    - 먹거나 뱉는 과정을 통해 자신과 물체의 질량을 주고 받을 수 있다.
    - 염소가 노란 보석을 얻으면 게임에서 승리한다.
    - 염소는 알칼리 금속으로 이루어져 물에 닿으면 폭발하므로, 물에 닿지 않도록 조심해야한다.

    
    염소는 먹거나 뱉어서 무거워질 수도 있고, 가벼워 질수도 있다.
    또 동시에 커질 수도 있고, 작아질 수도 있다. 이는 초록색인 모든 물체들도 마찬가지이다.
    이 점을 잘 활용하여 퍼즐을 풀어보자.

    ## 개발 포인트
    - 실시간으로 가변하는 플레이어 무게(크기)에 따라 점프 높이, 이동 속도, 들 수 있는 최대 무게가 변하는 1인칭 컨트롤러
    - 물체를 드는 행위, 버튼을 누르는 행위, 언제 먹고 뱉을 수 있는 지 등을 UI와 버튼 이벤트에 따른 피드백으로 유저에게 전달
    - 퍼즐적 요소, 레벨 디자인

    ## Attribution
    BGM: Snow Temple by Juno

    `
	},
	{
		title: 'Copycat',
		type: '게임, 2022',
		icon: 'carbon:game-console',
		subtitle: '마법대학이 걸어서 직접 유능한 인재를 찾아 나서는 이야기.',
		stacks: ['unity', 'cs'],
		role: 'MadGecko 팀, 개발 보조',
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
		title: '하울의 움직이는 대학',
		type: '게임, 2019',
		icon: 'carbon:game-console',
		subtitle: '마법대학이 걸어서 직접 유능한 인재를 찾아 나서는 이야기.',
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
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '총의 반동, 시간 조작을 이용한 캐주얼+하드코어 무한 러너-슈터 게임.',
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
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '실시간 멀티플레이 PvP 3인칭 슈터 카드 배틀 게임.',
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
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '정문부터 교수님의 연구실까지 날아가는 레포트의 모험.',
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
