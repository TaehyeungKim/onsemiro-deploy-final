import {
  MatchResultOverlay,
  MatchSituationMenuOverlay,
} from "components/Overlay";
import { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  return { ...state, ...action };
}

export default function MatchingSituation({ count }) {
  // const [overlayVisible, setOverlayVisible] = useState(false);

  const [state, dispatch] = useReducer(reducer, { for: "home" });

  if (state.for === "menu")
    return (
      <MatchSituationMenuOverlay
        count={count}
        close={() => dispatch({ for: "home" })}
        opener={dispatch}
      />
    );

  if (state.for === "result")
    return (
      <MatchResultOverlay
        close={() => dispatch({ for: "menu" })}
        dataByDay={[
          {
            day: "07.08",
            profiles: [
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
            ],
          },
          {
            day: "07.08",
            profiles: [
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
            ],
          },
          {
            day: "07.08",
            profiles: [
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
              {
                photo: "",
                nickname: "닉네임닉네임",
                age: 26,
                gender: "남성",
                univ: "서울대",
                location: "서울 관악구",
                mbti: "ENTP",
              },
            ],
          },
        ]}
      />
    );

  return (
    <button
      className="flex flex-row items-center bg-white text-black relative rounded-md w-2/3 box-border py-2 shadow-md"
      onClick={() => dispatch({ for: "menu" })}
    >
      <p className="text-base text-center w-full">매칭 현황 보기</p>
      <div className="absolute bg-mathing_count w-4 h-4 rounded-full -top-1 -right-1 flex items-center justify-center">
        <p className="text-white text-xs">{count.matching + count.photo}</p>
      </div>
    </button>
  );
}
