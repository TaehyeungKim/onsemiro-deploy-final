import ProgressBar from "components/ProgressBar";
import { useState, useCallback, useRef, useEffect } from "react";
import IconImage from "components/IconImage";
import ArrowLeft from "assets/icons/arrow_left.png";
import closeButton from "assets/icons/ph_x.png";
import SignUpSub from "./sub";
import { MainCustomButton } from "components/CustomButton";
import { IdealChoiceSub } from "./subs/ideal";
import { requestAuthSchool, submitSignUpData } from "apis/api";
import { heightRange, IDEAL_REQ_TYPE } from "assets/asset";
import { FloatingCustomAlertLayout } from "components/Overlay";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  signUpState,
  idealChoiceVisibleState,
  layoutFloatingEndState,
  authSchoolState,
} from "state/state";
import styles from "./index.module.scss";
import { FloatingElement } from "components/Floating";

export default function SignUpPage() {
  const TOTAL_LEVEL_COUNT = 14;

  const [curLevel, setCurLevel] = useState(13);

  const idealChoiceVisible = useRecoilValue(idealChoiceVisibleState);

  return !idealChoiceVisible.visible ? (
    <SignUpMain
      curLevel={curLevel}
      levelSetter={setCurLevel}
      total={TOTAL_LEVEL_COUNT}
    ></SignUpMain>
  ) : (
    <IdealChoiceSub reqType={idealChoiceVisible.reqType} />
  );
}

