import { useState, useEffect } from "react";
import { SelectionRadioGrid, RangeBar } from "components/CustomInputs";
import { FloatingSection, SectionTitle } from "components/Floating";
import { GenderIdentity } from "assets/asset";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function AgeAndGender() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const DEFAULT_AGE = 25;

  const [age, setAge] = useState(signUpData.age ?? DEFAULT_AGE);
  const [genderIdentity, setGenderIdentity] = useState(
    signUpData.gender_identity ?? ""
  );

  useEffect(() => {
    setSignUpData({ ...signUpData, age: age, gender_identity: genderIdentity });
  }, [age, genderIdentity]);

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
          setter={(identity) => setGenderIdentity(identity)}
          defaultV={signUpData.gender_identity ?? genderIdentity}
        />
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>나이</SectionTitle>
        <div className="mt-14">
          <RangeBar
            max={30}
            min={20}
            defaultValue={signUpData.age ?? age}
            step={1}
            setter={(age) => setAge(parseInt(age))}
            captions={[20, 25, 30]}
          />
        </div>
        <h5 className="text-center font-semibold my-8">{age}</h5>
      </FloatingSection>
    </>
  );
}
