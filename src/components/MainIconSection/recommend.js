import MainIconSection from ".";
import { LetterArrive, LetterChecked, LetterClosed } from "./cases";
import Evening from "../../assets/evening.png";
import Night from "../../assets/night.png";
import Sun from "../../assets/sun.png";
import { useCallback, useEffect, useState } from "react";

export default function RecommendLetter() {
  const [recommendInfo, setRecommendInfo] = useState(null);

  useEffect(() => {
    setRecommendInfo({
      date: "7/89",
      time: 22,
      status: "closed",
      later: "2시간 12분",
    });
  }, []);
  const timeMatch = useCallback((time) => {
    const t = parseInt(time);
    if (t < 10) return { icon: Sun, time: "아침" };
    else if (t < 22) return { icon: Evening, time: "저녁" };
    return { icon: Night, time: "밤" };
  }, []);

  const modeMatch = useCallback((status) => {
    if (status === "arrival") return <LetterArrive></LetterArrive>;
    else if (status === "checked") return <LetterChecked></LetterChecked>;
    return <LetterClosed time={recommendInfo.later}></LetterClosed>;
  });

  return (
    recommendInfo && (
      <MainIconSection
        icon={timeMatch(recommendInfo).icon}
        caption={`${recommendInfo.date} ${
          timeMatch(recommendInfo).time
        } 쪽지 (${recommendInfo.time}:00) `}
      >
        {modeMatch(recommendInfo.status)}
      </MainIconSection>
    )
  );
}
