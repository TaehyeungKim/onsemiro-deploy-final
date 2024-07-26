import IconImage from "../IconImage";
import { useEffect, useMemo, useContext } from "react";
import { VisibleInfoContext } from "layouts/LetterLayout";
import ProfileWOPhoto from "assets/profile1.png";
import ProfileWPhoto from "assets/profile2.png";
import closeIcon from "assets/icons/ph_x.png";

import check from "assets/icons/check.png";
import AuthLabel from "./authlabel";
import ProfileLine from "./profileline";
import {
  filterValidProfileKey,
  HeightRange,
  keyMapWithKorean,
  TIME_MAP,
} from "assets/asset";
import messageFrom from "assets/message/message.png";
import { RECOMMEND_MESSAGE_MAP } from "assets/asset";

import { TARGET } from "apis/api";

import "./index.css";

export default function Letter({ info, index, message, close }) {
  const keys = useMemo(() => filterValidProfileKey(info), [info]);

  const visibleInfoContext = useContext(VisibleInfoContext);

  useEffect(() => console.log(info), []);

  return (
    <div
      className="letterFrame flex flex-col items-center w-full shrink-0"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <header className="sticky top-0 w-full flex bg-background flex-row items-center justify-center py-3 border-b-2 z-40">
        <h5 className="tracking-wider">
          {`${info.date} ${TIME_MAP[info.time].label} 쪽지`}
        </h5>
        <button className="w-8 absolute top-2 right-2 z-10" onClick={close}>
          <IconImage src={closeIcon}></IconImage>
        </button>
      </header>
      <div className="px-8 mx-3 bg-main text-center rounded-2xl shadow-lg py-2 my-5">
        <p className="w-full">{info.message}</p>
      </div>
      <section className="px-5 w-full mb-2">
        <h4 className="text-sm mb-1">기본 정보</h4>
        <div className="rounded-lg border-slate-400 border-2 p-2 flex flex-col gap-y-2">
          {/* <div className="flex flex-row">
            {info.approval?.photo_approval_status ? (
              <AuthLabel>본인 인증</AuthLabel>
            ) : null}
            {info.approval?.email_approval_status ? (
              <AuthLabel>학교 인증</AuthLabel>
            ) : null}
          </div> */}
          <div className="flex flex-row">
            <AuthLabel>본인 인증</AuthLabel>
            <AuthLabel>학교 인증</AuthLabel>
          </div>
          <p className="text-base">
            {info.univ}에 재학중인, {info.age}세 {info.gender}
          </p>
        </div>
      </section>
      <div className="px-5 w-full mt-3 relative">
        <div className="w-1/4 m-auto">
          <IconImage
            src={info.photo ? `${TARGET}/${info.photo}` : ProfileWOPhoto}
          />
        </div>
        <div className="bg-sub rounded-xl flex absolute top-0 right-10 items-center w- px-3 py-1 box-border shadow-lg">
          <div className="w-4 mr-2">
            <IconImage src={check}></IconImage>
          </div>
          <p className="text-center text-white text-xs">
            STD 3종 <br />
            검사 완료
          </p>
        </div>
        {/* {info.std_test_approval_status ? (
          <div className="bg-sub rounded-xl flex absolute top-0 right-10 items-center w- px-3 py-1 box-border shadow-lg">
            <div className="w-4 mr-2">
              <IconImage src={check}></IconImage>
            </div>
            <p className="text-center text-white text-xs">
              STD 3종 <br />
              검사 완료
            </p>
          </div>
        ) : null} */}
      </div>
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

      <section className="w-full px-3 py-4">
        <h4 className="text-md py-2">상세 정보</h4>
        <div className="rounded-lg border-slate-400 border-2 px-5 py-2">
          {keys.map((key) =>
            key === "eyelid" ? null : (
              <ProfileLine
                label={keyMapWithKorean[key]}
                value={
                  key === "appearance"
                    ? info[key] &&
                      `${info[key]} ${info["eyelid"] && info["eyelid"]}`
                    : key === "height"
                    ? info[key] && HeightRange[info[key]]
                    : key === "meeting_frequency"
                    ? info[key] && `주 ${info[key]}회`
                    : info[key] ?? null
                }
                key={key}
              ></ProfileLine>
            )
          )}
        </div>
      </section>
    </div>
  );
}
