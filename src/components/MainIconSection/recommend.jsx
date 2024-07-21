import MainSection from ".";
import { LetterArrive, LetterChecked, LetterClosed } from "./cases";
import { timeMatch } from "./utils";
import { useCallback, useEffect, useMemo, useState } from "react";

// import { dummyRecommendData } from "../../data/dummy";
import LetterLayout from "../../layouts/LetterLayout";
import { getRecommend, getRestrictedProfile } from "../../apis/api";

const MESSAGE_MAP = (type) => {
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

export default function Recommend() {
  const [recommendInfo, setRecommendInfo] = useState([]);
  const [letterVisible, setLetterVisible] = useState(false);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
  }, []);

  const getRecommendedProfile = async () => {
    const recommended = await getRecommend();
    console.log("data", recommended.data.recommended_user_id);

    const profile = await getRestrictedProfile({
      user_id: recommended.data.recommended_user_id,
    });
    setRecommendInfo([
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

  const timeInfo = useMemo(
    () => recommendInfo.length > 0 && timeMatch(recommendInfo[0].time),
    [recommendInfo]
  );

  const modeMatch = useCallback((status) => {
    // if (status === "arrival") return <LetterArrive></LetterArrive>;
    // else if (status === "checked") return <LetterChecked></LetterChecked>;
    // return <LetterClosed time={recommendInfo.later}></LetterClosed>;
    return <LetterArrive></LetterArrive>;
  });

  return (
    recommendInfo.length > 0 && (
      <>
        <div
          className="cursor-pointer w-full mx-auto"
          onClick={() => setLetterVisible(true)}
        >
          <MainSection
            icon={timeInfo.icon}
            // caption={`${recommendInfo[0].date} ${timeInfo.time} 쪽지 (${recommendInfo[0].time}:00) `}
            caption={"7/8 밤 쪽지(22:00)"}
          >
            {modeMatch(recommendInfo.status)}
          </MainSection>
        </div>
        {letterVisible ? (
          <LetterLayout info={recommendInfo} close={closeLetter}></LetterLayout>
        ) : null}
      </>
    )
  );
}
