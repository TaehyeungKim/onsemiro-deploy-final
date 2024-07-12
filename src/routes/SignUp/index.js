import ProgressBar from "../../components/ProgressBar";
import { useState, useMemo, createContext, useCallback } from "react";
import IconImage from "../../components/IconImage";
import ArorwLeft from "../../assets/arrow_left.png";
import closeButton from "../../assets/ph_x.png";
import SignUpSub from "./sub";
import { MainCustomButton } from "../../components/CustomButton";

export const DataContext = createContext({
  data: {},
  setter: undefined,
});

export default function SignUpPage() {
  const TOTAL_LEVEL_COUNT = 14;

  const [curLevel, setCurLevel] = useState(5);

  const [signUpData, setSignUpData] = useState({});

  const changeLevel = useCallback(
    (level) => {
      switch (level) {
        case 0:
          if (signUpData.auth_self && signUpData.auth_school)
            setCurLevel(level + 1);
        case 1:
          if (signUpData.kakao_id) setCurLevel(level + 1);
        case 2:
          if (signUpData.gender_identity) {
            setCurLevel(level + 1);
          }
        case 3:
          if (signUpData.sexual_tendency && signUpData.sexual_orientation)
            setCurLevel(level + 1);
        case 4:
          if (signUpData.appearance && signUpData.height && signUpData.eyelid)
            setCurLevel(level + 1);
      }
    },
    [signUpData]
  );

  const buttonActionPerLevel = useCallback(() => {
    switch (curLevel) {
      case 0:
        return { message: "인증 완료하기" };
      default:
        return { message: "다음으로" };
    }
  }, [curLevel]);

  return (
    <>
      <header className="p-2">
        <nav className="flex flex-row justify-between mb-3">
          <div className="w-3">
            <IconImage src={ArorwLeft} />
          </div>
          <div className="w-4">
            <IconImage src={closeButton} />
          </div>
        </nav>
        <ProgressBar total={TOTAL_LEVEL_COUNT} cur={curLevel + 1} />
        <h5 className="text-right text-xs mt-2">
          {curLevel + 1}/{TOTAL_LEVEL_COUNT}
        </h5>
      </header>
      <DataContext.Provider
        value={{
          data: signUpData,
          setter: setSignUpData,
        }}
      >
        <SignUpSub level={curLevel}></SignUpSub>
      </DataContext.Provider>
      <MainCustomButton event={{ onClick: () => changeLevel(curLevel) }}>
        {buttonActionPerLevel().message}
      </MainCustomButton>
    </>
  );
}
