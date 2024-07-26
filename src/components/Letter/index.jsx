import IconImage from "../IconImage";
import { useEffect, useMemo, useContext } from "react";
import { VisibleInfoContext } from "layouts/LetterLayout";
import ProfileWOPhoto from "assets/profile1.png";
import ProfileWPhoto from "assets/profile2.png";

import check from "assets/icons/check.png";
import AuthLabel from "./authlabel";
import ProfileLine from "./profileline";
import {
  filterValidProfileKey,
  keyMapWithKorean,
  TIME_MAP,
} from "assets/asset";
import { messageFrame } from "assets/message/message";
import { RECOMMEND_MESSAGE_MAP } from "assets/asset";

import "./index.css";

export default function Letter({ info, index, message }) {
  const keys = useMemo(() => filterValidProfileKey(info), [info]);

  const visibleInfoContext = useContext(VisibleInfoContext);

  useEffect(() => console.log(info), []);

  return (
    <div
      className="letterFrame flex flex-col items-center w-full shrink-0 px-3"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <header className="top-0 w-4/5 flex flex-row items-center justify-center py-3 border-b-2 ">
        <h5 className="tracking-wider">
          {`${info.date} ${TIME_MAP[info.time].label} 쪽지`}
        </h5>
      </header>
      <div className="w-full bg-main text-center rounded-2xl shadow-lg py-2 my-5">
        <p className="w-full">{info.message}</p>
      </div>
      <section className="w-full mb-2">
        <h4 className="text-sm">기본 정보</h4>
        <div className="rounded-lg border-slate-400 border-2 p-1">
          <div className="flex flex-row">
            {info.approval?.photo_approval_status ? (
              <AuthLabel>본인 인증</AuthLabel>
            ) : null}
            {info.approval?.email_approval_status ? (
              <AuthLabel>학교 인증</AuthLabel>
            ) : null}
          </div>
          <p className="text-base">
            {info.univ}에 재학중인, {info.age}세 {info.gender}
          </p>
        </div>
      </section>
      <div className="w-full mt-3 relative">
        <div className="w-1/4 m-auto">
          <IconImage src={info.photo ?? ProfileWOPhoto} />
        </div>
        {info.std_test_approval_status ? (
          <div className="bg-sub rounded-xl flex absolute top-0 right-10 items-center w- px-3 py-1 box-border shadow-lg">
            <div className="w-4 mr-2">
              <IconImage src={check}></IconImage>
            </div>
            <p className="text-center text-white text-xs">
              STD 3종 <br />
              검사 완료
            </p>
          </div>
        ) : null}
      </div>
      <section className={`w-full rounded-3xl block`}>
        {/* <IconImage src={messageFrame()}></IconImage> */}
        <div className="w-full flex items-center">
          {messageFrame()}
          <h4 className="absolute p-4">{info.introduction}</h4>
        </div>
      </section>

      <section className="w-full px-3">
        <h4 className="text-sm">상세 정보</h4>
        <div className="rounded-lg border-slate-400 border-2 p-1">
          {keys.map((key) =>
            key === "eyelid" ? null : (
              <ProfileLine
                label={keyMapWithKorean[key]}
                value={
                  key === "appearance"
                    ? info[key] &&
                      `${info[key]} ${info["eyelid"] && info["eyelid"]}`
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
