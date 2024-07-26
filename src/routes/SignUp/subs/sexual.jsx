import { useEffect, useState } from "react";
import { SelectionRadioGrid } from "components/CustomInputs";
import { FloatingSection, SectionTitle } from "components/Floating";
import { sexualTendency, sexualOrientation } from "assets/asset";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function Sexual() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [genderPreference, setGenderPreference] = useState(
    signUpData.gender_preference ?? ""
  );
  const [bdsm, setBdsm] = useState(signUpData.bdsm ?? "");

  useEffect(() => {
    setSignUpData({
      ...signUpData,
      gender_preference: genderPreference,
      bdsm: bdsm,
    });
  }, [genderPreference, bdsm]);

  return (
    <>
      <FloatingSection>
        <h3>성적 지향 및 성향을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>성적 지향</SectionTitle>
        <SelectionRadioGrid
          collection={sexualOrientation}
          name="gender_preference"
          setter={(preference) => setGenderPreference(preference)}
          defaultV={genderPreference}
        />
      </FloatingSection>
      <FloatingSection addedStyle="mb-5">
        <SectionTitle>성적 성향</SectionTitle>
        <SelectionRadioGrid
          collection={sexualTendency}
          name="bdsm"
          setter={(bdsm) => setBdsm(bdsm)}
          defaultV={bdsm}
        />
      </FloatingSection>
    </>
  );
}
