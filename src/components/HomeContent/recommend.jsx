import MainSection from ".";
import { LetterArrive, LetterChecked, LetterClosed } from "./cases";
// import { timeMatch } from "./utils";
import { useCallback, useEffect, useMemo, useState } from "react";

import LetterLayout from "layouts/LetterLayout";
import { FloatingLetterOverlay } from "components/Overlay";
import { getRecommend, getRestrictedProfile } from "apis/api";
import { recommendDataState } from "state/state";
import { useRecoilState } from "recoil";
import { MESSAGE_MAP } from "assets/asset";

export default function Recommend() {
  const [recommendData, setRecommendData] = useRecoilState(recommendDataState);
  const [letterVisible, setLetterVisible] = useState(false);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
  }, []);

  const getRecommendedProfile = async () => {
    const recommended = await getRecommend();
    console.log("data", recommended.data.recommended_user_id);

    const profile = await getRestrictedProfile({
      counter_id: recommended.data.recommended_user_id,
    });
    setRecommendData([
      {
        ...profile.data,
        message: MESSAGE_MAP(recommended.data.matching_type),
        matching_type: recommended.data.matching_type,
      },
    ]);
  };

  useEffect(() => {
    getRecommendedProfile();
  }, []);

  // const timeInfo = useMemo(
  //   () => recommendInfo.length > 0 && timeMatch(recommendInfo[0].time),
  //   [recommendInfo]
  // );

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
      ) : // <LetterLayout info={recommendInfo} close={closeLetter}></LetterLayout>
      // <LetterLayout info={recommendInfo} close={closeLetter}></LetterLayout>
      null}
    </>
  );
}
