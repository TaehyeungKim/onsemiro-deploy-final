import date from "../assets/interest/date.png";
import stock from "../assets/interest/stock.png";
import design from "../assets/interest/design.png";
import marketing from "../assets/interest/marketing.png";
import fragrance from "../assets/interest/fragrance.png";
import shopping from "../assets/interest/shopping.png";
import fashion from "../assets/interest/fashion.png";
import sport from "../assets/interest/sport.png";
import fishing from "../assets/interest/fishing.png";
import camping from "../assets/interest/camping.png";
import mountain from "../assets/interest/mountain.png";
import drink from "../assets/interest/drink.png";
import cooking from "../assets/interest/cooking.png";
import restaurant from "../assets/interest/restaurant.png";
import cafe from "../assets/interest/cafe.png";
import game from "../assets/interest/game.png";
import book from "../assets/interest/book.png";
import performance from "../assets/interest/performance.png";
import movie from "../assets/interest/movie.png";
import netflix from "../assets/interest/netflix.png";
import pet from "../assets/interest/pet.png";
import music from "../assets/interest/music.png";
import sing from "../assets/interest/sing.png";
import tv from "../assets/interest/TV.png";
import scooter from "../assets/interest/scooter.png";
import walking from "../assets/interest/walking.png";
import draw from "../assets/interest/draw.png";
import bass from "../assets/interest/bass.png";
import volunteer from "../assets/interest/volunteer.png";
import trip from "../assets/interest/trip.png";
import interior from "../assets/interest/interior.png";
import health from "../assets/interest/health.png";
import exhibition from "../assets/interest/exhibition.png";
import computer from "../assets/interest/computer.png";
import money from "../assets/interest/money.png";
import dance from "../assets/interest/dance.png";
import drive from "../assets/interest/drive.png";
import photo from "../assets/interest/photo.png";
import tatoo from "../assets/interest/tatoo.png";
import pilates from "../assets/interest/tatoo.png";
import foreign from "../assets/interest/foreign.png";

import age from "../assets/conditions/age.png";
import appearance from "../assets/conditions/appearance.png";
import character from "../assets/conditions/character.png";
import eyelid from "../assets/conditions/eyelid.png";
import frequency from "../assets/conditions/frequency.png";
import height from "../assets/conditions/height.png";
import location from "../assets/conditions/location.png";
import mbti from "../assets/conditions/mbti.png";
import sexual from "../assets/conditions/sexual.png";
import shape from "../assets/conditions/shape.png";

export const interestValueSet = [
  {
    icon: date,
    value: "데이트",
  },
  {
    icon: stock,
    value: "주식",
  },
  {
    icon: design,
    value: "디자인",
  },
  {
    icon: marketing,
    value: "마케팅",
  },
  {
    icon: fragrance,
    value: "향수",
  },
  {
    icon: shopping,
    value: "쇼핑",
  },
  { icon: fashion, value: "패션" },
  { icon: sport, value: "스포츠 관람" },
  { icon: fishing, value: "낚시" },
  { icon: camping, value: "캠핑" },
  { icon: mountain, value: "등산" },
  { icon: drink, value: "음주" },
  { icon: cooking, value: "요리" },
  { icon: restaurant, value: "맛집탐방" },
  { icon: cafe, value: "카페 가기" },
  { icon: game, value: "게임" },
  { icon: book, value: "독서" },
  { icon: performance, value: "공연 관람" },
  { icon: movie, value: "영화 감상" },
  { icon: netflix, value: "넷플릭스" },
  { icon: pet, value: "반려동물" },
  { icon: music, value: "음악 감상" },
  { icon: sing, value: "노래 부르기" },
  { icon: tv, value: "티비 시청" },
  { icon: scooter, value: "스쿠터" },
  { icon: walking, value: "산책" },
  { icon: draw, value: "그림 그리기" },
  { icon: bass, value: "악기 연주" },
  { icon: volunteer, value: "봉사활동" },
  { icon: trip, value: "여행" },
  { icon: interior, value: "인테리어" },
  { icon: health, value: "헬스" },
  { icon: exhibition, value: "전시회 관람" },
  { icon: computer, value: "컴퓨터" },
  { icon: money, value: "재테크" },
  { icon: dance, value: "댄스" },
  { icon: drive, value: "드라이브" },
  { icon: photo, value: "사진촬영" },
  { icon: tatoo, value: "문신" },
  { icon: pilates, value: "필라테스" },
  { icon: foreign, value: "외국어" },
];

