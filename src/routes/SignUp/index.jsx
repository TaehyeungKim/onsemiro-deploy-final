import ProgressBar from "../../components/ProgressBar";
import { useState, createContext, useCallback } from "react";
import IconImage from "../../components/IconImage";
import ArorwLeft from "../../assets/arrow_left.png";
import closeButton from "../../assets/ph_x.png";
import SignUpSub from "./sub";
import { MainCustomButton } from "../../components/CustomButton";
import { IdealChoiceSub } from "./ideal";

export const DataContext = createContext({
  data: {},
  setter: undefined,
});

export const IdealChoiceToggleContext = createContext({
  toggle: undefined,
});

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState({});

  const [idealChoiceVisible, setIdealChoiceVisible] = useState(false);
  return (
    <DataContext.Provider
      value={{
        data: signUpData,
        setter: setSignUpData,
      }}
    >
      <IdealChoiceToggleContext.Provider
        value={{
          toggle: setIdealChoiceVisible,
        }}
      >
        {!idealChoiceVisible ? (
          <SignUpMain signUpData={signUpData}></SignUpMain>
        ) : (
          <IdealChoiceSub />
        )}
      </IdealChoiceToggleContext.Provider>
    </DataContext.Provider>
  );
}

function SignUpMain({ signUpData }) {
  const TOTAL_LEVEL_COUNT = 13;

  const [curLevel, setCurLevel] = useState(12);

  const changeLevel = useCallback(
    (level) => {
      switch (level) {
        case 0:
          console.log(signUpData.auth_self && signUpData.auth_school);
          if (signUpData.auth_self && signUpData.auth_school)
            setCurLevel(level + 1);
          break;
        case 1:
          if (signUpData.kakao_id) setCurLevel(level + 1);
          break;
        case 2:
          if (signUpData.gender_identity) {
            setCurLevel(level + 1);
          }
          break;
        case 3:
          if (signUpData.sexual_tendency && signUpData.sexual_orientation)
            setCurLevel(level + 1);
          break;
        case 4:
          if (signUpData.appearance && signUpData.height && signUpData.eyelid)
            setCurLevel(level + 1);
          break;
        case 5:
          if (signUpData.mbti && signUpData.character) setCurLevel(level + 1);
          break;
        case 6:
          if (signUpData.interest && signUpData.interest.length > 0)
            setCurLevel(level + 1);
          break;
        case 7:
          if (
            signUpData.meeting_frequency &&
            signUpData.city &&
            signUpData.subRegion
          )
            setCurLevel(level + 1);
          break;
        case 8:
          if (signUpData.std && signUpData.photo) setCurLevel(level + 1);
          break;
        case 9:
          if (signUpData.introduction) setCurLevel(level + 1);
          break;
        case 10:
          if (signUpData.prefer_gender_identity) setCurLevel(level + 1);
          break;
        case 11:
          setCurLevel(level + 1);
          break;
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
          <button
            className="w-3 block"
            onClick={() => setCurLevel((l) => l - 1)}
          >
            <IconImage src={ArorwLeft} />
          </button>
          <button className="w-4 block">
            <IconImage src={closeButton} />
          </button>
        </nav>
        <ProgressBar total={TOTAL_LEVEL_COUNT} cur={curLevel + 1} />
        <h5 className="text-right text-xs mt-2">
          {curLevel + 1}/{TOTAL_LEVEL_COUNT}
        </h5>
      </header>

      <SignUpSub level={curLevel}></SignUpSub>

      <div className="flex my-auto w-11/12 mx-auto gap-x-10 px-6">
        {curLevel === 12 ? (
          <MainCustomButton addedStyle="!bg-background !text-black !mx-0 grow">
            SKIP
          </MainCustomButton>
        ) : null}
        <MainCustomButton
          event={{
            onClick: () => {
              changeLevel(curLevel);
            },
          }}
          addedStyle={curLevel === 12 ? "!mx-0 grow" : null}
        >
          {buttonActionPerLevel().message}
        </MainCustomButton>
      </div>
    </>
  );
}
