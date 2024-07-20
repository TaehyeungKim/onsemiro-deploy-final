import { DataContext } from ".";
import { useContext, useMemo, useEffect, useState } from "react";
import {
  FloatingSection,
  SectionTitle,
  SelectionRadioGrid,
  ExtendedRangeBar,
} from "./components";
import {
  ShapeCollection,
  AppearanceCollection,
  EyelidCollection,
} from "../../assets/asset";

export default function Appearance() {
  const dataContext = useContext(DataContext);

  const [MIN, MAX] = [145, 185];

  const [height, setHeight] = useState(dataContext.data.height ?? MIN + 5);

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, height: height });
  }, [height]);
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
          dataContext={dataContext}
        />
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>생김새</SectionTitle>
        <SelectionRadioGrid
          collection={AppearanceCollection}
          name="appearance"
          dataContext={dataContext}
        />
      </FloatingSection>
      <FloatingSection addedStyle="mb-7">
        <SectionTitle>쌍커풀 유무</SectionTitle>
        <SelectionRadioGrid
          collection={EyelidCollection}
          name="eyelid"
          dataContext={dataContext}
        ></SelectionRadioGrid>
      </FloatingSection>
    </>
  );
}
