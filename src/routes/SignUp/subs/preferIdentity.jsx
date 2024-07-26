import { useEffect, useState } from "react";
import { SelectionRadioGrid } from "components/CustomInputs";
import { FloatingSection } from "components/Floating";
import { GenderIdentity } from "assets/asset";
import { signUpState } from "state/state";
import { useRecoilState } from "recoil";

export default function PreferIdentity() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [preferGenderIdentity, setPreferGenderIdentity] = useState(
    signUpData.prefer_gender_identity ?? ""
  );

  useEffect(() => {
    setSignUpData({
      ...signUpData,
      prefer_gender_identity: preferGenderIdentity,
    });
  }, [preferGenderIdentity]);

  return (
    <>
      <FloatingSection>
        <h5>
          당신이 온새미로에서 만나고 싶은 이상형의
          <br />
          성정체성은 무엇인가요?
        </h5>
      </FloatingSection>
      <FloatingSection>
        <SelectionRadioGrid
          collection={GenderIdentity}
          name={"prefer_gender_identity"}
          setter={(pgi) => setPreferGenderIdentity(pgi)}
          defaultV={preferGenderIdentity}
        ></SelectionRadioGrid>
      </FloatingSection>
    </>
  );
}
