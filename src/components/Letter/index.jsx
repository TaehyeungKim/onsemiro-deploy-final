import {
  BasicInfo,
  DetailInfo,
  LetterHeader,
  LetterMessage,
  ProfileImage,
  SelfIntroduction,
} from "./sections";

import "./index.css";

export default function Letter({ info, index, close }) {
  return (
    <div
      className="letterFrame flex flex-col items-center w-full shrink-0"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <LetterHeader info={info} close={close} />
      <LetterMessage info={info} />
      <BasicInfo info={info} />
      <ProfileImage info={info} />
      <SelfIntroduction info={info} />
      <DetailInfo info={info} />
    </div>
  );
}
