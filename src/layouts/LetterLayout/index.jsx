import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import Letter from "components/Letter";
import { useCallback, useMemo, useState } from "react";
// import { timeMatch } from "../../components/HomeContent/utils";
import {
  requestMatching,
  getRecommend,
  getRequestForMe,
  acceptMatching,
} from "apis/api";

export default function LetterLayout({
  info,
  close,
  requestToMe = false,
  i = 0,
}) {
  const [index, setIndex] = useState(i);
  // const timeInfo = useMemo(
  //   () => info.length > 0 && timeMatch(info[index].time),
  //   [info, index]
  // );

  const apiCall = useCallback(
    async (data) => {
      if (!requestToMe) {
        if (info[index].matching_type === 1)
          return requestMatching(data).then((res) => {
            if (res.status === 200 || res.status === 201) {
              getRecommend();
              close();
            }
          });
        else return;
      }
      if (info[index].matching_type === 1)
        return acceptMatching(data).then((res) => {
          if (res.status === 200 || res.status === 201) {
            getRequestForMe();
            close();
          }
        });
      else return;
    },
    [info, requestToMe, index]
  );

  const buttonMessage = useMemo(() => {
    if (requestToMe)
      return info[index].matching_type === 1 ? "매칭 수락" : "사진 공개";
    else return info[index].matching_type === 1 ? "매칭 요청" : "사진 요청";
  }, [info, requestToMe, index]);

  const buttonColor = useMemo(() => {
    return info[index].matching_type === 1 ? "bg-main" : "bg-sub";
  }, [info, index]);

  return (
    // <div className="fixed w-screen h-screen bg-mask top-0 left-0 z-30 flex items-center justify-center flex-col">
    <>
      <div className="overflow-y-scroll overflow-x-hidden flex-nowrap h-letter-height w-full flex flex-row bg-letter bg-cover bg-center bg-no-repeat rounded-xl relative pb-2 shadow-md">
        <button className="w-8 absolute top-2 right-2 z-10" onClick={close}>
          <IconImage src={closeIcon}></IconImage>
        </button>
        {info.map((i, k) => (
          <Letter key={k} info={i} index={index}></Letter>
        ))}
      </div>
      <div className="flex flex-row w-letter-width justify-between mt-3">
        <button
          onClick={() => apiCall({ counter_id: info[index].id })}
          className={`${buttonColor} text-white w-44 p-2 rounded-xl shadow-lg text-lg`}
        >
          {buttonMessage}
        </button>
        <button className="bg-[#A9A9A9] text-white w-44 p-2 rounded-xl shadow-lg text-lg">
          거절
        </button>
      </div>
      {info.length > 1 ? (
        <Indexation
          index={index}
          length={info.length}
          handler={setIndex}
        ></Indexation>
      ) : null}
    </>
    // </div>
  );
}

function Indexation({ index, length, handler }) {
  return (
    <div className="flex flex-row rounded-lg bg-mask-deeper p-2">
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
  );
}
