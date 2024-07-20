import MainIconSection from ".";
import Love from "../../assets/love 1.png";
import { useState, useEffect, useMemo, useCallback } from "react";
import { RequestHold } from "./cases";
import Letter from "../Letter";
// import {
//   dummyDirectFinalRequestData,
//   dummyFinalAfterPhotoRequestData,
//   dummyPhotoRequestData,
// } from "../../data/dummy";
import { timeMatch } from "./utils";
import LetterLayout from "../../layouts/LetterLayout";
import { getRequestForMe } from "../../apis/api";

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
      상대방이 사진 공개를 요청했어요!
      <br />
      상대방의 프로필이 마음에 든다면 사진을
      <br />
      공개하고 서로의 얼굴을 확인해보세요.
    </>
  );
};

export default function Request() {
  const [requestInfo, setRequestInfo] = useState([]);
  const [letterVisible, setLetterVisible] = useState(false);
  const [requestIndex, setRequestIndex] = useState(0);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
  }, []);

  const callRequestForMe = async () => {
    const { type1, type2 } = (await getRequestForMe()).data;

    let data = [];

    if (type1)
      data = [
        ...type1?.map((d) => {
          if (d.matching_id)
            return {
              ...d.simpleProfile,
              matching_type: d.matching_type,
              matching_id: d.matching_id,
              time: d.created_at,
              message: MESSAGE_MAP(d.matching_type),
            };
        }),
      ];

    if (type2)
      data = [
        ...data,
        ...type2?.map((d) => {
          if (d.matching_id)
            return {
              ...d.simpleProfile,
              matching_type: d.matching_type,
              matching_id: d.matching_id,
              created_at: d.created_at,
              messsage: MESSAGE_MAP(d.matching_type),
            };
        }),
      ];

    setRequestInfo([...data.filter((d) => d !== undefined && d !== null)]);
  };

  useEffect(() => {
    callRequestForMe();
  }, []);

  useEffect(() => setRequestIndex(0), [letterVisible]);

  return (
    requestInfo && (
      <>
        <div
          className="cursor-pointer w-full mx-auto"
          onClick={() => setLetterVisible(true)}
        >
          <MainIconSection icon={Love} caption={"나에게 온 요청"}>
            <RequestHold count={requestInfo.length}></RequestHold>
          </MainIconSection>
        </div>
        {letterVisible ? (
          <LetterLayout
            info={requestInfo}
            close={closeLetter}
            index={requestIndex}
            requestToMe={true}
          />
        ) : null}
      </>
    )
  );
}
