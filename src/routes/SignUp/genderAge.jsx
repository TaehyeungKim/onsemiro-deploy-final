import { DataContext } from ".";
import { useContext, useMemo, useState, useEffect } from "react";
import {
  FloatingSection,
  SectionTitle,
  SelectionRadioGrid,
  RangeBar,
} from "./components";
export default function AgeAndGender() {
  const dataContext = useContext(DataContext);

  const DEFAULT_AGE = 25;

  const [age, setAge] = useState(DEFAULT_AGE);

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, age: age });
  }, [age]);

  const genderIdentityChoice = useMemo(() => {
    return [
      {
        main: "남성",
        sub: "Male",
      },
      {
        main: "여성",
        sub: "Female",
      },
      {
        main: "MTF",
        sub: "Transgender",
      },
      {
        main: "TMF",
        sub: "Transgender",
      },
      { main: "에이젠더", sub: "Agender" },
      { main: "논바이너리", sub: "Non-binary" },
    ];
  }, []);

  return (
    <>
      <FloatingSection>
        <h3>당신의 성 정체성과 나이를 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>성 정체성</SectionTitle>
        <SelectionRadioGrid
          collection={genderIdentityChoice}
          name="gender_identity"
          dataContext={dataContext}
        />
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>나이</SectionTitle>
        <RangeBar
          max={30}
          min={20}
          defaultValue={DEFAULT_AGE}
          step={1}
          setter={(age) => setAge(parseInt(age))}
          captions={[20, 25, 30]}
        />
        <h5 className="text-center font-semibold my-8">{age}</h5>
      </FloatingSection>
    </>
  );
}
