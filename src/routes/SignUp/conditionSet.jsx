import { DoubleThumbRangeBar } from "./components";
import { FloatingSection, SelectionRadioGrid } from "./components";
import { useState, useContext, useEffect } from "react";
import { DataContext } from ".";
import { TempConditionSelectContext } from "./ideal";
import {
  sexualTendency,
  ShapeCollection,
  EyelidCollection,
  AppearanceCollection,
  characterKeyMap,
  CITYSET,
} from "../../assets/asset";
import { CharacterSettingSection, MBTISettingSection } from "./character";
import { FrequencySetSection, LocationSetSection } from "./freqandloc";

function IdealSetCaption({ children }) {
  return <h5 className="mt-10 text-2xl">{children}</h5>;
}

function IdealSetChoice({ children }) {
  return (
    <FloatingSection addedStyle="grow items-center flex">
      <div className="w-full">{children}</div>
    </FloatingSection>
  );
}

export function IdealAgeSet({ reqType }) {
  const dataContext = useContext(DataContext);
  const conditionCtx = useContext(TempConditionSelectContext);

  const FORMER_RANGE = [20, 23];
  const LATTER_RANGE = [26, 30];

  const [ageMin, setAgeMin] = useState(
    (dataContext.data.preference &&
      dataContext.data.preference[reqType]?.age?.age_min) ??
      FORMER_RANGE[0]
  );
  const [ageMax, setAgeMax] = useState(
    (dataContext.data.preference &&
      dataContext.data.preference[reqType]?.age?.age_max) ??
      LATTER_RANGE[LATTER_RANGE.length - 1]
  );

  useEffect(() => {
    conditionCtx.setter({
      ...conditionCtx.data,
      age: {
        age_min: ageMin,
        age_max: ageMax,
      },
    });
  }, [ageMin, ageMax]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 나이 범위는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <DoubleThumbRangeBar
          former={{
            range: FORMER_RANGE,
            captions: FORMER_RANGE,
            step: 3,
            setter: (age) => setAgeMin(parseInt(age)),
            default: ageMin,
          }}
          latter={{
            range: LATTER_RANGE,
            captions: LATTER_RANGE,
            step: 4,
            setter: (age) => setAgeMax(parseInt(age)),
            default: ageMax,
          }}
        ></DoubleThumbRangeBar>
        <h5 className="text-center text-lg mt-10">
          {ageMin}세 이상 {ageMax}세 이하
        </h5>
      </IdealSetChoice>
    </>
  );
}

export function IdealSexualSet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);
  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 성적 성향은?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={sexualTendency}
          name="sexual"
          dataContext={conditionCtx}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealShapeSet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 체형은?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={ShapeCollection}
          name="shape"
          dataContext={conditionCtx}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealHeightSet({ reqType }) {
  const FORMER_RANGE = [145, 150, 155, 160, 165];
  const LATTER_RANGE = [170, 175, 180, 185, 190];

  const conditionCtx = useContext(TempConditionSelectContext);
  const dataContext = useContext(DataContext);

  const [heightMin, setHeightMin] = useState(
    (dataContext.data.preference &&
      dataContext.data.preference[reqType]?.height?.height_min) ??
      FORMER_RANGE[0]
  );
  const [heightMax, setHeightMax] = useState(
    (dataContext.data.preference &&
      dataContext.data.preference[reqType]?.height?.height_max) ??
      LATTER_RANGE[LATTER_RANGE.length - 1]
  );

  useEffect(() => {
    conditionCtx.setter({
      ...conditionCtx.data,
      height: {
        height_min: heightMin,
        height_max: heightMax,
      },
    });
  }, [heightMin, heightMax]);

  // former={{
  //   range: FORMER_RANGE,
  //   captions: FORMER_RANGE,
  //   step: 3,
  //   setter: (age) => setAgeMin(parseInt(age)),
  //   default: ageMin,
  // }}
  // latter={{
  //   range: LATTER_RANGE,
  //   captions: LATTER_RANGE,
  //   step: 4,
  //   setter: (age) => setAgeMax(parseInt(age)),
  //   default: ageMax,
  // }}

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 키 범위는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <DoubleThumbRangeBar
          former={{
            range: FORMER_RANGE,
            captions: ["", ...FORMER_RANGE.filter((e, i) => i !== 0)],
            step: 5,
            setter: (height) => setHeightMin(parseInt(height)),
            default: heightMin,
          }}
          latter={{
            range: LATTER_RANGE,
            captions: [
              ...LATTER_RANGE.filter((e, i, arr) => i !== arr.length - 1),
              "",
            ],
            step: 5,
            setter: (height) => setHeightMax(parseInt(height)),
            default: heightMax,
          }}
        ></DoubleThumbRangeBar>
        <h5 className="text-center mt-9 text-xl">
          {heightMin === FORMER_RANGE[0] ? "" : `${heightMin}이상 `}
          {heightMax === LATTER_RANGE[LATTER_RANGE.length - 1]
            ? ""
            : `${heightMax}이하`}
        </h5>
      </IdealSetChoice>
    </>
  );
}

