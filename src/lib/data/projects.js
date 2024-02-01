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

import copycat_t from '$lib/assets/projects/copycat/thumbnail.jpg';
import copycat_c from '$lib/assets/projects/copycat/card.jpg';
import copycat_1 from '$lib/assets/projects/copycat/pic1.jpg';
import copycat_2 from '$lib/assets/projects/copycat/pic2.jpg';
import copycat_3 from '$lib/assets/projects/copycat/pic3.jpg';

import immoral_0 from '$lib/assets/projects/immoral/immoral0.jpg';
import immoral_1 from '$lib/assets/projects/immoral/immoral1.jpg';
import immoral_2 from '$lib/assets/projects/immoral/immoral2.jpg';

import tinads_cover from '$lib/assets/projects/tinads/tinads_cover.jpg';
import tinads_0 from '$lib/assets/projects/tinads/tinads0.jpg';
import tinads_1 from '$lib/assets/projects/tinads/tinads1.jpg';

import shapeofdream_t from '$lib/assets/projects/shapeofdream/thumbnail.jpg';
import shapeofdream_c from '$lib/assets/projects/shapeofdream/card.jpg';
import shapeofdream_0 from '$lib/assets/projects/shapeofdream/pic1.jpg';
import shapeofdream_1 from '$lib/assets/projects/shapeofdream/pic2.jpg';