export const GenderIdentity = [
  {
    main: "남성",
    sub: "Male",
  },
  {
    main: "여성",
    sub: "Female",
  },
  {
    main: "MTF",
    sub: "Transgender",
  },
  {
    main: "TMF",
    sub: "Transgender",
  },
  { main: "에이젠더", sub: "Agender" },
  { main: "논바이너리", sub: "Non-binary" },
];

export const Conditions = [
  {
    condition: "age",
    icon: age,
    label: "나이",
  },
  {
    condition: "sexual",
    icon: sexual,
    label: "성적 성향",
  },
  {
    condition: "height",
    icon: height,
    label: "키",
  },
  {
    condition: "shape",
    icon: shape,
    label: "체형",
  },
  {
    condition: "appearance",
    icon: appearance,
    label: "생김새",
  },
  {
    condition: "eyelid",
    icon: eyelid,
    label: "쌍커풀 유무",
  },
  {
    condition: "mbti",
    icon: mbti,
    label: "MBTI",
  },
  {
    condition: "character",
    icon: character,
    label: "성격",
  },
  {
    condition: "frequency",
    label: "원하는 만남 주기",
    icon: frequency,
  },
  {
    condition: "location",
    label: "거주 지역",
    icon: location,
  },
];

export const sexualTendency = [
  { main: "비성향자" },
  { main: "DOM" },
  { main: "SUB" },
  { main: "SW" },
  { main: "SADI" },
  { main: "MASO" },
];

export const ShapeCollection = [
  { main: "마른" },
  { main: "보통" },
  { main: "통통" },
  { main: "근육" },
];

export const AppearanceCollection = [
  {
    main: "뚜렷",
  },
  {
    main: "두부",
  },
];

export const EyelidCollection = [
  {
    main: "유쌍",
  },
  {
    main: "무쌍",
  },
];

export const characterKeyMap = {
  0: "조용한",
  1: "조금 조용한",
  2: "보통",
  3: "조금 활발한",
  4: "활발한",
};

export const CITYSET = [
  {
    city: "서울특별시",
    sub: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
  },
  {
    city: "인천광역시",
    sub: [
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
      "강화군",
      "옹진군",
    ],
  },
  {
    city: "수원시",
    sub: ["장안구", "권선구", "팔달구", "영통구"],
  },
  {
    city: "성남시",
    sub: ["수정구", "중원구", "분당구"],
  },
  {
    city: "의정부시",
    sub: [],
  },
  {
    city: "안양시",
    sub: ["만안구", "동안구"],
  },
  {
    city: "부천시",
    sub: ["원미구", "소사구", "오정구"],
  },
  {
    city: "광명시",
    sub: [],
  },
  {
    city: "동두천시",
    sub: [],
  },
  {
    city: "평택시",
    sub: [],
  },
  {
    city: "안산시",
    sub: ["상록구", "단원구"],
  },
  {
    city: "고양시",
    sub: ["덕양구", "일산동구", "일산서구"],
  },
  {
    city: "과천시",
    sub: [],
  },
  {
    city: "구리시",
    sub: [],
  },
  {
    city: "남양주시",
    sub: [],
  },
  {
    city: "오산시",
    sub: [],
  },
  {
    city: "시흥시",
    sub: [],
  },
  {
    city: "군포시",
    sub: [],
  },
  {
    city: "의왕시",
    sub: [],
  },
  {
    city: "하남시",
    sub: [],
  },
  {
    city: "용인시",
    sub: ["처인구", "기흥구", "수지구"],
  },
  {
    city: "파주시",
    sub: [],
  },
  {
    city: "이천시",
    sub: [],
  },
  {
    city: "안성시",
    sub: [],
  },
  {
    city: "김포시",
    sub: [],
  },
  {
    city: "화성시",
    sub: [],
  },
  {
    city: "광주시",
    sub: [],
  },
  {
    city: "양주시",
    sub: [],
  },
  {
    city: "포천시",
    sub: [],
  },
  {
    city: "여주시",
    sub: [],
  },
  {
    city: "연천군",
    sub: [],
  },
  {
    city: "가평군",
    sub: [],
  },
  {
    city: "양평군",
    sub: [],
  },
];

