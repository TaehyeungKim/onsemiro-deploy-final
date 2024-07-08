import MainIconSection from ".";
import Love from "../../assets/love 1.png";
import { useState, useEffect, useMemo } from "react";
import { RequestHold } from "./cases";
import testProfile from "../../assets/testProfile.png";
import Letter from "../Letter";
import { timeMatch } from "./utils";

export default function RequestAccepted() {
  const [requestInfo, setRequestInfo] = useState(null);
  const [letterVisible, setLetterVisible] = useState(false);

  const closeLetter = useMemo(() => {
    setLetterVisible(false);
  }, []);

  const timeInfo = useMemo(
    () => requestInfo && timeMatch(requestInfo.time),
    [requestInfo]
  );

  useEffect(() => {
    //dummy data
    setRequestInfo([
      {
        type: "request",
        success: true,
        photo: testProfile,
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
          counter_id: "yeong_123",
        },
      },
    ]);
  }, []);

  return (
    requestInfo && (
      <div className="cursor-pointer" onClick={() => setLetterVisible(true)}>
        <MainIconSection icon={Love} caption={"받은 요청"}>
          <RequestHold count={requestInfo.length}></RequestHold>
        </MainIconSection>
        {/* {letterVisible ? (
          <Letter
            info={requestInfo}
            timeInfo={timeInfo}
            close={closeLetter}
          ></Letter>
        ) : null} */}
      </div>
    )
  );
}
