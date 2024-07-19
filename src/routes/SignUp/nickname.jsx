import { DataContext } from ".";
import { CustomTextInput, FloatingSection } from "./components";
import { useContext, useEffect, useState } from "react";

export default function NickNameInput() {
  const [nicknameInput, setNicknameInput] = useState("");

  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, nickname: nicknameInput });
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
