import MainSection from ".";
import { LetterArrive, LetterChecked, LetterClosed } from "./cases";

import { useCallback, useEffect, useState } from "react";

import { FloatingLetterOverlay } from "components/Overlay";

import { recommendDataState } from "state/state";
import { useRecoilState } from "recoil";

import { getRecommendation } from "./utils";

export default function Recommend() {
  const [recommendData, setRecommendData] = useRecoilState(recommendDataState);
  const [letterVisible, setLetterVisible] = useState(false);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
  }, []);

  // const getRecommendedProfile = async () => {
  //   const recommended = await getRecommend();

  //   const profile = await getRestrictedProfile({
  //     counter_id: recommended.data.recommended_user_id,
  //   });
  //   setRecommendData([
  //     {
  //       ...profile.data,
  //       message: MESSAGE_MAP(recommended.data.matching_type),
  //       matching_type: recommended.data.matching_type,
  //     },
  //   ]);
  // };

  useEffect(() => {
    getRecommendation(setRecommendData);
  }, []);

  const modeMatch = useCallback((status) => {
    // if (status === "arrival") return <LetterArrive></LetterArrive>;
    // else if (status === "checked") return <LetterChecked></LetterChecked>;
    // return <LetterClosed time={recommendInfo.later}></LetterClosed>;
    return <LetterArrive></LetterArrive>;
  });

  return (
    <>
      <div
        className="cursor-pointer w-full mx-auto"
        onClick={() => setLetterVisible(true)}
      >
        <MainSection
          // icon={timeInfo.icon}
          // caption={`${recommendInfo[0].date} ${timeInfo.time} 쪽지 (${recommendInfo[0].time}:00) `}
          caption={"7/8 밤 쪽지(22:00)"}
        >
          {modeMatch(recommendData.status)}
        </MainSection>
      </div>
      {letterVisible ? (
        <FloatingLetterOverlay
          info={recommendData}
          close={closeLetter}
        ></FloatingLetterOverlay>
      ) : null}
    </>
  );
}