export const sexualOrientation = [
  {
    main: "이성애자",
    sub: "Heterosexual",
  },
  {
    main: "대체로 이성애자",
    sub: "Heteroflexible",
  },
  {
    main: "양성애자",
    sub: "Bisexual",
  },
  {
    main: "대체로 동성애자",
    sub: "Homoflexible",
  },
  { main: "동성애자", sub: "Homosexual" },
  { main: "범성애자", sub: "Pansexual" },
  { main: "무성애자", sub: "Asexual" },
  { main: "남성애자", sub: "Androsexual" },
  { main: "여성애자", sub: "Gynesexual" },
  { main: "기타", sub: "Other" },
];

export const heightRange = (thumb) => {
  const point = thumb - 145;
  return parseInt(point / 5) + 1;
};

export const filterValidProfileKey = (info) =>
  Object.keys(info).filter(
    (key) =>
      key !== "introduction" &&
      key !== "approval" &&
      key !== "univ" &&
      key !== "gender" &&
      key !== "age" &&
      key !== "photo" &&
      key !== "id" &&
      key !== "nickname" &&
      key !== "message" &&
      key !== "matching_type" &&
      key !== "matching_id" &&
      key !== "time"
  );

export const keyMapWithKorean = {
  location: "거주 지역",
  height: "키",
  weight: "체형",
  appearance: "생김새",
  eyelid: "쌍꺼풀 유무",
  mbti: "MBTI",
  character: "성격",
  hobby: "관심사",
  meeting_frequency: "만남 주기",
  bdsm: "성적 성향",
  gender_preference: "성적 지향",
};

