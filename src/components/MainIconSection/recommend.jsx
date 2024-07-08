import MainIconSection from ".";
import { LetterArrive, LetterChecked, LetterClosed } from "./cases";
import { timeMatch } from "./utils";
import { useCallback, useEffect, useMemo, useState } from "react";

import { dummyRecommendData } from "../../data/dummy";
import LetterLayout from "../../layouts/LetterLayout";

export default function Recommend() {
  const [recommendInfo, setRecommendInfo] = useState([]);
  const [letterVisible, setLetterVisible] = useState(false);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
  }, []);

  useEffect(() => {
    //dummy data
    setRecommendInfo([dummyRecommendData]);
  }, []);

  const timeInfo = useMemo(
    () => recommendInfo.length > 0 && timeMatch(recommendInfo[0].time),
    [recommendInfo]
  );

  const modeMatch = useCallback((status) => {
    if (status === "arrival") return <LetterArrive></LetterArrive>;
    else if (status === "checked") return <LetterChecked></LetterChecked>;
    return <LetterClosed time={recommendInfo.later}></LetterClosed>;
  });

  return (
    recommendInfo.length > 0 && (
      <>
        <div className="cursor-pointer" onClick={() => setLetterVisible(true)}>
          <MainIconSection
            icon={timeInfo.icon}
            caption={`${recommendInfo[0].date} ${timeInfo.time} 쪽지 (${recommendInfo[0].time}:00) `}
          >
            {modeMatch(recommendInfo.status)}
          </MainIconSection>
        </div>
        {letterVisible ? (
          <LetterLayout info={recommendInfo} close={closeLetter}>
            {/* <Letter info={recommendInfo} timeInfo={timeInfo}></Letter> */}
          </LetterLayout>
        ) : null}
      </>
    )
  );
}
