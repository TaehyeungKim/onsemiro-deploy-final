import IconImage from "../IconImage";

import CheckedLetter from "../../assets/main-letter-checked.png";
import ClosedLetter from "../../assets/main-letter-closed.png";

export function LetterArrive() {
  return (
    <>
      {/* <div className="w-80">
        <IconImage src={Letter} />
      </div> */}
      <h5 className="bg-sub py-6 w-full text-center">
        새로운 쪽지가 도착했어요!
      </h5>
    </>
  );
}

export function LetterChecked() {
  return (
    <>
      <div className="w-80">
        <IconImage src={CheckedLetter} />
      </div>
      <h5>사진 요청을 보냈어요!</h5>
    </>
  );
}

export function LetterClosed({ time }) {
  return (
    <>
      <div className="w-80">
        <IconImage src={ClosedLetter} />
      </div>
      <h5>{time} 후에 새로운 쪽지를 받아볼 수 있어요!</h5>
    </>
  );
}

export function RequestHold({ count }) {
  return (
    <>
      <div
        className={`w-full relative ${!count ? "bg-sub-pale" : "bg-sub"} py-6`}
      >
        <h5 className="text-center">결정하지 않은 요청이 {count}개 있어요</h5>
      </div>
    </>
  );
}
