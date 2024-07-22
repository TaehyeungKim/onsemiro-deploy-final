import { CustomTextInput } from "components/CustomInputs";
import { FloatingSection } from "components/Floating";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function NickNameInput() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);
  const [nicknameInput, setNicknameInput] = useState(signUpData.nickname ?? "");

  useEffect(() => {
    setSignUpData({ ...signUpData, nickname: nicknameInput });
  }, [nicknameInput]);

  return (
    <>
      <FloatingSection>
        <h5>온새미로에서 사용할 닉네임을 입력해주세요.</h5>
      </FloatingSection>
      <FloatingSection>
        <CustomTextInput
          id="nickname"
          placeholder="닉네임 입력하기"
          onChange={(e) => setNicknameInput(e.target.value)}
          defaultValue={nicknameInput}
        />
      </FloatingSection>
    </>
  );
}
