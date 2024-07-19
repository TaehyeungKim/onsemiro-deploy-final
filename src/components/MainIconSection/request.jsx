import MainIconSection from ".";
import Love from "../../assets/love 1.png";
import { useState, useEffect, useMemo, useCallback } from "react";
import { RequestHold } from "./cases";
import Letter from "../Letter";
import {
  dummyDirectFinalRequestData,
  dummyFinalAfterPhotoRequestData,
  dummyPhotoRequestData,
} from "../../data/dummy";
import { timeMatch } from "./utils";
import LetterLayout from "../../layouts/LetterLayout";

export default function Request() {
  const [requestInfo, setRequestInfo] = useState(null);
  const [letterVisible, setLetterVisible] = useState(false);
  const [requestIndex, setRequestIndex] = useState(0);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
  }, []);

  useEffect(() => {
    //dummy data
    setRequestInfo([
      dummyFinalAfterPhotoRequestData,
      dummyDirectFinalRequestData,
      dummyPhotoRequestData,
    ]);
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
          />
        ) : null}
      </>
    )
  );
}
