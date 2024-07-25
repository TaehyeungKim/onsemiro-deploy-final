import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import Letter from "components/Letter";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import {
  requestMatching,
  acceptMatching,
  deleteRecommend,
  deleteRequestForMe,
  requestPhoto,
  acceptPhoto,
} from "apis/api";

import { recommendDataState, requestDataState } from "state/state";
import { useSetRecoilState } from "recoil";

import {
  callRequestForMe,
  getRecommendation,
} from "components/HomeContent/utils";

export default function LetterLayout({ info, close, renderType, mode, i = 0 }) {
  const [index, setIndex] = useState(i);
  const [positiveButtonMessage, setPositiveButtonMessage] = useState("");
  const [positiveButtonColor, setPositiveButtonColor] = useState("");
  const [copiedInfo] = useState([...info]);
  const [letterMessage, setLetterMessage] = useState(null);
  const [actionVisible, setActionVisible] = useState(true);

  const setRecommendData = useSetRecoilState(recommendDataState);
  const setRequestData = useSetRecoilState(requestDataState);

  const positiveCall = useCallback(
    async (data) => {
      if (mode === "recommend") {
        if (copiedInfo[index].matching_type === 1)
          return requestMatching(data).then((res) => {
            if (res) {
              setLetterMessage(
                <>
                  사진을 요청했어요!
                  <br />
                  사진 요청 결과는 매칭 현황 보기 - 사진 요청 결과에서
                  <br />
                  확인할 수 있어요.
                </>
              );
              setActionVisible(false);
            }
          });
        else
          return requestPhoto(data).then((res) => {
            if (res) {
              setLetterMessage(
                <>
                  사진을 요청했어요!
                  <br />
                  사진 요청 결과는 매칭 현황 보기 - 사진 요청 결과에서 <br />
                  확인할 수 있어요.
                </>
              );
              setActionVisible(false);
            }
          });
      } else if (mode === "request") {
        if (copiedInfo[index].matching_type === 1)
          return acceptMatching(data).then((res) => {
            if (res.status === 200 || res.status === 201) {
              close();
            }
          });
        else
          return acceptPhoto(data).then((res) => {
            if (res) {
              close();
            }
          });
        return;
      }
    },
    [mode, index]
  );

  const negativeCall = useCallback(async () => {
    if (mode === "recommend") {
      return deleteRecommend().then(async (res) => {
        if (res) {
          setLetterMessage(<>프로필을 거절했어요.</>);
          setActionVisible(false);
        }
      });
    } else if (mode === "request") {
      const deleteRes = await deleteRequestForMe({
        matching_type: copiedInfo[i].matching_type,
        counter_id: copiedInfo[i].counter_id,
      });
      if (deleteRes) {
        setLetterMessage(<>프로필을 거절했어요.</>);
        setActionVisible(false);
      }
    }
  }, [mode, index]);

  useEffect(() => {
    if (mode === "request")
      setPositiveButtonMessage(
        copiedInfo[index]?.matching_type === 1 ? "매칭 수락" : "사진 공개"
      );
    else if (mode === "recommend")
      setPositiveButtonMessage(
        copiedInfo[index]?.matching_type === 1 ? "매칭 요청" : "사진 요청"
      );

    (mode === "recommend" || mode === "request") &&
      setPositiveButtonColor(
        copiedInfo[index]?.matching_type === 1 ? "bg-main" : "bg-sub"
      );
  }, [index]);

  useEffect(() => {
    return () => {
      if (mode === "recommend") {
        return getRecommendation(setRecommendData);
      } else if (mode === "request") return callRequestForMe(setRequestData);
    };
  }, []);

  useEffect(() => {
    setLetterMessage(copiedInfo[index]?.message);
  }, [copiedInfo, index]);

  useEffect(() => {
    if (mode === "detail") setActionVisible(false);
  }, [mode]);

  return (
    <>
      <div className="overflow-y-scroll overflow-x-hidden flex-nowrap h-letter-height w-letter-width flex flex-row bg-letter bg-cover bg-center bg-no-repeat rounded-xl relative pb-2 shadow-md">
        <button className="w-8 absolute top-2 right-2 z-10" onClick={close}>
          <IconImage src={closeIcon}></IconImage>
        </button>
        {copiedInfo.map((i, k) => (
          <Letter
            key={k}
            info={i}
            index={index}
            message={letterMessage}
          ></Letter>
        ))}
      </div>

      {actionVisible && (
        <div className="flex flex-row w-letter-width justify-between mt-3">
          <button
            onClick={() => positiveCall({ counter_id: info[index].id })}
            className={`${positiveButtonColor} text-white w-44 p-2 rounded-xl shadow-lg text-lg`}
          >
            {positiveButtonMessage}
          </button>
          <button
            className="bg-[#A9A9A9] text-white w-44 p-2 rounded-xl shadow-lg text-lg"
            onClick={() => negativeCall()}
          >
            거절
          </button>
        </div>
      )}

      {info.length > 1 ? (
        <Indexation
          index={index}
          length={copiedInfo.length}
          handler={setIndex}
        ></Indexation>
      ) : null}
    </>
  );
}

function Indexation({ index, length, handler }) {
  return (
    <div className="flex justify-center mt-3">
      <div className="flex flex-row rounded-lg bg-mask-deeper p-2 w-fit">
        {(() => {
          const arr = [];
          for (let i = 0; i < length; i++)
            arr.push(
              <div key={i}>
                <input
                  type="radio"
                  id={`index_${i}`}
                  readOnly
                  hidden
                  checked={i === index ? true : false}
                  className="peer"
                />
                <label
                  className="rounded-full bg-black peer-checked:bg-white block w-4 aspect-square mx-1"
                  htmlFor={`index_${i}`}
                  onClick={() => handler(i)}
                ></label>
              </div>
            );
          return arr;
        })()}
      </div>
    </div>
  );
}
