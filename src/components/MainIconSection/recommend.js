import MainIconSection from ".";
import { LetterArrive, LetterChecked, LetterClosed } from "./cases";
import { timeMatch } from "./utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import Letter from "../Letter";

export default function Recommend() {
  const [recommendInfo, setRecommendInfo] = useState(null);
  const [letterVisible, setLetterVisible] = useState(false);

  const closeLetter = useCallback(() => setLetterVisible(false), []);

  useEffect(() => {
    //dummy data
    setRecommendInfo({
      type: "recommend",
      date: "7/9",
      time: 22,
      status: "closed",
      later: "2시간 12분",
      profile: {
        univ: "서울대학교",
        gender: "남성",
        age: 26,
        location: "서울 관악구",
        height: "175~180cm",
        weight: "근육",
        face: "뚜렷 유쌍",
        mbti: "ENTP",
        character: "조금 활발함",
        interest: ["노래 부르기", "드라이브"],
        period: "주 2회",
        tendency: "SW",
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam lacinia turpis, eget euismod justo pulvinar id. Sed eget quam a magna pretium tempus id vel leo. Sed faucibus feugiat efficitur. Ut commodo est a dolor ullamcorper consectetur. Maecenas fringilla sapien justo, sit amet vehicula dui eleifend quis. Vestibulum non mauris blandit, posuere erat sed, tincidunt mi. Donec ullamcorper maximus tortor, lobortis commodo tellus tincidunt efficitur. Nunc sed tellus eget urna pretium blandit vel a eros.",
        photo_status: false,
        auth_self: true,
        auth_univ: true,
        disease_inspection: true,
      },
    });
  }, []);

  // const timeMatch = useCallback((time) => {
  //   const t = parseInt(time);
  //   if (t < 10) return { icon: Sun, time: "아침" };
  //   else if (t < 22) return { icon: Evening, time: "저녁" };
  //   return { icon: Night, time: "밤" };
  // }, []);

  const timeInfo = useMemo(
    () => recommendInfo && timeMatch(recommendInfo.time),
    [recommendInfo]
  );

  const modeMatch = useCallback((status) => {
    if (status === "arrival") return <LetterArrive></LetterArrive>;
    else if (status === "checked") return <LetterChecked></LetterChecked>;
    return <LetterClosed time={recommendInfo.later}></LetterClosed>;
  });

  return (
    recommendInfo && (
      <>
        <div className="cursor-pointer" onClick={() => setLetterVisible(true)}>
          <MainIconSection
            icon={timeInfo.icon}
            caption={`${recommendInfo.date} ${timeInfo.time} 쪽지 (${recommendInfo.time}:00) `}
          >
            {modeMatch(recommendInfo.status)}
          </MainIconSection>
        </div>
        {letterVisible ? (
          <Letter
            info={recommendInfo}
            timeInfo={timeInfo}
            close={closeLetter}
          ></Letter>
        ) : null}
      </>
    )
  );
}
