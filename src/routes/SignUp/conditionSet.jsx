import {
  DoubleThumbRangeBar,
  SelectionRadioGrid,
} from "components/CustomInputs";
import { FloatingSection } from "components/Floating";

import { useState, useEffect, useCallback } from "react";

import {
  sexualTendency,
  ShapeCollection,
  EyelidCollection,
  AppearanceCollection,
  characterKeyMap,
  CITYSET,
} from "assets/asset";
import { CharacterSettingSection, MBTISettingSection } from "./subs/character";
import { FrequencySetSection, LocationSetSection } from "./subs/freqandloc";

function IdealSetCaption({ children }) {
  return <h5 className="mt-12 mx-3 text-xl">{children}</h5>;
}

function IdealSetChoice({ children }) {
  return (
    <FloatingSection addedStyle="grow">
      <div className="w-full h-full">{children}</div>
    </FloatingSection>
  );
}

export function IdealAgeSet({ reqType, setter, tempData }) {
  const [MIN, MAX] = [20, 29];
  const adjustAgeData = useCallback((age) => {
    if (age === 29) return age + 1;
    if (age === 30) return age - 1;
    return age;
  }, []);

  const [ageMin, setAgeMin] = useState(
    tempData[reqType]?.age?.age_min
      ? adjustAgeData(tempData[reqType]?.age?.age_min)
      : MIN
  );
  const [ageMax, setAgeMax] = useState(
    tempData[reqType]?.age?.age_max
      ? adjustAgeData(tempData[reqType]?.age?.age_max)
      : MAX
  );

  useEffect(() => {
    setter({
      ...tempData,
      [reqType]: {
        age: {
          age_min: adjustAgeData(ageMin),
          age_max: adjustAgeData(ageMax),
        },
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
          min={MIN}
          max={MAX}
          step={3}
          captions={(() => {
            const arr = [];
            for (let i = MIN; i < MAX; i += 3) arr.push(i);
            arr.push(30);
            return arr;
          })()}
          setter={{ setSmaller: setAgeMin, setBigger: setAgeMax }}
          defaultValue={{
            min: ageMin,
            max: ageMax,
          }}
        ></DoubleThumbRangeBar>
        <h5 className="text-center text-lg mt-10">
          {adjustAgeData(ageMin)}세 이상 {adjustAgeData(ageMax)}세 이하
        </h5>
      </IdealSetChoice>
    </>
  );
}

export function IdealSexualSet({ reqType, setter, tempData }) {
  const [sexual, setSexual] = useState(tempData[reqType]?.sexual ?? "");

  useEffect(() => {
    setter({
      ...tempData,
      [reqType]: {
        bdsm: sexual,
      },
    });
  }, [sexual]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 성적 성향은?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={sexualTendency}
          name="bdsm"
          setter={(s) => setSexual(s)}
          defaultV={sexual}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealShapeSet({ reqType, setter, tempData }) {
  const [weight, setWeight] = useState(tempData[reqType]?.weight ?? "");

  useEffect(() => {
    setter({
      ...tempData,
      [reqType]: {
        weight,
      },
    });
  }, [weight]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 체형은?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={ShapeCollection}
          name="weight"
          setter={(w) => setWeight(w)}
          defaultV={weight}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealHeightSet({ reqType, setter, tempData }) {
  const [MIN, MAX] = [145, 190];

  const [heightMin, setHeightMin] = useState(
    tempData[reqType]?.height?.height_min ?? MIN
  );
  const [heightMax, setHeightMax] = useState(
    tempData[reqType]?.height?.height_max ?? MAX
  );

  useEffect(() => {
    setter({
      ...tempData,
      [reqType]: {
        height: {
          height_min: heightMin,
          height_max: heightMax,
        },
      },
    });
  }, [heightMin, heightMax]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 키 범위는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <DoubleThumbRangeBar
          min={145}
          max={190}
          step={5}
          captions={[
            "",
            ...(() => {
              const arr = [];
              for (let i = MIN + 5; i < MAX; i += 5) arr.push(i);
              return arr;
            })(),
            "",
          ]}
          setter={{ setSmaller: setHeightMin, setBigger: setHeightMax }}
          defaultValue={{
            min: heightMin,
            max: heightMax,
          }}
        ></DoubleThumbRangeBar>
        <h5 className="text-center mt-9 text-lg">
          {heightMin === MIN ? "" : `${heightMin}이상 `}
          {heightMax === MAX ? "" : `${heightMax}이하`}
        </h5>
      </IdealSetChoice>
    </>
  );
}

export function IdealAppearanceSet({ reqType, setter, tempData }) {
  const [appearance, setAppearance] = useState(
    tempData[reqType]?.appearance ?? ""
  );

  useEffect(() => {
    setter({ ...tempData, [reqType]: { appearance } });
  }, [appearance]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 생김새는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={AppearanceCollection}
          name="appearance"
          setter={(app) => setAppearance(app)}
          defaultV={appearance}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealEyelidSet({ reqType, setter, tempData }) {
  const [eyelid, setEyelid] = useState(tempData[reqType]?.eyelid ?? "");

  useEffect(() => {
    setter({ ...tempData, [reqType]: { eyelid } });
  }, [eyelid]);

  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형의 쌍커풀 유무는?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <SelectionRadioGrid
          collection={EyelidCollection}
          name="eyelid"
          setter={(eye) => setEyelid(eye)}
          defaultV={eyelid}
        ></SelectionRadioGrid>
      </IdealSetChoice>
    </>
  );
}

export function IdealMBTISet({ reqType, setter, tempData }) {
  const [mbti, setMBTI] = useState(
    tempData[reqType]?.mbti
      ? {
          first: tempData[reqType].mbti[0],
          second: tempData[reqType].mbti[1],
          third: tempData[reqType].mbti[2],
          fourth: tempData[reqType].mbti[3],
        }
      : {
          first: "E",
          second: "S",
          third: "T",
          fourth: "J",
        }
  );

  useEffect(() => {
    setter({
      ...tempData,
      [reqType]: {
        mbti: mbti,
      },
    });
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

export function IdealCharacterSet({ reqType, setter, tempData }) {
  const [characterSym, setCharacterSym] = useState(
    tempData[reqType]?.character
      ? Object.keys(characterKeyMap).filter(
          (key) => characterKeyMap[key] === tempData[reqType].character
        )[0]
      : 0
  );

  useEffect(() => {
    setter({
      ...tempData,
      [reqType]: {
        character: characterKeyMap[characterSym],
      },
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

export function IdealLocationSet({ reqType, setter, tempData }) {
  const [city, setCity] = useState(tempData[reqType]?.location?.city ?? "");
  const [sub, setSub] = useState(tempData[reqType]?.location?.subRegion ?? "");

  useEffect(() => {
    setter({
      ...tempData,
      [reqType]: {
        location: {
          city,
          subRegion: sub,
        },
      },
    });
  }, [city, sub]);
  return (
    <>
      <FloatingSection>
        <IdealSetCaption>이상형이 어디에 살았으면 <br/>좋겠나요?</IdealSetCaption>
      </FloatingSection>
      <IdealSetChoice>
        <LocationSetSection
          set={CITYSET}
          setter={{
            city: setCity,
            sub: setSub,
          }}
        ></LocationSetSection>
      </IdealSetChoice>
    </>
  );
}
