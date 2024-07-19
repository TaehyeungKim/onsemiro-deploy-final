import ProgressBar from "../../components/ProgressBar";
import { useState, createContext, useCallback, useContext } from "react";
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

  const TOTAL_LEVEL_COUNT = 13;

  const [curLevel, setCurLevel] = useState(0);

  const [idealChoice, setIdealChoice] = useState({
    visible: false,
    type: "",
  });

  // useEffect(() => {
  //   console.log(idealChoice);
  // }, [idealChoice]);
  return (
    <DataContext.Provider
      value={{
        data: signUpData,
        setter: setSignUpData,
      }}
    >
      <IdealChoiceToggleContext.Provider
        value={{
          toggle: (open, type, data = undefined) => {
            if (open) setIdealChoice({ visible: open, type });
            else {
              // if (type && data) {
              //   data.type = type;
              //   setSignUpData({
              //     ...signUpData,
              //     preference: {
              //       ...data,
              //     },
              //   });
              // }
              setIdealChoice({ visible: open });
            }
          },
        }}
      >
        {!idealChoice.visible ? (
          <SignUpMain
            signUpData={signUpData}
            curLevel={curLevel}
            levelSetter={setCurLevel}
            total={TOTAL_LEVEL_COUNT}
          ></SignUpMain>
        ) : (
          <IdealChoiceSub reqType={idealChoice.type} />
        )}
      </IdealChoiceToggleContext.Provider>
    </DataContext.Provider>
  );
}

function SignUpMain({ signUpData, curLevel, levelSetter, total }) {
  const dataContext = useContext(DataContext);

  const changeLevel = useCallback(
    (level) => {
      switch (level) {
        case 0:
          console.log(signUpData.auth_self && signUpData.auth_school);
          if (signUpData.auth_self && signUpData.auth_school)
            levelSetter(level + 1);
          break;
        case 1:
          if (signUpData.kakao_id) levelSetter(level + 1);
          break;
        case 2:
          if (signUpData.gender_identity) {
            levelSetter(level + 1);
          }
          break;
        case 3:
          if (signUpData.sexual_tendency && signUpData.sexual_orientation)
            levelSetter(level + 1);
          break;
        case 4:
          if (signUpData.appearance && signUpData.height && signUpData.eyelid)
            levelSetter(level + 1);
          break;
        case 5:
          if (signUpData.mbti && signUpData.character) levelSetter(level + 1);
          break;
        case 6:
          if (signUpData.interest && signUpData.interest.length > 0)
            levelSetter(level + 1);
          break;
        case 7:
          if (
            signUpData.meeting_frequency &&
            signUpData.city &&
            signUpData.subRegion
          )
            levelSetter(level + 1);
          break;
        case 8:
          if (signUpData.std && signUpData.photo) levelSetter(level + 1);
          break;
        case 9:
          if (signUpData.introduction) levelSetter(level + 1);
          break;
        case 10:
          if (signUpData.prefer_gender_identity) levelSetter(level + 1);
          break;
        case 11:
          levelSetter(level + 1);
          break;
        case 12:
          console.log(dataContext.data);
          break;
      }
    },
    [signUpData, curLevel]
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
            onClick={() => levelSetter((l) => l - 1)}
          >
            <IconImage src={ArorwLeft} />
          </button>
          <button className="w-4 block">
            <IconImage src={closeButton} />
          </button>
        </nav>
        <ProgressBar total={total} cur={curLevel + 1} />
        <h5 className="text-right text-xs mt-2">
          {curLevel + 1}/{total}
        </h5>
      </header>

      <SignUpSub level={curLevel}></SignUpSub>

      <div className="flex my-auto w-11/12 mx-auto gap-x-10 px-6">
        {curLevel === 12 ? (
          <MainCustomButton
            addedStyle="!bg-background !text-black !mx-0 grow"
            event={{
              onClick: () => {
                dataContext.setter({
                  ...dataContext.data,
                  preference: undefined,
                });
                console.log(dataContext.data);
              },
            }}
          >
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
