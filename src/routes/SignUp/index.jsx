import ProgressBar from "../../components/ProgressBar";
import { useState, createContext, useCallback, useContext } from "react";
import IconImage from "../../components/IconImage";
import ArorwLeft from "../../assets/arrow_left.png";
import closeButton from "../../assets/ph_x.png";
import SignUpSub from "./sub";
import { MainCustomButton } from "../../components/CustomButton";
import { IdealChoiceSub } from "./ideal";
import { submitProfile } from "../../apis/api";
import { heightRange } from "../../assets/asset";
import CustomAlertLayout from "../../components/CustomAlert";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext({
  data: {},
  setter: undefined,
});

export const IdealChoiceToggleContext = createContext({
  toggle: undefined,
});

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState({});

  const TOTAL_LEVEL_COUNT = 14;

  const [curLevel, setCurLevel] = useState(13);

  const [idealChoice, setIdealChoice] = useState({
    visible: false,
    type: "",
  });

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

  const navigate = useNavigate();

  const [stopAlertVisible, setStopAlertVisible] = useState(false);

  const changeLevel = useCallback(
    (level) => {
      switch (level) {
        case 0:
          // console.log(signUpData.auth_self && signUpData.auth_school);
          levelSetter(level + 1);
          break;
        case 1:
          if (signUpData.kakao_id) levelSetter(level + 1);
          break;
        case 2:
          if (signUpData.nickname) levelSetter(level + 1);
        case 3:
          if (signUpData.gender_identity) {
            levelSetter(level + 1);
          }
          break;
        case 4:
          if (signUpData.bdsm && signUpData.sexual_orientation)
            levelSetter(level + 1);
          break;
        case 5:
          if (signUpData.appearance && signUpData.height && signUpData.eyelid)
            levelSetter(level + 1);
          break;
        case 6:
          if (signUpData.mbti && signUpData.character) levelSetter(level + 1);
          break;
        case 7:
          if (signUpData.interest && signUpData.interest.length > 0)
            levelSetter(level + 1);
          break;
        case 8:
          if (
            signUpData.meeting_frequency &&
            signUpData.city &&
            signUpData.subRegion
          )
            levelSetter(level + 1);
          break;
        case 9:
          if (signUpData.std && signUpData.photo) levelSetter(level + 1);
          break;
        case 10:
          if (signUpData.introduction) levelSetter(level + 1);
          break;
        case 11:
          if (signUpData.prefer_gender_identity) levelSetter(level + 1);
          break;
        case 12:
          levelSetter(level + 1);
          break;
        case 13:
          const preferDataSoap = (key, data) => {
            const target =
              (data.preference.required && data.preference.required[key]) ||
              (data.preference.optional_1 && data.preference.optional_1[key]) ||
              (data.preference.optional_2 && data.preference.optional_2[key]);
            switch (key) {
              case "height":
                if (data.preference) {
                  const { height_min, height_max } = target;

                  return `${height_min} ${height_max}`;
                }
              case "age":
                if (data.preference) {
                  const { age_min, age_max } = target;
                  return `${age_min} ${age_max}`;
                }
              case "location":
                if (data.preference) {
                  const { city, subRegion } = target;
                  return `${city} ${subRegion}`;
                }
              default:
                if (data.preference) return target;
            }
          };

          const data = {
            kakao_id: dataContext.data.kakao_id,
            nickname: dataContext.data.nickname,
            univ: dataContext.data.univ,
            gender: dataContext.data.gender_identity,
            gender_prefernece: dataContext.data.prefer_gender_identity,
            age: dataContext.data.age,
            bdsm: dataContext.data.bdsm,
            height: heightRange(dataContext.data.height),
            weight: dataContext.data.shape,
            appearance: dataContext.data.appearance,
            eyelid: dataContext.data.eyelid,
            mbti: dataContext.data.mbti,
            character: dataContext.data.character,
            location: `${dataContext.data.city} ${dataContext.data.subRegion}`,
            hobby: [
              ...dataContext.data.interest.map((interest) => interest.value),
            ],
            introduction: dataContext.data.introduction,
            match_same_univ: dataContext.data.same_univ,
            gender_wanted: dataContext.data.prefer_gender_identity,
            meeting_frequency: dataContext.data.meeting_frequency,
            ideal_age: 0,
            ideal_bdsm: "",
            ideal_height: "",
            ideal_appearance: "",
            ideal_eyelid: "",
            ideal_mbti: "",
            ideal_character: "",
            ideal_location: "",
            ideal_condition: {},
          };
          if (dataContext.data.preference) {
            const { required, optional_1, optional_2 } =
              dataContext.data.preference;
            if (required) {
              const key = Object.keys(required)[0];
              data[`ideal_${key}`] = preferDataSoap(key, dataContext.data);
              data.ideal_condition.required = key;
            }
            if (optional_1) {
              const key = Object.keys(optional_1)[0];
              data[`ideal_${key}`] = preferDataSoap(key, dataContext.data);
              data.ideal_condition.optional_1 = key;
            }
            if (optional_2) {
              const key = Object.keys(optional_2)[0];
              data[`ideal_${key}`] = preferDataSoap(key, dataContext.data);

              data.ideal_condition.optional_2 = key;
            }
          }

          submitProfile(data);
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
      {stopAlertVisible && (
        <CustomAlertLayout>
          <h4 className="font-bold">
            여기서 멈추시면 온새미로 서비스를 이용할 수 없어요.
          </h4>
          <h4 className="mt-2 font-bold">정말 회원가입을 멈추시겠습니까?</h4>
          <div className="flex justify-center mt-6 gap-5">
            <MainCustomButton event={{ onClick: () => navigate("/signin") }}>
              확인
            </MainCustomButton>
            <MainCustomButton
              addedStyle="bg-white !text-black"
              event={{ onClick: () => setStopAlertVisible(false) }}
            >
              취소
            </MainCustomButton>
          </div>
        </CustomAlertLayout>
      )}
      <header className="p-2">
        <nav className="flex flex-row justify-between mb-3">
          {curLevel > 0 ? (
            <button
              className={`w-3 block`}
              onClick={() => curLevel > 0 && levelSetter((l) => l - 1)}
            >
              <IconImage src={ArorwLeft} />
            </button>
          ) : null}

          <button
            className={`${curLevel === 0 && "ml-auto"} w-4 block`}
            onClick={() => setStopAlertVisible(true)}
          >
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
