import { useMemo, useEffect } from "react";
import { filterValidProfileKey, keyMapWithKorean } from "assets/asset";
import { soapProfileLineRender } from "layouts/LetterLayout/utils";
import IconImage, { RoundedProfileImage } from "components/IconImage";
import messageFrom from "assets/message/message.png";
import check from "assets/icons/check.png";
import check_black from "assets/icons/check_black.png";
import { TIME_MAP } from "assets/asset";
import closeIcon from "assets/icons/ph_x.png";

function ProfileLine({ label, value }) {
  return (
    <div className="flex flex-row justify-between items-center my-1">
      <div className="block shrink-0 mr-11">{label}</div>
      <div className="flex flex-wrap justify-end gap-1">
        {value && typeof value === "object" ? (
          Object.getPrototypeOf(value).map &&
          value.map((v, i) => (
            <div
              key={i}
              className="inline-block bg-input rounded-lg text-right w-fit p-1 ml-2"
            >
              {v}
            </div>
          ))
        ) : (
          <div className="inline-block bg-input rounded-lg text-right w-fit p-1">
            {value}
          </div>
        )}
      </div>
    </div>
  );
}

export function DetailInfo({ info }) {
  const keys = useMemo(
    () => filterValidProfileKey(info).filter((k) => k !== "eyelid"),
    [info]
  );

  return (
    <section className="w-full px-3 py-4">
      <h4 className="text-md py-2">상세 정보</h4>
      <div className="rounded-lg border-slate-400 border-2 px-5 py-2">
        {keys.map((key) => (
          <ProfileLine
            label={keyMapWithKorean[key]}
            value={soapProfileLineRender(key, info)}
            key={key}
          ></ProfileLine>
        ))}
      </div>
    </section>
  );
}

export function SelfIntroduction({ info }) {
  return (
    <section className={`px-5 w-full rounded-3xl block`}>
      <div className="flex-col items-center">
        <div className="w-12 ml-[25%]">
          <IconImage src={messageFrom} />
        </div>
        <div className="w-full bg-mint text-center rounded-2xl shadow-lg">
          <h4 className="w-full p-4 break-all">{info.introduction}</h4>
        </div>
      </div>
    </section>
  );
}

export function ProfileImage({ info }) {
  return (
    <section className="px-5 w-full mt-3 relative">
      <RoundedProfileImage className={"w-1/4"} photo_url={info.photo} />
      <div className="bg-sub rounded-xl flex absolute top-0 right-10 items-center w- px-3 py-1 box-border shadow-lg">
        <div className="w-4 mr-2">
          <IconImage src={check}></IconImage>
        </div>
        <p className="text-center text-white text-xs">
          STD 3종 <br />
          검사 완료
        </p>
      </div>
    </section>
  );
}

function AuthLabel({ children }) {
  return (
    <label className="flex flex-row bg-mint text-black items-center rounded-lg px-4 py-1 text-sm shadow-md mx-1">
      <div className="w-4 mr-2">
        <IconImage src={check_black}></IconImage>
      </div>
      {children}
    </label>
  );
}

export function BasicInfo({ info }) {
  return (
    <section className="px-5 w-full mb-2">
      <h4 className="text-sm mb-1">기본 정보</h4>
      <div className="rounded-lg border-slate-400 border-2 p-2 flex flex-col gap-y-2">
        <div className="flex flex-row">
          <AuthLabel>본인 인증</AuthLabel>
          <AuthLabel>학교 인증</AuthLabel>
        </div>
        <p className="text-base">
          {info.univ}에 재학중인, {info.age}세 {info.gender}
        </p>
      </div>
    </section>
  );
}

export function LetterHeader({ info, close }) {
  return (
    <header className="sticky top-0 w-full flex bg-background flex-row items-center justify-center py-3 border-b-2 z-40">
      <h5 className="tracking-wider">
        {`${info.date} ${TIME_MAP[info.time].label} 쪽지`}
      </h5>
      <button className="w-8 absolute top-2 right-2 z-10" onClick={close}>
        <IconImage src={closeIcon}></IconImage>
      </button>
    </header>
  );
}

export function LetterMessage({ info }) {
  return (
    <div className="px-8 mx-3 bg-main text-center rounded-2xl shadow-lg py-2 my-5">
      <p className="w-full">{info.message}</p>
    </div>
  );
}
