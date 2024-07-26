import { useEffect, useState } from "react";
import { SelectionRadioGrid, ExtendedRangeBar } from "components/CustomInputs";
import { FloatingSection, SectionTitle } from "components/Floating";
import {
  ShapeCollection,
  AppearanceCollection,
  EyelidCollection,
} from "assets/asset";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function Appearance() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [MIN, MAX] = [145, 185];

  const [height, setHeight] = useState(signUpData.height ?? MIN + 5);
  const [shape, setShape] = useState(signUpData.shape ?? "");
  const [eyelid, setEyelid] = useState(signUpData.eyelid ?? "");
  const [appearance, setAppearance] = useState(signUpData.appearance ?? "");

  useEffect(() => {
    setSignUpData({ ...signUpData, height, shape, eyelid, appearance });
  }, [height, shape, eyelid, appearance]);
  return (
    <>
      <FloatingSection>
        <h3>당신의 키와 생김새, 체형을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>키</SectionTitle>
        <ExtendedRangeBar
          max={MAX}
          min={MIN}
          defaultValue={height}
          step={5}
          setter={(height) => setHeight(parseInt(height))}
          captions={[150, 155, 160, 165, 170, 175, 180, 185]}
        />
        <h5 className="text-center font-semibold my-8 ">
          {height === MIN ? (
            "150 미만"
          ) : height === MAX ? (
            "185 초과"
          ) : (
            <>
              <span className="inline-block mr-[0.5px]">{height}이상</span>{" "}
              <span className="inline-block ml-[0.5px]">{height + 5}미만</span>
            </>
          )}
        </h5>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>체형</SectionTitle>
        <SelectionRadioGrid
          collection={ShapeCollection}
          name="shape"
          setter={(shape) => setShape(shape)}
          defaultV={shape}
        />
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>생김새</SectionTitle>
        <SelectionRadioGrid
          collection={AppearanceCollection}
          name="appearance"
          setter={(app) => setAppearance(app)}
          defaultV={appearance}
        />
      </FloatingSection>
      <FloatingSection addedStyle="mb-7">
        <SectionTitle>쌍커풀 유무</SectionTitle>
        <SelectionRadioGrid
          collection={EyelidCollection}
          name="eyelid"
          setter={(eyelid) => setEyelid(eyelid)}
          defaultV={eyelid}
        ></SelectionRadioGrid>
      </FloatingSection>
    </>
  );
}
