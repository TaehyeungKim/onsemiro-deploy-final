import { FloatingSection } from "./components";
import { useState, useContext, useEffect } from "react";
import { DataContext } from ".";

export default function Introduction() {
  const dataContext = useContext(DataContext);

  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, introduction: introduction });
  }, [introduction]);

  return (
    <>
      <FloatingSection>
        <h5>
          자기소개가 있다면, 앞 문항을 통해 완전히 드러내지 못한 나를 보여줄 수
          있어요!
        </h5>
      </FloatingSection>
      <FloatingSection>
        <h5>간단한 자기소개를 적어주세요.</h5>
        <div className="w-11/12 aspect-square bg-background rounded-lg mx-auto mt-4">
          <textarea
            className="block w-full h-full resize-none outline-none p-4 bg-transparent"
            placeholder="자기소개를 적어주세요."
            onChange={(e) => setIntroduction(e.target.value)}
          ></textarea>
        </div>
      </FloatingSection>
    </>
  );
}
