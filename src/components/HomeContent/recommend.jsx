import MainSection from ".";

import { useCallback, useEffect, useState } from "react";

import { FloatingLetterOverlay } from "components/Overlay";

import {
  recommendDataState,
  activeState,
  matchDataState,
  photoDataState,
} from "state/state";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  getRecommendation,
  dayRender,
  timeCalculate,
  cleanMatchList,
} from "./utils";
import { TIME_MAP } from "assets/asset";
import { getMatchingList, getPhotoData, getPhotoResults } from "apis/api";

function RecommendButtonMessage({ type }) {
  const [timeMessage, setTimeMessage] = useState("");

  useEffect(() => {
    setTimeMessage(
      `${
        timeCalculate(new Date().getHours(), new Date().getMinutes()).remainhour
      }시간 ${
        timeCalculate(new Date().getHours(), new Date().getMinutes())
          .remainminute
      }분`
    );
    const timeOut = setInterval(() => {
      setTimeMessage(
        `${
          timeCalculate(new Date().getHours(), new Date().getMinutes())
            .remainhour
        }시간 ${
          timeCalculate(new Date().getHours(), new Date().getMinutes())
            .remainminute
        }분`
      );
    }, 60000);
  }, []);
  switch (type) {
    case 1:
      return (
        <h5 className="bg-sub-pale py-6 w-full text-center">
          매칭 활성화를 해야
          <br />
          새로운 쪽지를 받아볼 수 있어요.
        </h5>
      );
    case 2:
      return (
        <h5 className="bg-sub py-6 w-full text-center">
          새로운 쪽지가 도착했어요!
        </h5>
      );
    case 3:
      return (
        <h5 className="bg-sub-pale py-6 w-full text-center">
          매칭 요청을 보냈어요.
        </h5>
      );
    case 4:
      return (
        <h5 className="bg-sub-pale py-6 w-full text-center">
          사진 요청을 보냈어요.
        </h5>
      );
    case 5:
      return (
        <h5 className="bg-sub-pale py-6 w-full text-center">
          {timeMessage} 후에
          <br />
          새로운 쪽지를 받아볼 수 있어요.
        </h5>
      );
    default:
      return;
  }
}

export default function Recommend() {
  const [recommendData, setRecommendData] = useRecoilState(recommendDataState);
  const setResultsData = useSetRecoilState(matchDataState);
  const setPhotoData = useSetRecoilState(photoDataState);

  const [letterVisible, setLetterVisible] = useState(false);
  const active = useRecoilValue(activeState);

  const closeLetter = useCallback(() => {
    setLetterVisible(false);
    getRecommendation(setRecommendData);
    cleanMatchList(getMatchingList).then((res) => setResultsData(res));
    cleanMatchList(getPhotoResults).then((res) => setPhotoData(res));
  }, []);

  useEffect(() => {
    getRecommendation(setRecommendData);
  }, [, active]);

  if (!recommendData[0]) return;

  return (
    <>
      <div
        className="cursor-pointer w-full mx-auto"
        onClick={() => {
          recommendData[0].render_type === 2 && setLetterVisible(true);
        }}
      >
        <MainSection
          caption={`${dayRender(recommendData[0].date, "/", false)} ${
            TIME_MAP[recommendData[0].time].label
          } 쪽지 (${TIME_MAP[recommendData[0].time].time})`}
        >
          {recommendData[0] && (
            <RecommendButtonMessage type={recommendData[0].render_type} />
          )}
        </MainSection>
      </div>
      {letterVisible ? (
        <FloatingLetterOverlay
          info={recommendData}
          close={closeLetter}
          renderType={recommendData[0].render_type}
          mode={"recommend"}
        ></FloatingLetterOverlay>
      ) : null}
    </>
  );
}
