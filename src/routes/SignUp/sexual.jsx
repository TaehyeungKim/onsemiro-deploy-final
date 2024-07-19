import { DataContext } from ".";
import { useContext, useMemo } from "react";
import {
  FloatingSection,
  SectionTitle,
  SelectionRadioGrid,
} from "./components";
import { sexualTendency } from "../../assets/asset";

export default function Sexual() {
  const dataContext = useContext(DataContext);

  const sexualOrientation = useMemo(() => {
    return [
      {
        main: "이성애자",
        sub: "Heterosexual",
      },
      {
        main: "대체로 이성애자",
        sub: "Heteroflexible",
      },
      {
        main: "양성애자",
        sub: "Bisexual",
      },
      {
        main: "대체로 동성애자",
        sub: "Homoflexible",
      },
      { main: "동성애자", sub: "Homosexual" },
      { main: "범성애자", sub: "Pansexual" },
      { main: "무성애자", sub: "Asexual" },
      { main: "남성애자", sub: "Androsexual" },
      { main: "여성애자", sub: "Gynesexual" },
      { main: "기타", sub: "Other" },
    ];
  }, []);

  return (
    <>
      <FloatingSection>
        <h3>성적 지향 및 성향을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>성적 지향</SectionTitle>
        <SelectionRadioGrid
          collection={sexualOrientation}
          name="sexual_tendency"
          dataContext={dataContext}
        />
      </FloatingSection>
      <FloatingSection addedStyle="mb-5">
        <SectionTitle>성적 성향</SectionTitle>
        <SelectionRadioGrid
          collection={sexualTendency}
          name="bdsm"
          dataContext={dataContext}
        />
      </FloatingSection>
    </>
  );
}