export default [
	{
		id: 'shapeofdream',
		title: 'Shape of Dream',
		tags: ['Unity', '로그라이크', '멀티플레이어'],
		featured: true,
		type: '게임, 2023',
		icon: 'bi:steam',
		subtitle: `꿈 속을 탐험하는 4인 협동 액션 로그라이크 게임, 개발 진행 중`,
		stacks: ['unity', 'cs'],
		links: [
			{
				type: '스토브 인디',
				data: 'https://store.onstove.com/ko/games/2258'
			},
			{
				type: 'itch.io',
				data: 'https://lizardsmoothie.itch.io/shape-of-dream'
			},
			{ type: '게임플레이 트레일러', data: 'https://youtu.be/6C5kXoEIIk0' },
			{ type: '소개 영상', data: 'https://youtu.be/qSfOXJShZCc' }
		],
		thumb: shapeofdream_c,
		awards: ['2023 글로벌 인디 게임제작 경진대회 대학부 제작부문 금상'],
		medias: [
			{ type: 'youtube', data: '6C5kXoEIIk0' },
			{ type: 'youtube', data: 'qSfOXJShZCc' },
			{ type: 'image', data: shapeofdream_0 },
			{ type: 'image', data: shapeofdream_1 }
		],
		content: `
    # Shape of Dream
		스킬과 강화 보석의 조합으로 성장하며 꿈 속을 탐험하는 4인 협동 액션 로그라이크 게임, 2023년 겨울 얼리액세스 공개 예정

		Shape of Dream은 자신만의 영웅을 만들어나가는 멀티플레이 쿼터뷰 로그라이크입니다.

		## 여울 속으로의 모험
		플레이어는 꿈과 현실의 경계가 희미해져 꿈의 힘이 흘러나오기 시작한 세계에서 괴물들이 즐비한 중간계 “여울”로 들어가 모험하게 됩니다. 1인 ~ 4인이 온라인으로 플레이할 수 있으며, 여울 속에서 플레이어는 스킬을 습득하여 자신의 사용 기술을 변경할 수 있고, 스킬에 정수를 장착하여 해당 스킬을 강화할 수 있습니다. 30+개의 스킬들과 40+개의 정수들을 조합하여 무궁무진한 가짓수의 빌드를 만들 수 있습니다. 스킬과 정수, 정수와 정수의 상호작용과 연쇄 반응을 이용해 자신만의 빌드를 완성해보세요.
		
		## 도전과 스토리
		또한 게임 내에서 도전 과제를 달성하면 습득할 수 있는 새로운 스킬, 정수나 플레이 가능한 영웅이 해금됩니다. 이렇게 해금한 항목들은 다음 게임부터 여울에 등장하며 새로운 빌드와 시너지를 연구할 수 있는 여지를 제공합니다. 또한 수집품에서 자신이 해금한 항목들을 확인할 수 있는데, 일부 스킬과 정수에 관련된 기억의 흔적이 쓰여 있습니다. 이들을 통해 Shape of Dream의 세계관과 캐릭터들의 스토리를 파헤쳐보세요.
    `,
		colors: ['#45b1fb', '#1ad0d6']
	},
	{
		id: 'tinads',
		title: 'This Is Not A Drum Set',
		tags: ['Unity', 'VR', 'MIDI', '드럼'],
		featured: true,
		type: 'VR 컨텐츠, 2022-2',
		icon: 'fa6-solid:vr-cardboard',
		subtitle: `홈레코딩 뮤지션들을 위한 실용적인 VR 드럼 어플리케이션`,
		stacks: ['unity', 'cs'],
		role: '개발 총괄 (TINADS조 - 심은섭, 주민하)',
		links: [
			{ type: 'Github', data: 'https://github.com/lumeriith/TINADS' },
			{ type: 'Youtube', data: 'https://youtu.be/2kYBURTw8f4' }
		],
		awards: ['2022 실감미디어 경진대회 최우수상'],
		thumb: tinads_cover,
		medias: [
			{ type: 'youtube', data: '2kYBURTw8f4' },
			{ type: 'image', data: tinads_0 },
			{ type: 'image', data: tinads_1 }
		],
		content: `
    # This Is Not A Drum Set
		## 홈레코딩 뮤지션들을 위한 가상현실 드럼 어플리케이션
		드럼의 경우 가격대가 아주 비싸고 공간적인 문제로 집에 소장하기도 어려우며 소음 때문에 일반 주택/아파트에서 사용하기가 어렵다는 문제가 있다. TINADS는 드럼셋을 VR 가상 환경에 구현하여 연주 및 녹음이 가능한 실용적인 어플리케이션으로, 일반적인 드럼 세트의 경제적인 문제와 공간적인 문제를 동시에 해결할 수 있도록 기획되었다.

		## 주요 기획
		### 사용자 의도 파악
		사용자가 어떤 악기를 어떻게 연주하려고 하는가?
		- Unity XR SDK를 이용하여 드럼 메타포와 인터랙션 구현
		- 컨트롤러 속도 => 필터링하여 실제 속도 추정 => 악기 연주 세기 반영
		- 타격 위치 => Snare/Side Stick, Ride Bell/Cymbal 등 위치 따른 다른 샘플 연주
		### 녹음한 샘플 내보내기
		- 외부 작곡 SW에서 편집이 가능하도록 General MIDI 포맷으로 녹음/내보내기 기능 구현
		### 사용자화 & 보정
		- 사용자의 편의에 맞게 드럼 세트의 위치 조절
		- 메트로놈 + 자동 박자 측정 기능
		- 연주 딜레이 보정 기능
    `,
		colors: ['#ffd73a', '#c6a771']
	},
	{
		id: 'immoralfencing',
		title: 'Immoral Fencing',
		tags: ['Unity', '애니메이션', 'AI', '소켓통신'],
		featured: true,
		type: '게임, 캡스톤프로젝트, 2022-2',
		icon: 'charm:graduate-cap',
		subtitle: `ML, FSM을 이용한 자연스러운 캐릭터 애니메이션 구현`,
		stacks: ['unity', 'cs'],
		role: '기획/개발 총괄, 프론트 개발 (점심나가서먹을거같은조 - 박승준, 심은섭, 강수한)',
		links: [
			{ type: 'Github', data: 'https://github.com/lumeriith/ImmoralFencing' },
			{ type: 'Youtube', data: 'https://youtu.be/jGwU6ciRnxM' }
		],
		thumb: immoral_1,
		medias: [
			{ type: 'youtube', data: 'jGwU6ciRnxM' },
			{ type: 'image', data: immoral_0 },
			{ type: 'image', data: immoral_1 }
		],
		content: `
    # Immoral Fencing
		## Development of fighting game using agile and interactive character animation
		심판에게 걸리지 않는 한 부정행위가 허용되는 펜싱 게임

		2022-2 게임콘텐츠캡스톤디자인 프로젝트 [최종발표 ppt 다운로드](https://github.com/lumeriith/ImmoralFencing/raw/main/Immoral%20Fencing%20-%20%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C.pptx)
    ## 사용 기술
    ### FSM & 2D Cartesian Motion Blended Locomotion
    자연스러운 캐릭터 애니메이션 구현을 위한 전통적인 유한 상태 머신 애니메이션 및 8개의 이동 모션을 2D 파라메터에 따른 블렌딩
    ### Rule-based Organic Enemy AI using Gradient-Noise
		OpenSimplex 노이즈를 이용한 변칙적인 Rule-based AI 개발
		### Realtime Motion Generation using Teacher-Student Framework
		Teacher-Student Framework Analogy를 이용해 강화학습 모델을 RNN으로 경량화하여 실시간 애니메이션 생성 (Pruning을 통한 Constraint Optimization)
		### Game-Model Integration using Socket Communication & Animation Retargeting
		Message Framing,  백엔드 모델과 유니티를 소켓 통신을 이용해 연결 및 애니메이션 리타게팅
		### Pseudo Soft-Body Fencing Sword using Joint & Rigged Model
		펜싱 칼 모델을 리깅하고 칼에 관절을 부여하여 구부러지는 칼날 구현  
    `,
		colors: ['#5c8fd8', '#63ceec']
	},
	{
		id: 'runtimebakedphysics',
		title: 'RuntimeBakedPhysics',
		tags: ['UE5', 'PhysX', '테스트자동화'],
		featured: true,
		type: '연구, 2022-1',
		icon: 'bxs:book-open',
		subtitle: `복잡한 물리 장면의 성능 향상을 위한 방법 탐구`,
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
		펄어비스x경희대 소프트웨어융합학과 인재양성 프로그램 2차
    ## 프로젝트 동기
    - 게임 속 물리 연산은 비용이 크다.
    - 물리 연산을 한정적으로 사용하거나 Baked Physics Animation 등을 이용한다.
    - Animation을 실시간 물리 연산을 대신하여 사용하는 것은 제한 사항이 많다.
    - 이러한 제한 사항을 극복하고 물리 장면의 부담을 줄여 복잡하고 화려한 연출의 Artistic Freedom을 주고자 하였다.
    ## 사용 기술
    ### Runtime Physics Baking
    게임 진행 중에 복잡한 물리 장면을 미리 연산하여 저장/재생하여 폭발 장면에서의 성능을 향상합니다.
    - Unreal Engine 5에 PhysX 3.4 연동
		- Collision Aggregate/Mesh Generation
		- Physics Event System, Scene Controller
    ### Simulate on Demand
    재생 중인 물체들 중 플레이어 등의 동적 물체들과 충돌할 가능성이 있는 것들을 선택적으로 실시간 시뮬레이션으로 대치하여 부자연스럽지 않게 처리합니다.
    - Spatial Hashing
		- AABB Collision Check
    ### Physics LoD
    멀리 있어 눈에 잘 띄지 않는 장면들에 대해 Physics Scene을 분리하고 정확도와 프레임레이트를 낮추고 계산하여 성능을 향상합니다.
		### Automated Tests & Metrics
    테스트를 자동으로 수행하고 평균 프레임, 소요시간 등의 성능 지표를 수집하는 도구를 구현하여 개발과 테스트에 소요되는 시간을 단축하였습니다.

    `,
		colors: ['#ff8d0e', '#ff9255']
	},
	{
		id: 'trappedinmetaverse',
		title: 'Trapped In Metaverse',
		tags: ['Unity', 'SvelteKit', 'Firebase', '메타버스', '해커톤'],
		type: '게임, 2022-1',
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
    '대학생의 메타버스' 주제 경희대학교 2022 KHUTHON 최우수상 수상작

    ## 스토리
    비대면 실시간 강의를 들으며 게임을 하다 졸아, 메타버스 세계에 갇혀버린 한 대학생,
    
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
    `,
		colors: ['#00a4f2', '#30ff11']
	},
	{
		id: 'dew',
		title: 'Dew',
		featured: true,
		tags: ['Unity', '멀티플레이어', 'Photon', 'SW페스티벌'],
		type: '게임, 2019',
		icon: 'carbon:game-console',
		subtitle: '서로가 최종 보스가 되어 싸우는 멀티플레이 2인용 던전 크롤러',
		stacks: ['unity', 'cs', 'pun2'],
		role: 'Lizard_0209 팀, 개발 총괄, 시스템 개발',
		awards: ['경희대학교 2019 SW페스티벌 대상', '경희대학교 2019 소융과 학부생 대회 최우수상'],
		links: [
			{
				type: 'Github',
				data: 'https://github.com/lumeriith/RakShir/tree/b6373b92e3080d028f1c2a09d1123bb8c8ad2e8f'
			},
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
    경희대학교 2019 소융과 학부생 대회 최우수상, 경희대학교 2019 SW페스티벌 대상 수상작

    PvE & PvP MOBA 온라인 던전 크롤러 게임
    ## PvE와 PvP의 결합
    Dew는 온라인 멀티 플레이어 게임으로 두 명의 플레이어가 각 진영에서 게임을 시작합니다. 초반부는 던전 크롤링 PvE를 통해 장비, 아이템, 돈, 능력치 등을 획득하며 성장하고, 후반에는 서로를 최종 보스로 만나 결투하게 됩니다.

    Dew는 Photon Networking을 통한 온라인 멀티 플레이가 구현되어 있습니다. Photon의 MasterClient-Client 구조의 장점을 살려 스킬, 몬스터 AI, 물리 처리 등을 알맞게 분배하고 동기화하였습니다. 예를 들어 스킬을 사용하면 해당 스킬의 인스턴스에 대한 초기화 정보들이 Serialize되어 전송되고, 이후 각 인스턴스들은 이 정보에 따라 동작하며 스킬을 사용한 플레이어가 주요 처리를 맡습니다. 처리 도중에 동기화의 필요가 생기는 경우 Remote Procedure들을 적절히 이용하여 모든 플레이어들이 같은 결과를 관측할 수 있도록 하였습니다.

    ## Hero Building Mechanics
    보통 MOBA 장르의 게임들은 챔피언이 고유한 스킬들을 가지고 있지만, Dew에서는 스킬들이 아이템에 귀속되어 있습니다. 무기(기본 공격, Q, R), 갑옷(W), 신발(E), 반지(Space), 투구(지속 효과)들이 각각의 스킬을 가지고 있어 장비의 조합에 따라 다양한 연계 플레이가 가능합니다. 또한 살아있는 개체, 스킬 인스턴스, 스킬 방아쇠 등을 OOP로 직관적으로 추상화하여 디자인하고, 마법 API, 상태 효과 API 등을 개발하여 마법 피해, 기절, 침묵, 지속 피해, 돌진, 넉백 등의 다양한 메커닉들을 구현할 수 있었습니다. 다양한 메커닉이 가능한 베이스 코드 덕에 리스크와 리턴이 있고 조합에 따른 시너지의 가능성이 풍부한 스킬들을 디자인할 수 있었습니다.

    ## 그래픽 및 환경 디자인
    21개의 각 던전들은 고유의 테마를 가지며 가시, 화염 등의 환경 위험 요소들, 까마귀나 항아리 같은 상호 작용 요소들이 등장합니다. 각 던전에 등장하는 몬스터들도 고유의 스킬과 AI를 가지고 있습니다. Blender와 Probuilder를 사용하여 3D 모델들, 애니메이션을 제작함과 더불어 유니티 에셋 스토어의 에셋들을 활용해 던전과 몬스터들을 제작하였고, 후처리 효과와 Aura 2를 이용해 Volumetric Lighting을 구현하였습니다.



    `,
		colors: ['#89d8ff', '#70bfff']
	},
	{
		id: 'copycat',
		title: 'Copycat',
		tags: ['Unity', '스토리', 'GIGDC', '2022'],
		featured: false,
		type: '게임, 2022',
		icon: 'carbon:game-console',
		subtitle: 'GIGDC 2022 참여작 - 게임 속 게임들에서 자유를 찾아 떠나는 한 핑퐁 공',
		stacks: ['unity', 'cs'],
		role: 'MadGecko 팀, 개발 보조',
		links: [{ type: 'Youtube', data: 'https://www.youtube.com/watch?v=zJp9j2eZZD4' }],
		thumb: copycat_t,
		medias: [
			{
				type: 'youtube',
				data: 'zJp9j2eZZD4'
			},
			{ type: 'image', data: copycat_1 },
			{ type: 'image', data: copycat_2 },
			{ type: 'image', data: copycat_3 }
		],
		content: `
    # CopyCat: CubeCube
    게임 속 게임으로 아케이드, 액션, 퍼즐 등의 장르를 통해 서사를 전달합니다. 플레이어는 매 스테이지 마다 완전히 바뀌는 게임 규칙과 세계에 적응하고 도전하여 스테이지를 넘어가는 것이 목표입니다. 
    ## 스테이지마다 바뀌는 게임
    캐주얼한 게임을 하다가도 고민과 순발력이 필요한 퍼즐 게임이 나오는가 하면, 공을 튀기다가 칼을 들고 적들을 처치하는 액션 장르로 게임이 변화합니다. 총 4개의 게임으로 새로운 느낌을 받으며 이어지는 스토리를 즐길 수 있습니다.
    
    ## 캐쥬얼하고 때로는 코미컬하지만 많은 생각을 하게 만드는 게임
    CopyCat: CubeCube는 앞서 말했듯이 매 스테이지마다 다른 게임이 되어 즐길 수 있게 해줍니다. 그리고 각각의 게임들은 CopyCat만의 캐쥬얼함과 코믹함으로 새롭게 표현하여 플레이어가 쉽게 플레이할 수 있게 해줍니다. 그러나 이러한 캐쥬얼함 속에서도 진지한 주제의식을 담았습니다.
    
    현재 많은 학생들은 어린 시절 부터 안정적인 삶을 위해 다른 사람들처럼만 살라고 종용하는 학교, 가정, 사회의 영향으로 자신의 꿈에 대한 탐색이 결여된 채 성장합니다. 도전적인 삶과 자신만의 길을 가려는 사람에 눈치를 주고 불안감을 조성하는 분위기는 눈에 띄지는 않지만 확실하게 우리 주변에 존재합니다. 이러한 주제의식을 게임속에서 자유를 갈망하는 핑퐁 공의 서사를 통해 전달합니다.
    
    ## 모방은 창조의 어머니
    이 게임의 스토리는 의도적으로 모방된 게임 세계를 통해 모방에 대한 새로운 관점을 제시합니다. 게임 내에서 등장하는 핑퐁 공은 남들과 다르기를 원하며 나만의 길을 찾으려 합니다. 하지만 핑퐁 공이 거쳐가는 세계들은 모두 다른 게임의 모방이었습니다. 이는 핑퐁 공이 은연 중에 자신이 자신 만의 길을 걷는 행위조차도 다른 누군가의 발자취를 걷는 것이었다는 사실을 깨닫게 됩니다. 앞서 말한 사회적 분위기에 의해 너도 나도 남들과 다를 것이 없는 서로가 서로의 CopyCat이 되버린 상황에서 과연 모방은 나쁘기만 한 것인가? 에 대한 답으로 아리스토텔레스의 모방과 예술에 대한 견해를 들어 내보이고 싶었습니다.
    
    이 게임은 모방된 게임 세상들에서 게임을 진행하는 새로운 방식을 통해, 다른 사람을 따라 하는 것이 무작정 나쁜 것만은 아니라는 얘기를 전달하고 있습니다. 즉, 자신의 길을 포기하지 않으면서도 남들처럼 살아가도 스스로 발전할 수 있다는 것입니다. 이를 깨달은 핑퐁 공은 엔딩 씬에서 아랑곳하지 않고 자신만의 길을 걸으며 새로운 창조를 상징하는 “밝은 빛”을 향해 나아갑니다.
    
    `,
		colors: ['#ffcd1f', '#8f7b33']
	},
	{
		id: 'magicalkhu',
		title: '하울의 움직이는 대학',
		tags: ['Unity', '해커톤', '모험'],
		type: '게임, 2019',
		icon: 'carbon:game-console',
		subtitle: '마법대학이 걸어서 직접 유능한 인재를 찾아 나서는 이야기',
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
		],
		content: `
    # 하울의 움직이는 대학
    '대학교와 여행' 주제 경희대학교 2019 KHUTHON 대상 수상작
    ## 스토리
    마법대한민국의 한 대학, 마법경희대학교. 마법경희대의 신입생 모집 기간이 다가왔다.

    마법경희대학교의 이름을 빛낼 인재들을 찾기 위해, 배우기 좋고 가르치기 좋은 학교로 거듭나기 위해,
    
    마법경희대학교는 긴 여행을 시작한다...

    ## 게임 방식
    - 마법경희대학교는 길을 따라 앞으로 전진합니다.
    - 좋은 인재들은 흰색, 나쁜 인재들은 검은색입니다.
    - 좋은 인재들을 마우스로 끌어 대학교에 놓고, 나쁜 인재들은 밖으로 던져버려야 합니다.
    - 충분한 인재 포인트를 모으면 단과대를 지을 수 있습니다.
    - 각 단과대별로 경희대학교에게 스킬이나 특수 효과를 부여합니다.
    예) 예술대학은 모나리자 그림을 날리는 스킬을 부여하고, 체육대학은 주기적으로 야구공을 발사합니다.
    `,
		colors: ['#2dd151', '#ffd980']
	},
	{
		id: 'goat5',
		title: 'Goat5',
		tags: ['Unity', '퍼즐', 'SW페스티벌'],
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '자신과 사물의 질량을 조작하여 풀어나가는 1인칭 퍼즐 게임',
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
    경희대학교 2018 SW페스티벌 대상 수상작

    질량을 조작하여 풀어나가는 1인칭 퍼즐 게임

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

    ## 개발 부분
    - 실시간으로 가변하는 플레이어 무게(크기)에 따라 점프 높이, 이동 속도, 들 수 있는 최대 무게가 변하는 1인칭 컨트롤러
    - 물체를 드는 행위, 버튼을 누르는 행위, 언제 먹고 뱉을 수 있는 지 등을 UI와 버튼 이벤트에 따른 피드백으로 유저에게 전달
    - 퍼즐적 요소, 레벨 디자인

    ## Attribution
    배경 음악: Snow Temple by Juno

    `,
		colors: ['#9efa9f', '#5f8dcd']
	},
	{
		id: 'thrownreport',
		title: '나는 레포트를 날렸다',
		tags: ['Unity', '해커톤'],
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '정문부터 교수님의 연구실까지 날아가는 레포트의 모험',
		stacks: ['unity', 'cs'],
		role: '소시 팀, 개발/기획 총괄',
		awards: ['경희대학교 2018 쿠러그 해커톤 KHUTHON 최우수상'],
		links: [
			{ type: 'Release', data: 'https://github.com/lumeriith/Thrown-my-report-by-me/releases' }
		],
		thumb: report_t,
		medias: [{ type: 'image', data: report_c }],
		content: `
    # 나는 레포트를 날렸다
    '경희대학교와 주변 상권' 주제 경희대학교 2018 KHUTHON 최우수상 수상작

    '소시' 팀 (심은섭, 강보석, 백윤휘, 임수빈, 정보광)

    정문부터 교수님의 연구실까지 날아가는 레포트의 모험.
    
    ## 설명
    과제를 제출해야할 수업에 늦었는데 레포트까지 떨어트려버렸다!

    이렇게 된 이상 레포트가 직접 교수님의 연구실에 가서 스스로를 제출하도록 돕자.
    
    ## 조작법
    - 레포트는 공중을 날아다니며 교수님의 연구실로 향한다.
    - 마우스를 왼쪽 클릭하여 클릭한 방향으로 레포트를 밀 수 있다. 단 한번 밀때마다 오른쪽 위의 '바람'을 소모한다.
    
    - 날아다니면서 파란색 '바람'을 모으고, 고양이와 비둘기 등의 위험한 적들을 피해야한다.
    
    - 레포트는 10장부터 시작, 공격당할 때마다 한장 씩 찢어진다.
    - 레포트가 적으면 적을 수록 학점이 나빠지고 장학금도 적게 받게 되니 무사히 교수님의 연구실에 도착해보자.
    
    - 인트로는 스페이스로 스킵할 수 있다.
    
    `,
		colors: ['#d2f5ff', '#528aff']
	},
	{
		id: 'cube5',
		title: 'Cube5',
		tags: ['Unity', '하이퍼캐주얼', 'SW페스티벌'],
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '총의 반동, 시간 조작을 이용한 캐주얼+하드코어 무한 러너-슈터 게임',
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
		],
		content: `
    # CubeCubeCubeCubeCube (Cube5)
    경희대 소프트웨어융합학과 X retr0 해커톤 금상작. 끝없이 달리는 러너 + 슈터 장르를 결합한 게임으로, 총의 반동과 시간 정지 능력을 이용해 최대한 오래 살아남아보자.

    ## 조작
    - Space를 눌러 점프할 수 있다. 오래 누르면 더 높고 멀게 점프할 수 있다.
    - 왼쪽 마우스 버튼으로 총을 발사할 수 있다. 떠다니는 적을 쏴 없애거나 빨간 버튼, 벽 등을 쏴 맵과 상호작용할 수 있다.
    - 총의 초탄은 큰 반동과 높은 피해량을 가진다. 땅에 착지하면 빠른 속도로 탄약이 충전된다.
    - 점프 후 초탄의 반동을 이용해 멀고 높게 점프할 수 있다. 
    - 오른쪽 마우스 버튼을 꾹 누르면 시간을 느려지게 할 수 있어 빠른 반응이 필요한 상황을 헤쳐나갈 수 있다.
    - 바다로 떨어지거나 뒤쳐지면 사망할 수 있으니 조심해야한다.
    - 난이도는 시간에 따라 5단계까지 점점 상승한다.

    ## Attribution
    BGM: [Starbox - Digital Dream (Azureflux Remix) from Bit Bops by Azureflux](https://azuresound.bandcamp.com/track/digital-dream-azureflux-remix)
    `,
		colors: ['#fe5ac7', '#e3518a']
	},
	{
		id: 'cardkin',
		title: 'Cardkin',
		tags: ['Unity', '멀티플레이어', 'UNET', 'SW페스티벌'],
		type: '게임, 2018',
		icon: 'carbon:game-console',
		subtitle: '실시간 멀티플레이 PvP 3인칭 슈터 카드 배틀 게임',
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
		],
		content: `
    # Cardkin
    경희대학교 2018 SW페스티벌 주니어상 수상작, KHUvelopers의 Indian팀(심은섭, 하창범, 안해영) 제작
    
    리얼타임 TPS와 카드 배틀, 퍼즐의 결합, 실시간 멀티플레이 PvP

    ## 게임 기획
    - 덱에서 카드를 항상 일정 수만큼 뽑아 핸드에 쥐고 있습니다.
    - 대부분의 카드들은 봉인된 채로 핸드에 쥐어지는데, 카드마다 고유한 퍼즐을 풀어 봉인을 해제하고, 그 카드에 담긴 마법을 이용해 상대의 HP를 0으로 만들면 승리합니다.
    - 카드들이 봉인 해제 될 때에 기본 공격이 충전되어 상대를 공격할 수 있습니다.
    ## 사용 기술
		- Unity, UNET (Server Authoritative Architecture)
		`,
		colors: ['#97d55e', '#fefe00']
	}
];
