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