export function IdealAppearanceSet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 생김새는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={AppearanceCollection}
          name="appearance"
          dataContext={conditionCtx}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealEyelidSet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 쌍커풀 유무는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={EyelidCollection}
          name="eyelid"
          dataContext={conditionCtx}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealMBTISet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);

  const [mbti, setMBTI] = useState(
    conditionCtx.data.mbti
      ? {
          first: conditionCtx.data.mbti[0],
          second: conditionCtx.data.mbti[1],
          third: conditionCtx.data.mbti[2],
          fourth: conditionCtx.data.mbti[3],
        }
      : {
          first: "E",
          second: "S",
          third: "T",
          fourth: "J",
        }
  );

  useEffect(() => {
    conditionCtx.setter({ ...conditionCtx.data, mbti: mbti });
  }, [mbti]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 MBTI는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <MBTISettingSection mbti={mbti} setter={setMBTI} />
      </IdealSetChoice>
    </>
  );
}

export function IdealCharacterSet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);

  const [characterSym, setCharacterSym] = useState(
    conditionCtx.data.character
      ? Object.keys(characterKeyMap).filter(
          (key) => characterKeyMap[key] === conditionCtx.data.character
        )[0]
      : 0
  );

  useEffect(() => {
    conditionCtx.setter({
      ...conditionCtx.data,
      character: characterKeyMap[characterSym],
    });
  }, [characterSym]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 성격은?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <CharacterSettingSection
          characterSym={characterSym}
          setter={(sym) => setCharacterSym(parseInt(sym))}
          keyMap={characterKeyMap}
        />
      </IdealSetChoice>
    </>
  );
}

export function IdealFrequencySet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);

  const [meetNum, setMeetNum] = useState(conditionCtx.data.freqeuncy ?? 1);

  useEffect(() => {
    conditionCtx.setter({ ...conditionCtx.data, frequency: meetNum });
  }, [meetNum]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>
          이상형이 일주일에 몇 번 만남을 원했으면 좋겠나요?
        </IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <FrequencySetSection
          meetNum={meetNum}
          setter={(num) => setMeetNum(parseInt(num))}
        ></FrequencySetSection>
      </IdealSetChoice>
    </>
  );
}

export function IdealLocationSet({ reqType }) {
  const conditionCtx = useContext(TempConditionSelectContext);

  const [city, setCity] = useState(conditionCtx.data.city ?? "");
  const [sub, setSub] = useState(conditionCtx.data.subRegion ?? "");

  useEffect(() => {
    conditionCtx.setter({
      ...conditionCtx.data,
      location: {
        city,
        subRegion: sub,
      },
    });
  }, [city, sub]);
  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형이 어디에 살았으면 좋겠나요?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <LocationSetSection
          set={CITYSET}
          city={city}
          setter={{
            city: setCity,
            sub: setSub,
          }}
        ></LocationSetSection>
      </IdealSetChoice>
    </>
  );
}
