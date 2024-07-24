import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import Letter from "components/Letter";
import { useCallback, useEffect, useState } from "react";

import {
  requestMatching,
  getRecommend,
  getRequestForMe,
  acceptMatching,
  deleteRecommend,
  deleteRequestForMe,
  requestPhoto,
} from "apis/api";

import { recommendDataState, requestDataState } from "state/state";
import { useSetRecoilState } from "recoil";

import {
  callRequestForMe,
  getRecommendation,
} from "components/HomeContent/utils";

export default function LetterLayout({
  info,
  close,
  renderType,
  requestToMe = false,
  i = 0,
}) {
  const [index, setIndex] = useState(i);
  const [positiveButtonMessage, setPositiveButtonMessage] = useState("");
  const [positiveButtonColor, setPositiveButtonColor] = useState("");
  const [copiedInfo] = useState([...info]);

  const setRecommendData = useSetRecoilState(recommendDataState);
  const setRequestData = useSetRecoilState(requestDataState);

  const positiveCall = useCallback(
    async (data) => {
      if (!requestToMe) {
        if (copiedInfo[index].matching_type === 1)
          return requestMatching(data).then((res) => {
            if (res.status === 200 || res.status === 201) {
              getRecommend();
              close();
            }
          });
        else requestPhoto(data).then((res) => console.log(res));
      }
      if (copiedInfo[index].matching_type === 1)
        return acceptMatching(data).then((res) => {
          if (res.status === 200 || res.status === 201) {
            getRequestForMe();
            close();
          }
        });
      else return;
    },
    [requestToMe, index]
  );

  const negativeCall = useCallback(
    async (data) => {
      if (!requestToMe) {
        return deleteRecommend().then(async (res) => {
          if (res) {
            getRecommendation(setRecommendData);
            close();
          }
        });
      }
      // console.log(copiedInfo[i]);
      const deleteRes = await deleteRequestForMe({
        matching_type: copiedInfo[i].matching_type,
        counter_id: copiedInfo[i].counter_id,
      });
      if (deleteRes) {
        callRequestForMe(setRequestData);
        close();
      }
    },
    [requestToMe, index]
  );

  useEffect(() => {
    if (requestToMe)
      setPositiveButtonMessage(
        copiedInfo[index]?.matching_type === 1 ? "매칭 수락" : "사진 공개"
      );
    else
      setPositiveButtonMessage(
        copiedInfo[index]?.matching_type === 1 ? "매칭 요청" : "사진 요청"
      );
    setPositiveButtonColor(
      copiedInfo[index]?.matching_type === 1 ? "bg-main" : "bg-sub"
    );
    console.log(copiedInfo[index]);
  }, []);

  return (
    <>
      <div className="overflow-y-scroll overflow-x-hidden flex-nowrap h-letter-height w-letter-width flex flex-row bg-letter bg-cover bg-center bg-no-repeat rounded-xl relative pb-2 shadow-md">
        <button className="w-8 absolute top-2 right-2 z-10" onClick={close}>
          <IconImage src={closeIcon}></IconImage>
        </button>
        {copiedInfo.map((i, k) => (
          <Letter key={k} info={i} index={index}></Letter>
        ))}
      </div>
      {!requestToMe && renderType !== 2 ? null : (
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
