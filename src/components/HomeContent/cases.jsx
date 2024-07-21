import IconImage from "../IconImage";

export function LetterArrive() {
  return (
    <>
      <h5 className="bg-sub py-6 w-full text-center">
        새로운 쪽지가 도착했어요!
      </h5>
    </>
  );
}

export function LetterChecked() {
  return (
    <>
      <h5>사진 요청을 보냈어요!</h5>
    </>
  );
}

export function LetterClosed({ time }) {
  return (
    <>
      <h5>{time} 후에 새로운 쪽지를 받아볼 수 있어요!</h5>
    </>
  );
}
