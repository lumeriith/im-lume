<script>
	import ActivityCard from '../Cards/ActivityCard.svelte';
	import Container from '../Container.svelte';
	import PartHeading from '../PartHeading.svelte';

	const activities = [
		{
			title: 'Goat5',
			subtitle: 'GoatGoatGoatGoatGoat',
			content: '자신과 사물의 질량을 조작하여 풀어나가는 1인칭 퍼즐 게임.',
			stacks: ['unity', 'cs'],
			imgName: 'goat',
			role: '개인 개발',
			awards: ['경희대학교 2018 SW페스티벌 대상']
		},
		{
			title: 'Cube5',
			subtitle: 'CubeCubeCubeCubeCube',
			content: '총의 반동, 시간 조작을 이용한 캐주얼+하드코어 무한 러너-슈터 게임.',
			stacks: ['unity', 'cs'],
			imgName: 'cube',
			role: '개인 개발',
			awards: ['경희대 소프트웨어융합학과 X retr0 해커톤 금상']
		},
		{
			title: '나는 레포트를 날렸다',
			content: '정문부터 교수님의 연구실까지 날아가는 레포트의 모험.',
			stacks: ['unity', 'cs'],
			imgName: 'report',
			role: '소시 팀, 개발/기획 총괄',
			awards: ['경희대학교 2018 Khuthon 최우수상']
		},
		{
			title: 'Cardkin',
			content: '실시간 멀티플레이 PvP 3인칭 슈터 카드 배틀 게임.',
			stacks: ['unity', 'cs', 'unet'],
			imgName: 'cardkin',
			role: 'Indian 팀, 개발/기획 총괄',
			awards: ['경희대학교 2018 SW페스티벌 주니어상']
		},
		{
			title: '파이썬과 친해지기',
			content: '청청당당 화성시 리더 연합 진행 초등학생~고등학생 대상 파이썬 코딩교육 수업.',
			stacks: ['python'],
			role: '수업 자료제작/진행',
			imgName: 'python'
		},
		{
			title: '하울의 움직이는 대학',
			content: '마법대학이 걸어서 직접 유능한 인재를 찾아 나서는 이야기.',
			stacks: ['unity', 'cs'],
			role: 'Lizard_0209 팀, 개발 총괄',
			imgName: 'magical',
			awards: ['경희대학교 2019 IT 동아리 쿠러그 KHUTHON 대상']
		},
		{
			title: 'Dew',
			content: '로그라이크와 MOBA 장르를 융합한 멀티플레이 게임',
			stacks: ['unity', 'cs', 'pun2'],
			role: 'Lizard_0209 팀, 개발 총괄',
			imgName: 'dew',
			awards: ['경희대학교 2019 소융과 학부생 대회 최우수상', '경희대학교 2019 SW페스티벌 대상']
		}
	];
</script>

<Container>
	<PartHeading title="Activities" subtitle="수상경력, 대외활동 등 여러 활동" />
	<div class="flex gap-9 flex-wrap justify-center">
		{#each activities as { title, subtitle, content, stacks, imgName, awards, role }, i (i)}
			<ActivityCard {title} {subtitle} {content} {stacks} {imgName} {awards} {role} />
		{/each}
	</div>
</Container>
