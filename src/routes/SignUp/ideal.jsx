import { FloatingSection } from "./components";
import { DataContext, IdealChoiceToggleContext } from ".";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import IconImage from "../../components/IconImage";
import ArrowLeft from "../../assets/arrow_left.png";
import { Conditions } from "../../assets/asset";
import { MainCustomButton } from "../../components/CustomButton";
import {
  IdealAgeSet,
  IdealAppearanceSet,
  IdealCharacterSet,
  IdealEyelidSet,
  IdealFrequencySet,
  IdealHeightSet,
  IdealLocationSet,
  IdealMBTISet,
  IdealSexualSet,
  IdealShapeSet,
} from "./conditionSet";

function ConditionSelect({ label, reqType }) {
  const idealToggleContext = useContext(IdealChoiceToggleContext);
  const dataContext = useContext(DataContext);

  const initializeAndToggle = useCallback(() => {
    dataContext.setter({
      ...dataContext.data,
      preference: {
        ...dataContext.data.preference,
        [reqType]: undefined,
      },
    });
    idealToggleContext.toggle(true, reqType);
  }, [reqType]);

  return (
    <div className="bg-input flex flex-col items-center w-full rounded-lg">
      <h3 className="py-10 text-2xl font-bold">{label}</h3>
      {!dataContext.data.preference || !dataContext.data.preference[reqType] ? (
        <button
          className=" mb-10 block w-fit after:content-[''] after:w-full after:block after:border-b-2 after:border-main text-main"
          onClick={() => idealToggleContext.toggle(true, reqType)}
        >
          고르기
        </button>
      ) : (
        <button
          className="bg-input-darker w-4/5 py-3 flex justify-center items-center rounded-lg my-3"
          onClick={initializeAndToggle}
        >
          <div className="w-5 mr-2">
            <IconImage
              src={
                Conditions.find(
                  (condition) =>
                    condition.condition ===
                    Object.keys(dataContext.data.preference[reqType])[0]
                ).icon
              }
            />
          </div>
          {
            Conditions.find(
              (condition) =>
                condition.condition ===
                Object.keys(dataContext.data.preference[reqType])[0]
            ).label
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
            <ConditionSelect label={"선택 조건 1순위"} reqType={"optional_1"} />
            <ConditionSelect label={"선택 조건 2순위"} reqType={"optional_2"} />
          </div>
        </div>
      </FloatingSection>
    </>
  );
}

export const TempConditionSelectContext = createContext({
  data: {},
  setter: undefined,
});

function ConditionSet({ type, close, reqType }) {
  const [conditionSetData, setConditionSetData] = useState({});

  const dataContext = useContext(DataContext);
  const idealChoiceContext = useContext(IdealChoiceToggleContext);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-3">
        <button className="w-5 block" onClick={close}>
          <IconImage src={ArrowLeft} />
        </button>
      </header>
      <TempConditionSelectContext.Provider
        value={{
          data: conditionSetData,
          setter: setConditionSetData,
        }}
      >
        {(() => {
          switch (type.condition) {
            case "age":
              return <IdealAgeSet reqType={reqType} />;
            case "sexual":
              return <IdealSexualSet reqType={reqType} />;
            case "shape":
              return <IdealShapeSet reqType={reqType} />;
            case "height":
              return <IdealHeightSet reqType={reqType} />;
            case "appearance":
              return <IdealAppearanceSet reqType={reqType} />;
            case "eyelid":
              return <IdealEyelidSet reqType={reqType} />;
            case "mbti":
              return <IdealMBTISet reqType={reqType} />;
            case "character":
              return <IdealCharacterSet reqType={reqType} />;
            case "frequency":
              return <IdealFrequencySet reqType={reqType} />;
            case "location":
              return <IdealLocationSet reqType={reqType} />;
          }
        })()}
      </TempConditionSelectContext.Provider>
      <div className="mb-10">
        <MainCustomButton
          event={{
            onClick: () => {
              dataContext.setter({
                ...dataContext.data,
                preference: {
                  ...dataContext.data.preference,
                  [reqType]: { ...conditionSetData },
                },
              });
              // close();
              idealChoiceContext.toggle(false);
            },
          }}
        >{`'${type.label}' 선택하기`}</MainCustomButton>
      </div>
    </div>
  );
}

export function IdealChoiceSub({ reqType }) {
  const idealToggleContext = useContext(IdealChoiceToggleContext);

  const dataContext = useContext(DataContext);

  const [isConditionSetVisible, setIsConditionSetVisible] = useState(false);
  const [type, setType] = useState(undefined);

  if (isConditionSetVisible)
    return (
      <ConditionSet
        type={type}
        reqType={reqType}
        close={() => setIsConditionSetVisible(false)}
      />
    );

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
                className={`bg-input w-full py-3 flex justify-center items-center rounded-lg my-3 cursor-pointer ${
                  dataContext.data.preference?.required?.hasOwnProperty(
                    condition.condition
                  ) ||
                  dataContext.data.preference?.optional_1?.hasOwnProperty(
                    condition.condition
                  ) ||
                  dataContext.data.preference?.optional_2?.hasOwnProperty(
                    condition.condition
                  )
                    ? "opacity-20"
                    : null
                }`}
                onClick={() => {
                  if (
                    !(
                      dataContext.data.preference?.required?.hasOwnProperty(
                        condition.condition
                      ) ||
                      dataContext.data.preference?.optional_1?.hasOwnProperty(
                        condition.condition
                      ) ||
                      dataContext.data.preference?.optional_2?.hasOwnProperty(
                        condition.condition
                      )
                    )
                  ) {
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
      <MainCustomButton addedStyle="mb-10">건너뛰기</MainCustomButton>
    </>
  );
}
