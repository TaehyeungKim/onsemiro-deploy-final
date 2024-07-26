import {
  FloatingSection,
  FloatingElement,
  FloatAndShrinkElement,
} from "components/Floating";

import { useState, useCallback, useRef, useEffect } from "react";
import IconImage from "components/IconImage";
import ArrowLeft from "assets/icons/arrow_left.png";
import { Conditions } from "assets/asset";
import { MainCustomButton } from "components/CustomButton";
import {
  IdealAgeSet,
  IdealAppearanceSet,
  IdealCharacterSet,
  IdealEyelidSet,
  IdealHeightSet,
  IdealLocationSet,
  IdealMBTISet,
  IdealSexualSet,
  IdealShapeSet,
} from "../conditionSet";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {
  signUpState,
  idealChoiceVisibleState,
  layoutFloatingEndState,
} from "state/state";
import { IDEAL_REQ_TYPE } from "assets/asset";

function ConditionSelect({ label, reqType }) {
  const signUpData = useRecoilValue(signUpState);
  const setIdealChoiceVisible = useSetRecoilState(idealChoiceVisibleState);

  return (
    <div className="bg-input flex flex-col items-center w-full rounded-lg">
      <h3 className="py-7 text-2xl text-center font-bold">{label}</h3>
      {!signUpData.preference || !signUpData.preference[reqType] ? (
        <button
          className="h-12 mb-8 block w-fit after:content-[''] after:w-full after:block after:border-b-2 after:border-main text-main"
          onClick={() => setIdealChoiceVisible({ visible: true, reqType })}
        >
          고르기
        </button>
      ) : (
        <button
          className=" bg-input-less-darker w-4/5 py-3 flex justify-center items-center rounded-lg mb-5"
          onClick={() => setIdealChoiceVisible({ visible: true, reqType })}
        >
          <div className="w-5 mr-2">
            <IconImage
              src={
                Conditions.find(
                  (condition) =>
                    condition.condition ===
                    Object.keys(signUpData.preference[reqType])[0]
                )?.icon
              }
            />
          </div>
          {
            Conditions.find(
              (condition) =>
                condition.condition ===
                Object.keys(signUpData.preference[reqType])[0]
            )?.label
          }
        </button>
      )}
    </div>
  );
}

export default function Ideal() {
  return (
    <>
      <FloatingSection>
        <h5 className="mt-5 leading-6">
          온새미로가 당신께 맞는 이상형을 추천해드릴 수 있게 "이것만은 있으면
          좋겠다!" 필수 조건 1개와 "이런 사람이 좋던데?" 선택 조건 2개{"("}
          1,2순위{")"}를 골라주세요.
        </h5>
      </FloatingSection>
      <FloatingSection>
        <div className="flex flex-col w-11/12 mx-auto gap-y-3">
          <div className="flex w-full">
            <ConditionSelect label={"필수 조건"} reqType={"required"} />
          </div>
          <div className="flex w-full gap-x-3">
            <ConditionSelect label={<>선택 조건<br/>1순위</>} reqType={"optional_1"} />
            <ConditionSelect label={<>선택 조건<br/>2순위</>} reqType={"optional_2"} />
          </div>
        </div>
      </FloatingSection>
    </>
  );
}

function ConditionSet({ type, close, reqType }) {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);
  const setIdealChoiceVisible = useSetRecoilState(idealChoiceVisibleState);

  const [isLayoutFloatingEnd, setIsLayoutFloatingEnd] = useRecoilState(
    layoutFloatingEndState
  );

  const [conditionSetData, setConditionSetData] = useState(
    signUpData.preference ??
      IDEAL_REQ_TYPE.reduce((prev, cur) => {
        prev[cur] = undefined;
        return prev;
      }, {})
  );

  // useEffect(() => {
  //   // console.log(isLayoutFloatingEnd, buttonArea.current);
  //   if (isLayoutFloatingEnd)
  //     // buttonArea.current?.setAttribute("style", "display: block");
  //     return () => {
  //       // buttonArea.current?.setAttribute("style", "display: none");
  //       // setIsLayoutFloatigEnd(false);
  //     };
  // }, [isLayoutFloatingEnd]);

  return (
    <>
      <div className="flex flex-col grow">
        <header className="p-3">
          <button className="w-5 block" onClick={close}>
            <IconImage src={ArrowLeft} />
          </button>
        </header>
        {(() => {
          switch (type.condition) {
            case "age":
              return (
                <IdealAgeSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "bdsm":
              return (
                <IdealSexualSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "weight":
              return (
                <IdealShapeSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "height":
              return (
                <IdealHeightSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "appearance":
              return (
                <IdealAppearanceSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "eyelid":
              return (
                <IdealEyelidSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "mbti":
              return (
                <IdealMBTISet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "character":
              return (
                <IdealCharacterSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
            case "location":
              return (
                <IdealLocationSet
                  reqType={reqType}
                  setter={setConditionSetData}
                  tempData={conditionSetData}
                />
              );
          }
        })()}
      </div>
      <div className="h-14">
        <FloatingElement condition={isLayoutFloatingEnd}>
          <MainCustomButton
            onClick={() => {
              setSignUpData({
                ...signUpData,
                preference: {
                  ...conditionSetData,
                },
              });
              setIdealChoiceVisible({ visible: false, reqType: undefined });
            }}
          >{`'${type.label}' 선택하기`}</MainCustomButton>
        </FloatingElement>
      </div>
    </>
  );
}

export function IdealChoiceSub({ reqType }) {
  const signUpData = useRecoilValue(signUpState);
  const setIdealChoiceVisible = useSetRecoilState(idealChoiceVisibleState);

  const [isConditionSetVisible, setIsConditionSetVisible] = useState(false);
  const [type, setType] = useState(undefined);

  const blockChoices = useCallback(
    (condition) => {
      const others = IDEAL_REQ_TYPE.filter((key) => key !== reqType);

      return others.some(
        (key) =>
          signUpData.preference &&
          signUpData.preference[key]?.hasOwnProperty(condition)
      );
    },
    [reqType]
  );

  if (isConditionSetVisible)
    return (
      <div className="pb-10 flex flex-col min-h-screen">
        <ConditionSet
          type={type}
          reqType={reqType}
          close={() => setIsConditionSetVisible(false)}
        />
      </div>
    );

  return (
    <>
      <header className="p-3">
        <button
          className="w-5 block"
          onClick={() => {
            setIdealChoiceVisible({ visible: false, reqType: undefined });
          }}
        >
          <IconImage src={ArrowLeft} />
        </button>
      </header>
      <div className="w-full px-4 pt-3">
        <FloatingSection>
          <h5 className="text-lg">원하는 이상형의 조건을 선택해주세요.</h5>
        </FloatingSection>
        <FloatingSection>
          <div className="w-11/12 mx-auto">
            {Conditions.map((condition) => (
              <button
                key={condition.label}
                className={`bg-input w-full py-3 flex justify-center items-center rounded-lg my-3 cursor-pointer ${
                  blockChoices(condition.condition) ? "opacity-20" : null
                }`}
                onClick={() => {
                  if (!blockChoices(condition.condition)) {
                    setIsConditionSetVisible(true);
                    setType(condition);
                  }
                }}
              >
                <div className="w-5 mr-4">
                  <IconImage src={condition.icon} />
                </div>
                {condition.label}
              </button>
            ))}
          </div>
        </FloatingSection>
      </div>
      {/* <MainCustomButton addedStyle="mb-10">건너뛰기</MainCustomButton> */}
    </>
  );
}
