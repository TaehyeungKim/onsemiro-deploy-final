import Letter from "components/Letter";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  detailPositiveCall,
  recommendPositiveCall,
  requestPositiveCall,
} from "./utils";

import { deleteRecommend, deleteRequestForMe } from "apis/api";

import { recommendDataState, requestDataState } from "state/state";
import { useSetRecoilState } from "recoil";

import {
  callRequestForMe,
  getRecommendation,
} from "components/HomeContent/utils";

import { updateLetterMessage } from "./utils";

function PositiveButton({ info, mode, afterAction }) {
  const positiveCall = useCallback(
    (data) => {
      if (mode === "recommend")
        recommendPositiveCall(data, info.matching_type, afterAction);
      else if (mode === "request")
        requestPositiveCall(data, info.matching_type, afterAction, info.id);
      else detailPositiveCall(data, info.code, afterAction, info.id);
    },
    [mode, info, afterAction]
  );

  const buttonMessage = useMemo(() => {
    if (mode === "detail" && info.code === 2) return "매칭 수락";

    if (info.matching_type === 1) {
      return mode === "recommend" ? "매칭 요청" : "매칭 수락";
    } else if (info.matching_type === 2) {
      return mode === "recommend" ? "사진 요청" : "사진 공개";
    }
  }, [mode, info]);

  const buttonColor = useMemo(() => {
    if (info.matching_type === 2) return false;
    return true;
  }, [info]);

  return (
    <button
      onClick={() => positiveCall({ counter_id: info.id + 1 })}
      className={`${
        buttonColor ? "bg-main" : "bg-sub"
      } text-white w-44 p-2 rounded-xl shadow-lg text-lg`}
    >
      {buttonMessage}
    </button>
  );
}

export default function LetterComponent({ info, close, mode }) {
  const [index, setIndex] = useState(0);

  const [copiedInfo, setCopiedInfo] = useState([...info]);

  const [actionVisible, setActionVisible] = useState(true);

  const setRecommendData = useSetRecoilState(recommendDataState);
  const setRequestData = useSetRecoilState(requestDataState);

  const negativeCall = useCallback(async () => {
    if (mode === "recommend") {
      return deleteRecommend().then(async (res) => {
        if (res) {
          updateLetterMessage(
            copiedInfo,
            setCopiedInfo,
            index,
            <>
              상호 의견이 달라 매칭에 실패하였습니다.
              <br />
              창을 닫으면
              <br />
              더 이상 프로필을 볼 수 없습니다.
              <br />
              다음 매칭을 기대해 주세요.
            </>
          );
        }
      });
    } else if (mode === "request" || mode === "detail") {
      const deleteRes = await deleteRequestForMe({
        matching_type: copiedInfo[index].matching_type,
        counter_id: copiedInfo[index].counter_id,
      });

      if (deleteRes) {
        updateLetterMessage(
          copiedInfo,
          setCopiedInfo,
          index,
          <>
            상호 의견이 달라 매칭에 실패하였습니다.
            <br />
            창을 닫으면
            <br />
            더 이상 프로필을 볼 수 없습니다.
            <br />
            다음 매칭을 기대해 주세요.
          </>
        );
      }
    }
  }, [mode, index]);

  useEffect(() => {
    return () => {
      if (mode === "recommend") {
        return getRecommendation(setRecommendData);
      } else if (mode === "request") return callRequestForMe(setRequestData);
    };
  }, []);

  useEffect(() => {
    if (
      mode === "detail" &&
      [1, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(copiedInfo[index].code)
    ) {
      setActionVisible(false);
    }
  }, [mode, info, index]);

  useEffect(() => {
    if (mode !== "detail")
      copiedInfo[index].acted
        ? setActionVisible(false)
        : setActionVisible(true);
  }, [copiedInfo, index, mode]);

  return (
    <>
      <div className="overflow-y-scroll overflow-x-hidden flex-nowrap min-h-letter-height h-[60%] w-letter-width flex flex-row bg-background rounded-xl relative pb-2 shadow-md">
        {copiedInfo.map((i, k) => (
          <Letter key={k} info={i} close={close} index={index}></Letter>
        ))}
      </div>

      {actionVisible && (
        <div className="flex flex-row w-letter-width justify-between mt-3">
          <PositiveButton
            info={copiedInfo[index]}
            mode={mode}
            afterAction={(message, photo = null) => {
              const temp = { ...copiedInfo[index] };
              (() => {
                temp.message = message;
              })();

              temp.acted = true;
              photo &&
                (() => {
                  temp.photo = photo;
                })();
              let newList = [];
              for (let i = 0; i < copiedInfo.length; i++) {
                if (i === index) newList = [...newList, temp];
                else newList = [...newList, copiedInfo[i]];
              }

              setCopiedInfo(newList);
            }}
          />
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