function SignUpMain({ curLevel, levelSetter, total }) {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [isLayoutFloatingEnd, setIsLayoutFloatigEnd] = useRecoilState(
    layoutFloatingEndState
  );

  const navigate = useNavigate();

  const [stopAlertVisible, setStopAlertVisible] = useState(false);

  const buttonArea = useRef(null);

  const authSchool = useRecoilValue(authSchoolState);

  const executeOnDataFulfilled = useCallback(
    (level, data, execute) => {
      switch (level) {
        case 0:
          if (authSchool.requested && authSchool.verification_code) execute();

          break;
        case 1:
          if (data.kakao_id) execute();
          break;
        case 2:
          if (data.nickname) execute();
          break;
        case 3:
          if (data.gender_identity) execute();
          break;
        case 4:
          if (data.bdsm && data.gender_preference) execute();
          break;
        case 5:
          if (data.appearance && data.height && data.eyelid) execute();
          break;
        case 6:
          if (data.mbti && data.character) execute();
          break;
        case 7:
          if (data.interest && data.interest.length > 0) execute();
          break;
        case 8:
          if (data.meeting_frequency && data.city && data.subRegion) execute();
          break;
        case 9:
          if (data.std && data.photo) execute();
          break;
        case 10:
          if (data.introduction) execute();
          break;
        case 11:
          if (data.prefer_gender_identity) execute();
          break;
        case 12:
          execute();
          break;
        case 13:
          execute();
      }
    },
    [authSchool]
  );

  const changeLevel = useCallback(() => {
    executeOnDataFulfilled(curLevel, signUpData, () => {
      if (curLevel === 13) {
        const preferDataSoap = (key, data) => {
          const target =
            signUpData.preference &&
            signUpData.preference[
              IDEAL_REQ_TYPE.find(
                (r) => signUpData.preference[r] && signUpData.preference[r][key]
              )
            ];

          if (target) {
            switch (key) {
              case "height":
                if (data.preference) {
                  let { height_min, height_max } = target[key];
                  if (height_min === undefined || height_max === undefined)
                    return undefined;
                  if (height_min < 150) height_min = 150;
                  if (height_max > 185) height_max = 185;
                  return `${height_min} ${height_max}`;
                }
              case "age":
                if (data.preference) {
                  const { age_min, age_max } = target[key];
                  if (age_min === undefined || age_max === undefined)
                    return undefined;

                  return `${age_min} ${age_max}`;
                }
              case "location":
                if (data.preference) {
                  const { city, subRegion } = target[key];
                  if (city === undefined || subRegion === undefined)
                    return undefined;
                  return `${city} ${subRegion}`;
                }
              case "mbti":
                if (data.preference) {
                  const { first, second, third, fourth } = target[key];
                  if (!first || !second || !third || !fourth) return undefined;
                  return `${first} ${second} ${third} ${fourth}`;
                }
              default:
                if (data.preference) return target[key];
            }
          }
        };

        const data = {
          kakao_id: signUpData.kakao_id,
          nickname: signUpData.nickname,
          univ: signUpData.univ,
          gender: signUpData.gender_identity,
          gender_preference: signUpData.gender_preference,
          age: signUpData.age,
          bdsm: signUpData.bdsm,
          height: heightRange(signUpData.height),
          weight: signUpData.shape,
          appearance: signUpData.appearance,
          eyelid: signUpData.eyelid,
          mbti: signUpData.mbti,
          character: signUpData.character,
          location:
            signUpData.city &&
            signUpData.subRegion &&
            `${signUpData.city} ${signUpData.subRegion}`,
          hobby: signUpData.interest && [
            ...signUpData.interest.map((interest) => interest.value),
          ],
          introduction: signUpData.introduction,
          match_same_univ: signUpData.same_univ,
          gender_wanted: signUpData.prefer_gender_identity,
          meeting_frequency: signUpData.meeting_frequency,
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

        if (signUpData.preference) {
          const { required, optional_1, optional_2 } = signUpData.preference;
          if (required) {
            const key = Object.keys(required)[0];
            data[`ideal_${key}`] = preferDataSoap(key, signUpData);
            data.ideal_condition.required = key;
          }
          if (optional_1) {
            const key = Object.keys(optional_1)[0];
            data[`ideal_${key}`] = preferDataSoap(key, signUpData);
            data.ideal_condition.optional_1 = key;
          }
          if (optional_2) {
            const key = Object.keys(optional_2)[0];
            data[`ideal_${key}`] = preferDataSoap(key, signUpData);

            data.ideal_condition.optional_2 = key;
          }
        }
        console.log(data);
        submitSignUpData(data, {
          photo: signUpData.photo,
          std_test_report: signUpData.std,
        });
      } else if (curLevel === 0) {
        requestAuthSchool({
          email: authSchool.email,
          univ: authSchool.univ,
          verification_code: authSchool.verification_code,
        }).then((res) => {
          if (res.status === 200) levelSetter(curLevel + 1);
        });
      } else levelSetter(curLevel + 1);
    });
  }, [signUpData, curLevel, authSchool]);

  const buttonActionPerLevel = useCallback(() => {
    switch (curLevel) {
      case 0:
        return { message: "인증 완료하기" };
      default:
        return { message: "다음으로" };
    }
  }, [curLevel]);

  useEffect(() => {
    executeOnDataFulfilled(curLevel, signUpData, () => {
      // console.log(isLayoutFloatingEnd);
      if (isLayoutFloatingEnd) {
        buttonArea.current?.setAttribute("style", "display: flex");
      }
    });
    return () => {
      // console.log("unmount");
      buttonArea.current?.setAttribute("style", "display: none");
      // setIsLayoutFloatigEnd(false);
    };
  }, [signUpData, curLevel, isLayoutFloatingEnd, authSchool]);

  return (
    <div className="box-border pb-11 flex flex-col min-h-screen">
      {stopAlertVisible && (
        <FloatingCustomAlertLayout
          close={() => setStopAlertVisible(false)}
          confirm={() => navigate("/signin")}
        >
          <h4 className="font-bold">
            여기서 멈추시면 온새미로 서비스를 이용할 수 없어요.
          </h4>
          <h4 className="mt-2 font-bold">정말 회원가입을 멈추시겠습니까?</h4>
        </FloatingCustomAlertLayout>
      )}
      <header className="p-2">
        <nav className="flex flex-row justify-between mb-3">
          {curLevel > 0 ? (
            <button
              className={`w-3 block`}
              onClick={() => curLevel > 0 && levelSetter((l) => l - 1)}
            >
              <IconImage src={ArrowLeft} />
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

      <FloatingElement ref={buttonArea}>
        <div className="flex my-auto w-11/12 mx-auto gap-x-10 px-6">
          {curLevel === 13 ? (
            <MainCustomButton
              addedStyle="!bg-background !text-black !mx-0 grow"
              event={{
                onClick: () => {
                  setSignUpData({ ...signUpData, preference: undefined });

                  console.log(signUpData);
                },
              }}
            >
              SKIP
            </MainCustomButton>
          ) : null}

          <MainCustomButton
            event={{
              onClick: () => {
                changeLevel();
              },
            }}
            addedStyle={curLevel === 13 ? "!mx-0 grow" : null}
          >
            {buttonActionPerLevel().message}
          </MainCustomButton>
        </div>
      </FloatingElement>
    </div>
  );
}
