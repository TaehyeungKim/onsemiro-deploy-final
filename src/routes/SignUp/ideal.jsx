import { FloatingSection } from "./components";
import { DataContext, IdealChoiceToggleContext } from ".";
import { useContext } from "react";
import IconImage from "../../components/IconImage";
import ArrowLeft from "../../assets/arrow_left.png";
import { Conditions } from "../../assets/asset";
import { MainCustomButton } from "../../components/CustomButton";

function ConditionSelect({ label }) {
  const idealToggleContext = useContext(IdealChoiceToggleContext);

  return (
    <div className="bg-background flex flex-col items-center w-full rounded-lg">
      <h3 className="py-10 text-2xl font-bold">{label}</h3>
      <button
        className=" mb-10 block w-fit after:content-[''] after:w-full after:block after:border-b-2 after:border-main text-main"
        onClick={() => idealToggleContext.toggle(true)}
      >
        고르기
      </button>
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
            <ConditionSelect label={"필수 조건"} />
          </div>
          <div className="flex w-full gap-x-3">
            <ConditionSelect label={"선택 조건 1순위"} />
            <ConditionSelect label={"선택 조건 2순위"} />
          </div>
        </div>
      </FloatingSection>
    </>
  );
}

export function IdealChoiceSub() {
  const idealToggleContext = useContext(IdealChoiceToggleContext);

  return (
    <>
      <header className="p-3">
        <button
          className="w-5 block"
          onClick={() => idealToggleContext.toggle(false)}
        >
          <IconImage src={ArrowLeft} />
        </button>
      </header>
      <div className="w-full px-4 pt-10">
        <FloatingSection>
          <h5 className="text-xl">원하는 이상형의 조건을 선택해주세요.</h5>
        </FloatingSection>
        <FloatingSection>
          <div className="w-11/12 mx-auto">
            {Conditions.map((condition) => (
              <button
                key={condition.label}
                className="bg-background w-full py-3 flex justify-center items-center rounded-lg my-3 cursor-pointer"
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
      <MainCustomButton addedStyle="mb-10">건너뛰기</MainCustomButton>
    </>
  );
}
