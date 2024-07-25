import MainIconSection from ".";

import { useState, useEffect, useCallback } from "react";

import { FloatingLetterOverlay } from "components/Overlay";
import { useRecoilState } from "recoil";
import { requestDataState } from "state/state";
import { callRequestForMe } from "./utils";

function RequestHold({ count }) {
  return (
    <>
      <div
        className={`w-full relative ${!count ? "bg-sub-pale" : "bg-sub"} py-6`}
      >
        <h5 className="text-center">결정하지 않은 요청이 {count}개 있어요</h5>
      </div>
    </>
  );
}

export default function Request() {
  const [requestData, setRequestData] = useRecoilState(requestDataState);
  const [letterVisible, setLetterVisible] = useState(false);
  const [requestIndex, setRequestIndex] = useState(0);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
  }, []);

  useEffect(() => {
    callRequestForMe(setRequestData);
  }, []);

  useEffect(() => setRequestIndex(0), [letterVisible]);

  return (
    requestData && (
      <>
        <div
          className="cursor-pointer w-full mx-auto"
          onClick={() => {
            requestData.length !== 0 && setLetterVisible(true);
          }}
        >
          <MainIconSection caption={"나에게 온 요청"}>
            <RequestHold count={requestData.length}></RequestHold>
          </MainIconSection>
        </div>
        {letterVisible ? (
          <FloatingLetterOverlay
            info={requestData}
            close={closeLetter}
            index={requestIndex}
            mode={"request"}
          ></FloatingLetterOverlay>
        ) : null}
      </>
    )
  );
}