export const PLAY_DATA = [
  {
    id: 0,
    question: "너의 은밀한 성향에 대해 고민해본 적 있어?",
    answers: [
      "난 여러 성향을 갖고 있어 다양하게 경험해볼수록 좋잖아?",
      "난 검사는 해봤어!",
      "내 성향에 대해 어느 정도 알기는 해.",
      "검사는 안 해봤지만... 궁금하긴 해. 뭔가 있는 것 같긴 하거든.",
      "성향은 딱히 없어! 그냥 궁금하니까 한 번 해보는 거야 ㅋㅋ",
    ],
  },
  {
    id: 1,
    question: "너의 성향을 한 번 떠올려보자! 넌 어떤 성향인 것 같아?",
    answers: [
      "난 상대방을 괴롭히고 싶어!",
      "난 내 마음대로 통제하고 싶어!",
      "난 화끈하게 당하고 싶어!",
      "난 상대방에게 리드당하고 싶어!",
    ],
  },
  {
    id: 2,
    question:
      "애인이 바람피우는 꿈을 꾸다가 너무 열 받아서 깨버렸어. 내 꿈속에서 바람피운 애인의 모습은?",
    answers: [
      "다른 사람과 방 침대에 누워있는 애인",
      "아파트 입구에서 다른 사람과 손잡고 나오는 애인",
      "낯선 사람과 낯 뜨거운 19금 DM을 주고받은 애인",
      "다른 사람에게 마음이 간다고 담담하게 말하는 애인",
    ],
  },
  {
    id: 3,
    question:
      "오늘 밤, 침대에서 상대방을 제압하는 나의 손에는 어떤 물건이 있을까?",
    answers: [
      "한 번 차면 옴짝달싹 못하는 수갑",
      "찰싹 소리가 나는 훌륭한 탄력의 채찍",
      "내 마음대로 다룰 수 있는 목줄",
      "신체 부위 어딘가를 묶기 좋아 보이는 두껍고 긴 로프",
    ],
  },
  {
    id: 4,
    question:
      "비 오는 날, 말없이 나를 찾아온 상대방. 젖은 상대방의 모습 중 나를 가장 흥분시키는 포인트는?",
    answers: [
      "다 젖은 머리로 나를 쳐다보는 청순가련 눈동자",
      "바디 라인이 살짝살짝 보일 정도로 흠뻑 젖은 흰색 티셔츠",
      "갈 곳이 없다는 듯한 애처로운 말투",
      "셔츠 너머로 보이는 추워서 벌벌 떨고 있는 어깨",
    ],
  },
  {
    id: 5,
    question:
      "오늘 밤, 내 명령은 뭐든지 다 들어준대! 어떤 식으로 명령하고 싶어?",
    answers: [
      "묻지도 않고 내 맘대로 다 해버릴 거야.",
      "다정하게 부탁할래!",
      "감정 없이, 간단명료하게.",
    ],
  },
  {
    id: 6,
    question:
      "점점 지쳐가는 체력. 이 때 내 힘을 불끈불끈 솟게 해주는 상대방의 한 마디는?",
    answers: [
      "그 동안 하고 싶었던 거 오늘 다 해",
      "너랑 보내는 밤이 최고야",
      "귀에다가 욕해줘",
    ],
  },
  {
    id: 7,
    question:
      "상대가 자신의 판타지였다는 하드한 플레이를 제안했다. 엄두조차 안 나는 플레이에 대한 내 대답은?",
    answers: [
      "아무리 판타지라고 해도 널 아프게 하면서까지 하고 싶진 않아...",
      "잠깐 공부 좀 하고 올게. 그 후에 해보자!",
      "익숙한 걸 제일 잘하니까 그냥 하던대로 하는 건 어때?",
      "군침이 싹 도네.. 왜 이제야 말했어?",
    ],
  },
  {
    id: 8,
    question:
      "오늘 처음 만난 사람, 네 이상형이야. 첫눈에 반해버렸어... 넌 오늘 밤 어디까지 갈 수 있어?",
    answers: [
      "당연히 끝까지 갈 수 있지.",
      "마음을 확인하는 입맞춤 정도는 괜찮지 않을까?",
      "스킨십은 어림도 없어! 그래도 내 마음을 전하는 고백은 하고 갈 거야.",
      "첫눈에 반하는 게 어딨어. 더 만나보고 정해야지.",
    ],
  },
  {
    id: 9,
    question:
      "호텔에서 새로운 플레이를 제안하는 상대방! 방에 있는 물건 중 뭘 사용해볼까?",
    answers: [
      "묶으면 쉽게 풀리지 않을 것 같은 아이보리색 암막커튼 끈",
      "내 바지에 끼워져 있는 최고급 소가죽 벨트",
      "눈을 가리면 아무것도 보이지 않는 벨벳 소재의 안대",
      "한 시간이 지나도 촉촉한 황금색 바디 오일",
    ],
  },
  {
    id: 10,
    question: "오늘은 특이한 컨셉의 호텔을 예약했다! 내가 예약한 룸은?",
    answers: [
      "사방에 처음 보는 온갖 도구로 가득한 어두운 컨셉 룸",
      "벽, 바닥, 천장까지 온통 거울인 거울 컨셉 룸",
      "매트리스인지 침대인지 구분이 안 될 정도로 출렁거리는 물침대 룸",
      "병원 진료실로 꾸며진 상황극 컨셉 룸",
    ],
  },
  {
    id: 11,
    question:
      "상대방이 갑자기 직장 상황극을 시작하며 나를 궁지에 몰기 시작했다. 상대방은 어떤 직장 동료일까?",
    answers: [
      "나를 선배님이라고 부르는 열정 넘치고 풋풋한 신입사원",
      "승진심사 기간, 내 약점을 쥐고 무언가를 원하는 눈빛의 인사팀장",
      "늘 나한테 차갑게 대하다가 오늘은 뭔가 오묘한 기류가 흐르는 우리 팀 선배",
    ],
  },
  {
    id: 12,
    question: "아무 소리도 내면 안 되는 야외 플레이! 나의 로케이션 로망은?",
    answers: [
      "퇴근 후 아무도 없는 불 꺼진 오피스",
      "야릇한 영화가 흘러나오는 자동차 극장",
      "금방이라도 누가 지나갈 것 같은 은밀한 해변가 구석",
    ],
  },
  {
    id: 13,
    question:
      "성향이 맞지 않는 사람과 도저히 좁힐 수 없는 간극... 어떻게 할까?",
    answers: [
      "그럼 내 성향을 바꿔볼게! 오히려 좋을 수도 있잖아?",
      "각자 조금씩 타협점을 찾아보는 건 어때?",
      "타협은 없어. 잘 맞는 사람 찾아 떠날 거야.",
    ],
  },
];

