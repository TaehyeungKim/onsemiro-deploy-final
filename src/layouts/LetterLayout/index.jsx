import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import Letter from "components/Letter";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  createContext,
} from "react";

import {
  requestMatching,
  acceptMatching,
  deleteRecommend,
  deleteRequestForMe,
  requestPhoto,
  acceptPhoto,
  requestKakaoId,
  getPhotoData,
  acceptMatchingAfterPhoto,
} from "apis/api";

import { recommendDataState, requestDataState } from "state/state";
import { useSetRecoilState } from "recoil";

import {
  callRequestForMe,
  getRecommendation,
} from "components/HomeContent/utils";

import { TARGET } from "apis/api";
import { updateLetterMessage } from "./utils";

export const VisibleInfoContext = createContext(null);

function PositiveButton({ info, mode, afterAction }) {
  const positiveCall = useCallback(
    async (data) => {
      if (mode === "recommend") {
        if (info.matching_type === 1)
          return requestMatching(data).then((res) => {
            if (res) {
              afterAction(
                <>
                  매칭 요청을 보냈습니다.
                  <br />
                  상대방의 매칭 수락 여부가 
                  <br />
                  24시간 내에 결정돼요.
                </>,
                false
              );
            }
          });
        else
          return requestPhoto(data).then((res) => {
            if (res) {
              afterAction(
                <>
                  사진을 요청했어요! 사진 요청 결과는
                  <br />
                  매칭 현황 보기 - 사진 요청 결과에서 
                  <br />
                  확인할 수 있어요.
                </>,
                false
              );
            }
          });
      } else if (mode === "request") {
        if (info.matching_type === 1)
          return acceptMatching(data).then(async (res) => {
            if (res.status === 200 || res.status === 201) {
              const { counter_id } = res.data;
              const response = await requestKakaoId({ counter_id });
              afterAction(
                <>
                  축하드립니다! 매칭에 성공하셨습니다.
                  <br />
                  {`상대방의 카톡 아이디는 ${response.data.kakao_id}입니다.`}
                </>,
                false
              );
            }
          });
        else
          return acceptPhoto(data).then(async (res) => {
            const photoResponse = await getPhotoData({ counter_id: info.id });

            if (res) {
              afterAction(
                <>
                  사진이 공개됐어요!
                  <br />
                  매칭 수락 여부를 
                  <br />
                  24시간 내에 결정해주세요.
                </>,
                false,
                photoResponse.photo_url
              );
            }
          });
      }
      if (info.code === 2) {
        return acceptMatchingAfterPhoto(data).then(async (res) => {
          if (res.status === 200 || res.status === 201) {
            const { counter_id } = res.data;
            const response = await requestKakaoId({ counter_id: info.id });
            afterAction(
              <>
                축하드립니다! 매칭에 성공하셨습니다.
                <br />
                {`상대방의 카톡 아이디는 ${response.data.kakao_id}입니다.`}
              </>,
              false
            );
          }
        });
      }
    },
    [mode, info]
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
  }, [mode, info]);

  return (
    <button
      onClick={() => positiveCall({ counter_id: info.id })}
      className={`${
        buttonColor ? "bg-main" : "bg-sub"
      } text-white w-44 p-2 rounded-xl shadow-lg text-lg`}
    >
      {buttonMessage}
    </button>
  );
}

export default function LetterLayout({ info, close, renderType, mode, i = 0 }) {
  const [index, setIndex] = useState(i);

  const [copiedInfo, setCopiedInfo] = useState([...info]);

  const [letterMessage, setLetterMessage] = useState(null);
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
            <>프로필을 거절했어요.</>
          );
          setActionVisible(false);
        }
      });
    } else if (mode === "request" || mode === "detail") {
      const deleteRes = await deleteRequestForMe({
        matching_type: copiedInfo[i].matching_type,
        counter_id: copiedInfo[i].counter_id,
      });
      if (deleteRes) {
        updateLetterMessage(
          copiedInfo,
          setCopiedInfo,
          index,
          <>프로필을 거절했어요.</>
        );

        setActionVisible(false);
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

  // useEffect(() => {
  //   setLetterMessage(copiedInfo[index]?.message);
  // }, [copiedInfo, index]);

  useEffect(() => {
    if (
      mode === "detail" &&
      [1, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(copiedInfo[index].code)
    ) {
      setActionVisible(false);
    }
  }, [mode, info]);

  return (
    <VisibleInfoContext.Provider value={copiedInfo[index]}>
      <div className="overflow-y-scroll overflow-x-hidden flex-nowrap h-letter-height w-letter-width flex flex-row bg-background rounded-xl relative pb-2 shadow-md">
        {copiedInfo.map((i, k) => (
          <Letter key={k} info={i} close={close} index={index}></Letter>
        ))}
      </div>

      {actionVisible && (
        <div className="flex flex-row w-letter-width justify-between mt-3">
          <PositiveButton
            info={copiedInfo[index]}
            mode={mode}
            afterAction={(message, visible, photo = null) => {
              const temp = { ...copiedInfo[index] };
              (() => {
                temp.message = message;
              })();

              setActionVisible(visible);
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
    </VisibleInfoContext.Provider>
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
