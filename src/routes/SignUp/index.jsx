import ProgressBar from "components/ProgressBar";
import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import IconImage from "components/IconImage";
import ArrowLeft from "assets/icons/arrow_left.png";
import closeButton from "assets/icons/ph_x.png";
import SignUpSub from "./sub";
import { MainCustomButton } from "components/CustomButton";
import { IdealChoiceSub } from "./subs/ideal";
import { requestAuthSchool, submitSignUpData } from "apis/api";

import { SignUpCancleAlert } from "components/Overlay";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  signUpState,
  idealChoiceVisibleState,
  layoutFloatingEndState,
  authSchoolState,
} from "state/state";
import { dataSoapBeforeSubmit, executeOnDataFulfilled } from "./utils";
import { FloatAndShrinkElement, FloatingElement } from "components/Floating";

export default function SignUpPage() {
  const TOTAL_LEVEL_COUNT = 14;

  const [curLevel, setCurLevel] = useState(0);

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

  const isLayoutFloatingEnd = useRecoilValue(layoutFloatingEndState);

  const navigate = useNavigate();

  const [stopAlertVisible, setStopAlertVisible] = useState(false);

  const [buttonElements, setButtonElements] = useState(null);

  const authSchool = useRecoilValue(authSchoolState);

  const changeLevel = useCallback(() => {
    executeOnDataFulfilled(curLevel, signUpData, () => {
      if (curLevel === 13) {
        const data = dataSoapBeforeSubmit(signUpData);

        submitSignUpData(data, {
          photo: signUpData.photo,
          std_test_report: signUpData.std,
        });
      } else if (curLevel === 0) {
        const { email, univ, verification_code } = authSchool;
        requestAuthSchool({ email, univ, verification_code }).then((res) => {
          if (res.status === 200) levelSetter(curLevel + 1);
        });
      } else {
        levelSetter(curLevel + 1);
      }
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

  const [transitionAbleState, setTransitionAbleState] = useState(false);

  useEffect(() => {
    executeOnDataFulfilled(curLevel, signUpData, () => {
      if (isLayoutFloatingEnd) {
        setTransitionAbleState(true);
      }
    });
    return () => {
      setTransitionAbleState(false);
    };
  }, [signUpData, isLayoutFloatingEnd, authSchool]);

  useLayoutEffect(() => {
    if (!isLayoutFloatingEnd) setButtonElements(null);
    else
      setButtonElements(
        <div className="flex my-auto w-11/12 mx-auto gap-x-10 px-6">
          {curLevel === 13 ? (
            <MainCustomButton
              addedStyle="!bg-background !text-black !mx-0 grow"
              onClick={() => {
                setSignUpData({ ...signUpData, preference: undefined });
              }}
            >
              SKIP
            </MainCustomButton>
          ) : null}

          <MainCustomButton
            onClick={() => changeLevel()}
            addedStyle={curLevel === 13 ? "!mx-0 grow" : null}
          >
            {buttonActionPerLevel().message}
          </MainCustomButton>
        </div>
      );
  }, [curLevel, isLayoutFloatingEnd, signUpData, authSchool]);

  return (
    <div className="box-border pb-11 flex flex-col min-h-screen">
      {stopAlertVisible && (
        <SignUpCancleAlert
          close={() => setStopAlertVisible(false)}
          confirm={() => navigate("/signin")}
        >
          <h4 className="font-bold">
            여기서 멈추시면 온새미로 서비스를 이용할 수 없어요.
          </h4>
          <h4 className="mt-2 font-bold">정말 회원가입을 멈추시겠습니까?</h4>
        </SignUpCancleAlert>
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

      <FloatingElement condition={transitionAbleState}>
        {buttonElements}
      </FloatingElement>
    </div>
  );
}