export const REVIEWS = [
  {
    point: 4,
    info: {
      univ: "서울대",
      age: 24,
      content:
        "일단 다른 앱들과 다르게 대학생들끼리 교류하는게 특이하고 좋았고 매칭률고 좋고 이상한 사람 많이 없는거 같아서 짱 좋아요",
      date: "2024.07.20",
      gender: "남성",
    },
  },
  {
    point: 4,
    info: {
      univ: "숭실대",
      age: 22,
      content:
        "하루에 세 번만 선택이 가능하다는 점에서 다른 만남 어플과 차별화되는 것 같아요! 진지하고 재밌는 대화를 나눌 수 있는 사람을 만날 수 있었습니다",
      date: "2024.07.20",
      gender: "여성",
    },
  },
  {
    point: 3,
    info: {
      univ: "중앙대",
      age: 23,
      content:
        "온새미로 너무 좋아요!! 요즘 같은 시대에 만남 갖기 좋은 것 같아요",
      date: "2024.07.20",
      gender: "여성",
    },
  },
];

export const IDEAL_REQ_TYPE = ["required", "optional_1", "optional_2"];

export const AUTH_UNIV_LIST = [
  "가야대학교",
  "가천길대학교",
  "가천대학교",
  "가천의과학대학교",
  "가톨릭관동대학교",
  "가톨릭대학교",
  "가톨릭상지대학교",
  "감리교신학대학교",
  "강남대학교",
  "강동대학교",
  "강릉영동대학교",
  "강릉원주대학교",
  "강원관광대학교",
  "강원대학교",
  "강원도립대학교",
  "거제대학교",
  "건국대학교",
  "건국대학교(글로컬)",
  "건양대학교",
  "건양사이버대학교",
  "경기과학기술대학교",
  "경기대학교",
  "경남과학기술대학교",
  "경남대학교",
  "경남도립거창대학교",
  "경남도립남해대학교",
  "경남정보대학교",
  "경동대학교",
  "경민대학교",
  "경복대학교",
  "경북과학대학교",
  "경북대학교",
  "경북도립대학교",
  "경북외국어대학교",
  "경북전문대학교",
  "경산대학교",
  "경상대학교",
  "경성대학교",
  "경운대학교",
  "경운대학교(산업대)",
  "경원전문대학교",
  "경인교육대학교",
  "경인여자대학교",
  "경일대학교",
  "경주대학교",
  "경희대학교",
  "경희사이버대학교",
  "계명대학교",
  "계명문화대학교",
  "계원예술대학교",
  "고구려대학교",
  "고려대학교",
  "고려대학교(세종)",
  "고려사이버대학교",
  "고신대학교",
  "공주교육대학교",
  "공주대학교",
  "광신대학교",
  "광양보건대학교",
  "광운대학교",
  "광주가톨릭대학교",
  "광주교육대학교",
  "광주대학교",
  "광주대학교(산업대)",
  "광주보건대학교",
  "광주여자대학교",
  "구미대학교",
  "구세군사관학교",
  "국민대학교",
  "국제대학교",
  "국제사이버대학교",
  "군산간호대학교",
  "군산대학교",
  "군장대학교",
  "그리스도대학교",
  "극동대학교",
  "글로벌사이버대학교",
  "금강대학교",
  "금오공과대학교",
  "기독간호대학교",
  "김천과학대학교",
  "김천대학교",
  "김포대학교",
  "김해대학교",
  "꽃동네대학교",
  "나사렛대학교",
  "남부대학교",
  "남서울대학교",
  "남서울대학교(산업대)",
  "농협대학교",
  "단국대학교",
  "대경대학교",
  "대구가톨릭대학교",
  "대구공업대학교",
  "대구과학대학교",
  "대구교육대학교",
  "대구대학교",
  "대구미래대학교",
  "대구보건대학교",
  "대구사이버대학교",
  "대구예술대학교",
  "대구외국어대학교",
  "대구한의대학교",
  "대덕대학교",
  "대동대학교",
  "대림대학교",
  "대신대학교",
  "대원대학교",
  "대전가톨릭대학교",
  "대전대학교",
  "대전보건대학교",
  "대전신학교",
  "대전신학대학교",
  "대진대학교",
  "덕성여자대학교",
  "동강대학교",
  "동국대학교",
  "동국대학교(경주)",
  "동남보건대학교",
  "동덕여자대학교",
  "동명대학교",
  "동명정보대학교",
  "동부산대학교",
  "동서대학교",
  "동서울대학교",
  "동신대학교",
  "동아대학교",
  "동아방송예술대학교",
  "동아인재대학교",
  "동양대학교",
  "동양미래대학교",
  "동우대학교",
  "동원과학기술대학교",
  "동원대학교",
  "동의과학대학교",
  "동의대학교",
  "동주대학교",
  "두원공과대학교",
  "디지털서울문화예술대학교",
  "루터대학교",
  "마산대학교",
  "명지대학교",
  "명지전문대학교",
  "목원대학교",
  "목포가톨릭대학교",
  "목포과학대학교",
  "목포대학교",
  "목포해양대학교",
  "문경대학교",
  "배재대학교",
  "배화여자대학교",
  "백석대학교",
  "백석문화대학교",
  "백제예술대학교",
  "벽성대학교",
  "국립부경대학교",
  "부산가톨릭대학교",
  "부산경상대학교",
  "부산과학기술대학교",
  "부산교육대학교",
  "부산대학교",
  "부산디지털대학교",
  "부산여자대학교",
  "부산예술대학교",
  "부산외국어대학교",
  "부산장신대학교",
  "부천대학교",
  "사이버한국외국어대학교",
  "삼육대학교",
  "삼육보건대학교",
  "삼육의명대학교",
  "상명대학교",
  "상명대학교(천안)",
  "상주대학교",
  "상지대학교",
  "상지영서대학교",
  "서강대학교",
  "서경대학교",
  "서남대학교",
  "서라벌대학교",
  "서영대학교",
  "서울과학기술대학교",
  "서울과학기술대학교(산업대)",
  "서울교육대학교",
  "서울기독대학교",
  "서울대학교",
  "서울디지털대학교",
  "서울보건대학교",
  "서울사이버대학교",
  "서울시립대학교",
  "서울신학대학교",
  "서울여자간호대학교",
  "서울여자대학교",
  "서울예술대학교",
  "서울장신대학교",
  "서원대학교",
  "서일대학교",
  "서정대학교",
  "서해대학교",
  "선린대학교",
  "선문대학교",
  "성결대학교",
  "성공회대학교",
  "성균관대학교",
  "성덕대학교",
  "성신여자대학교",
  "성심외국어대학교",
  "세경대학교",
  "세명대학교",
  "세종대학교",
  "세종사이버대학교",
  "세한대학교",
  "송곡대학교",
  "송원대학교",
  "송호대학교",
  "수성대학교",
  "수원가톨릭대학교",
  "수원과학대학교",
  "수원대학교",
  "수원여자대학교",
  "숙명여자대학교",
  "순복음총회신학교",
  "순천대학교",
  "순천제일대학교",
  "순천향대학교",
  "숭실대학교",
  "숭실사이버대학교",
  "숭의여자대학교",
  "신경대학교",
  "신구대학교",
  "신라대학교",
  "신성대학교",
  "신안산대학교",
  "신흥대학교",
  "아세아연합신학대학교",
  "아주대학교",
  "아주자동차대학교",
  "안동과학대학교",
  "안동대학교",
  "안산대학교",
  "안양대학교",
  "여주대학교",
  "연성대학교",
  "연세대학교",
  "연세대학교(원주)",
  "연암공과대학교",
  "열린사이버대학교",
  "영남대학교",
  "영남신학대학교",
  "영남외국어대학교",
  "영남이공대학교",
  "영산대학교",
  "영산대학교(산업대)",
  "영산선학대학교",
  "영진사이버대학교",
  "영진전문대학교",
  "예수대학교",
  "예원예술대학교",
  "오산대학교",
  "용인대학교",
  "용인송담대학교",
  "우석대학교",
  "우송공업대학교",
  "우송대학교",
  "우송대학교(산업대)",
  "우송정보대학교",
  "울산과학대학교",
  "울산대학교",
  "웅지세무대학교",
  "원광대학교",
  "원광디지털대학교",
  "원광보건대학교",
  "원주대학교",
  "위덕대학교",
  "유원대학교",
  "유한대학교",
  "을지대학교",
  "이화여자대학교",
  "인덕대학교",
  "인제대학교",
  "인천가톨릭대학교",
  "인천대학교",
  "인천재능대학교",
  "인천전문대학교",
  "인하공업전문대학교",
  "인하대학교",
  "장로회신학대학교",
  "장안대학교",
  "적십자간호대학교",
  "전남과학대학교",
  "전남대학교",
  "전남도립대학교",
  "전북과학대학교",
  "전북대학교",
  "전주교육대학교",
  "전주기전대학교",
  "전주대학교",
  "전주비전대학교",
  "정석대학교",
  "제주관광대학교",
  "제주교육대학교",
  "제주국제대학교",
  "제주대학교",
  "제주산업정보대학교",
  "제주한라대학교",
  "조선간호대학교",
  "조선대학교",
  "조선이공대학교",
  "중부대학교",
  "중앙대학교",
  "중앙대학교(안성)",
  "중앙승가대학교",
  "중원대학교",
  "진주교육대학교",
  "진주보건대학교",
  "진주산업대학교(산업대)",
  "차의과학대학교",
  "창신대학교",
  "창원대학교",
  "창원문성대학교",
  "천안연암대학교",
  "청강문화산업대학교",
  "청암대학교",
  "청운대학교",
  "청주교육대학교",
  "청주대학교",
  "초당대학교",
  "초당대학교(산업대)",
  "총신대학교",
  "추계예술대학교",
  "춘천교육대학교",
  "춘해보건대학교",
  "충남대학교",
  "충남도립청양대학교",
  "충북대학교",
  "충북도립대학교",
  "충북보건과학대학교",
  "충청대학교",
  "침례신학대학교",
  "칼빈대학교",
  "탐라대학교",
  "평택대학교",
  "포항대학교",
  "한경대학교",
  "한경대학교(산업대)",
  "한국골프대학교",
  "한국관광대학교",
  "한국교원대학교",
  "한국교통대학교",
  "한국교통대학교(산업대)",
  "한국국제대학교",
  "한국기술교육대학교",
  "한국농수산대학교",
  "한국방송통신대학교",
  "한국복지대학교",
  "한국복지사이버대학교",
  "한국산업기술대학교",
  "한국산업기술대학교(산업대)",
  "한국성서대학교",
  "한국승강기대학교",
  "한국영상대학교",
  "한국예술종합학교",
  "한국외국어대학교",
  "한국전통문화대학교",
  "한국정보통신기능대학교",
  "한국철도대학교",
  "한국체육대학교",
  "한국폴리텍대학교",
  "한국항공대학교",
  "국립한국해양대학교",
  "한남대학교",
  "한동대학교",
  "한라대학교",
  "한려대학교",
  "한려대학교(산업대)",
  "한림대학교",
  "한림성심대학교",
  "한민학교",
  "한밭대학교",
  "한밭대학교(산업대)",
  "한북대학교",
  "한서대학교",
  "한성대학교",
  "한세대학교",
  "한신대학교",
  "한양대학교",
  "한양대학교(ERICA)",
  "한양사이버대학교",
  "한양여자대학교",
  "한영대학교",
  "한영신학대학교",
  "한일장신대학교",
  "한중대학교",
  "협성대학교",
  "혜전대학교",
  "혜천대학교",
  "호남대학교",
  "호남신학대학교",
  "호서대학교",
  "호원대학교",
  "홍익대학교",
  "홍익대학교(세종)",
  "화신사이버대학교",
  "DGIST",
  "GIST",
  "KAIST",
  "POSTECH",
  "UNIST",
];

export const RECOMMEND_MESSAGE_MAP = (type) => {
  if (type === 1)
    return (
      <>
        사진이 등록되지 않은 사용자에요!
        <br />
        매칭 수락 여부를 다음 쪽지 시간(17:00)
        <br />
        전까지 결정해주세요.
      </>
    );
  return (
    <>
      사진이 등록된 사용자에요!
      <br />
      사진 요청 여부를 다음 쪽지 시간(17:00)
      <br />
      전까지 결정해주세요.
    </>
  );
};

export const REQUEST_MESSAGE_MAP = (type) => {
  if (type === 1)
    return (
      <>
        사진이 등록되지 않은 사용자에요!
        <br />
        매칭 수락 여부를 다음 쪽지 시간(17:00)
        <br />
        전까지 결정해주세요.
      </>
    );
  return (
    <>
      상대방이 사진 공개를 요청했어요!
      <br />
      상대방의 프로필이 마음에 든다면 사진을
      <br />
      공개하고 서로의 얼굴을 확인해보세요.
    </>
  );
};

export const MATCH_RESULT_MESSAGE_MAP = (code) => {
  switch (code) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
  }
};

export const TIME_SECTION_FOR_RECOMMENDATION = [8, 18, 22, 32];
