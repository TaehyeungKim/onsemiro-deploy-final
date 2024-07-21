import { CustomTextInput, FloatingSection } from "components/CustomInputs";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function NickNameInput() {
  const [nicknameInput, setNicknameInput] = useState("");

  const [signUpData, setSignUpData] = useRecoilState(signUpState);

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
          event={{ onChange: setNicknameInput }}
        />
      </FloatingSection>
    </>
  );
}
