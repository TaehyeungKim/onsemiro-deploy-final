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
    question: "ㄷ람ㄹㄴㅁㄹㅁㄴㅇㅁㄴㅇ",
    answers: ["ㅁㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅇㅁ"],
  },
  {
    id: 1,
    question: "ㅁㅇㅁㅇㅁㅇㅁㅇㄴㅇㄴㅁ",
    answers: ["ㅁㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅇㅁ"],
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
