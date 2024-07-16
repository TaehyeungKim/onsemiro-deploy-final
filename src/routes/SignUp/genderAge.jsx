import { DataContext } from ".";
import { useContext, useState, useEffect } from "react";
import {
  FloatingSection,
  SectionTitle,
  SelectionRadioGrid,
  RangeBar,
} from "./components";
import { GenderIdentity } from "../../assets/asset";
export default function AgeAndGender() {
  const dataContext = useContext(DataContext);

  const DEFAULT_AGE = 25;

  const [age, setAge] = useState(dataContext.data.age ?? DEFAULT_AGE);

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, age: age });
  }, [age]);

  const genderIdentityChoice = GenderIdentity;

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
          defaultValue={dataContext.data.age ?? DEFAULT_AGE}
          step={1}
          setter={(age) => setAge(parseInt(age))}
          captions={[20, 25, 30]}
        />
        <h5 className="text-center font-semibold my-8">{age}</h5>
      </FloatingSection>
    </>
  );
}
