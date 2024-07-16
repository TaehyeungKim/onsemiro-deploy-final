import { DataContext } from ".";
import { useContext } from "react";
import { FloatingSection, SelectionRadioGrid } from "./components";
import { GenderIdentity } from "../../assets/asset";

export default function PreferIdentity() {
  const dataContext = useContext(DataContext);

  return (
    <>
      <FloatingSection>
        <h5>
          당신이 온새미로에서 만나고 싶은 이상형의 성정체성은
          <br />
          무엇인가요?
        </h5>
        <SelectionRadioGrid
          collection={GenderIdentity}
          name={"prefer_gender_identity"}
          dataContext={dataContext}
        ></SelectionRadioGrid>
      </FloatingSection>
    </>
  );
}
