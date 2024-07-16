import { DataContext } from ".";
import { useContext, useMemo, useEffect, useState } from "react";
import {
  FloatingSection,
  SectionTitle,
  SelectionRadioGrid,
  ExtendedRangeBar,
} from "./components";

export default function Appearance() {
  const dataContext = useContext(DataContext);

  const [MIN, MAX] = [145, 190];

  const [height, setHeight] = useState(dataContext.data.height ?? MIN + 5);

  const shape = useMemo(
    () => [
      { main: "마른" },
      { main: "보통" },
      { main: "통통" },
      { main: "근육" },
    ],
    []
  );
  const appearance = useMemo(
    () => [
      {
        main: "뚜렷",
      },
      {
        main: "두부",
      },
    ],
    []
  );
  const eyelid = useMemo(
    () => [
      {
        main: "유쌍",
      },
      {
        main: "무쌍",
      },
    ],
    []
  );

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
          defaultValue={dataContext.data.height ?? MIN + 5}
          step={5}
          setter={(height) => setHeight(parseInt(height))}
          captions={[150, 155, 160, 165, 170, 175, 180, 185]}
        />
        <h5 className="text-center font-semibold my-8">
          {height === MIN ? "150 미만" : height === MAX ? "185 초과" : height}
        </h5>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>체형</SectionTitle>
        <SelectionRadioGrid
          collection={shape}
          name="shape"
          dataContext={dataContext}
        />
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>생김새</SectionTitle>
        <SelectionRadioGrid
          collection={appearance}
          name="appearance"
          dataContext={dataContext}
        />
      </FloatingSection>
      <FloatingSection addedStyle="mb-7">
        <SectionTitle>쌍커풀 유무</SectionTitle>
        <SelectionRadioGrid
          collection={eyelid}
          name="eyelid"
          dataContext={dataContext}
        ></SelectionRadioGrid>
      </FloatingSection>
    </>
  );
}
