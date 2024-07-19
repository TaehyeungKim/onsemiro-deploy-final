import IconImage from "../../components/IconImage";
import closeIcon from "../../assets/ph_x.png";
import Letter from "../../components/Letter";
import { useMemo, useState } from "react";
import { timeMatch } from "../../components/MainIconSection/utils";

export default function LetterLayout({ info, close, i = 0 }) {
  const [index, setIndex] = useState(i);
  const timeInfo = useMemo(
    () => info.length > 0 && timeMatch(info[index].time),
    [info, index]
  );

  return (
    <div className="fixed w-screen h-screen bg-mask top-0 left-0 z-30 flex items-center justify-center flex-col">
      <div className="overflow-y-scroll overflow-x-hidden flex-nowrap h-4/5 w-letter-width flex flex-row bg-letter bg-cover bg-center bg-no-repeat rounded-xl relative pb-2">
        <button className="w-8 absolute top-2 right-2 z-10" onClick={close}>
          <IconImage src={closeIcon}></IconImage>
        </button>
        {info.map((i, k) => (
          <Letter key={k} info={i} timeInfo={timeInfo} index={index}></Letter>
        ))}
      </div>
      <div className="flex flex-row w-letter-width justify-between mt-3">
        <button
          className={`${
            info[index].matching_type === 2 ? "bg-sub" : "bg-main"
          } text-white w-44 p-2 rounded-xl shadow-lg text-lg`}
        >
          {info[index].matching_type === 2 ? "사진 요청" : "매칭 요청"}
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
    </div>
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
