import { FloatingSection } from "components/Floating";
import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function Introduction() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [introduction, setIntroduction] = useState(
    signUpData.introduction ?? ""
  );

  useEffect(() => {
    setSignUpData({ ...signUpData, introduction });
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
        <div className="w-full">
          <h5>간단한 자기소개를 적어주세요.</h5>
          <div className="w-11/12 aspect-square bg-input rounded-lg mx-auto mt-4">
            <textarea
              className="block w-full h-full resize-none outline-none p-4 bg-transparent"
              placeholder="자기소개를 적어주세요."
              onChange={(e) => setIntroduction(e.target.value)}
              defaultValue={introduction}
            ></textarea>
          </div>
        </div>
      </FloatingSection>
    </>
  );
}
