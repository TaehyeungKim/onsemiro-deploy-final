import check from "../../assets/check_black.png";
import search from "../../assets/search.png";
import howToKakao from "../../assets/howto_kakao_id.png";
import IconImage from "../../components/IconImage";
import { MainCustomButton } from "../../components/CustomButton";
import { useContext, useMemo, useState, useEffect } from "react";
import { DataContext } from ".";

function FloatingSection({ children, addedStyle = "" }) {
  return <section className={`p-3 ${addedStyle}`}>{children}</section>;
}

function SectionTitle({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

function SubPage0() {
  const dataContext = useContext(DataContext);
  return (
    <>
      <FloatingSection addedStyle="mt-3">
        <h3>먼저, 본인인증과 학교 인증이 필요해요!</h3>
        <h5 className="flex items-center mt-2">
          <div className="w-3">
            <IconImage src={check} />
          </div>
          이 서비스는 신원이 확인된 사용자만 이용할 수 있어요.
        </h5>
      </FloatingSection>
      <FloatingSection addedStyle="mt-3">
        <SectionTitle>본인인증</SectionTitle>
        <div className="flex mt-2 items-center">
          <button
            className="bg-sub grow rounded-lg py-2"
            onClick={() => {
              dataContext?.setter({ ...dataContext.data, auth_self: true });
              console.log("auth_self");
            }}
          >
            본인인증
          </button>
          <div className="w-7 h-full border-2 rounded-full ml-5">
            <IconImage src={check} />
          </div>
        </div>
      </FloatingSection>
      <FloatingSection addedStyle="mt-20">
        <SectionTitle>학교인증</SectionTitle>
        <div className="mt-2 flex flex-col gap-2">
          <div className="relative h-8  flex items-center rounded-lg overflow-hidden">
            <input
              className="h-full grow placeholder:text-xs placeholder:pl-3 bg-background"
              placeholder="학교를 검색해주세요"
            ></input>
            <button className="h-full absolute right-1">
              <IconImage src={search} />
            </button>
          </div>
          <div className="relative h-8 flex items-center rounded-lg">
            <input
              className="h-full grow block placeholder:text-xs placeholder:pl-3 bg-background rounded-lg"
              placeholder="학교 이메일"
            ></input>
            <MainCustomButton
              addedStyle={"h-full py-0 ml-6"}
              event={{
                onClick: () => {
                  console.log("auth_school");
                  dataContext?.setter({
                    ...dataContext.data,
                    auth_school: true,
                  });
                },
              }}
            >
              인증
            </MainCustomButton>
          </div>
          <div className="relative h-8 flex items-center">
            <input
              className="h-full grow block placeholder:text-xs placeholder:pl-3 bg-background rounded-lg"
              placeholder="인증번호 입력하기"
            ></input>
          </div>
        </div>
      </FloatingSection>
    </>
  );
}

function SubPage1() {
  const dataContext = useContext(DataContext);
  return (
    <FloatingSection addedStyle="mt-6">
      <h3 className="text-xl">카카오톡 아이디를 입력해주세요.</h3>
      <h5 className="mt-6 pl-1">
        카카오톡 아이디는 양측 모두
        <br />
        매칭에 동의했을 때 외에는 절대 공개되지 않아요
      </h5>
      <div className="relative h-8 flex items-center mt-6 px-3">
        <input
          className="h-full grow block placeholder:text-xs placeholder:pl-3 bg-background rounded-lg"
          placeholder="카카오톡 아이디 입력하기"
          onChange={(e) =>
            dataContext?.setter({
              ...dataContext.data,
              kakao_id: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="w-3/4 m-auto mt-20">
        <IconImage src={howToKakao} />
      </div>
    </FloatingSection>
  );
}

function SubPage2() {
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
        <div className="grid grid-cols-2 gap-5 w-3/4 mx-auto mt-10">
          {genderIdentityChoice.map((value, i) => {
            return (
              <div
                key={i}
                className="relative mx-auto w-full rounded-lg overflow-hidden shadow-xl"
              >
                <input
                  type="radio"
                  hidden
                  value={value.main}
                  id={value.main}
                  className="peer"
                  name="gender_identity"
                  onChange={(e) =>
                    dataContext.setter({
                      ...dataContext.data,
                      gender_identity: e.target.value,
                    })
                  }
                />
                <label
                  htmlFor={value.main}
                  className="block bg-background py-2 peer-checked:bg-main"
                >
                  <div className="text-center">
                    <h6>{value.main}</h6>
                    <p>{value.sub}</p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>나이</SectionTitle>
        <div className="w-3/4 h-4 mx-auto relative flex items-center mt-14">
          <input
            type="range"
            min={20}
            max={30}
            step={1}
            className="w-full block  absolute top-0 left-0 h-full z-10"
            defaultValue={DEFAULT_AGE}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <div className="h-1 w-full bg-main"></div>
          <div className="bg-main rounded-full w-3 aspect-square absolute right-0">
            <p className="w-0 h-0 overflow-visible -translate-y-7 -translate-x-1">
              30
            </p>
          </div>
          <div className="bg-main rounded-full w-3 aspect-square absolute left-0">
            <p className="w-0 h-0 overflow-visible -translate-y-7 -translate-x-1">
              20
            </p>
          </div>
        </div>
        <h5 className="text-center font-semibold my-8">{age}</h5>
      </FloatingSection>
    </>
  );
}

function SubPage3() {
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

  const sexualTendency = useMemo(
    () => ["비성향자", "DOM", "SUB", "SW", "SADI", "MASO"],
    []
  );

  return (
    <>
      <FloatingSection>
        <h3>성적 지향 및 성향을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>성적 지향</SectionTitle>
        <div className="grid grid-cols-2 gap-5 w-3/4 mx-auto mt-10">
          {sexualOrientation.map((value, i) => {
            return (
              <div
                key={i}
                className="relative mx-auto w-full rounded-lg overflow-hidden shadow-xl"
              >
                <input
                  type="radio"
                  hidden
                  value={value.main}
                  id={value.main}
                  className="peer"
                  name="sexual_orientation"
                  onChange={(e) =>
                    dataContext.setter({
                      ...dataContext.data,
                      sexual_orientation: e.target.value,
                    })
                  }
                />
                <label
                  htmlFor={value.main}
                  className="block bg-background py-2 peer-checked:bg-main"
                >
                  <div className="text-center">
                    <h6>{value.main}</h6>
                    <p>{value.sub}</p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </FloatingSection>
      <FloatingSection addedStyle="mb-5">
        <SectionTitle>성적 성향</SectionTitle>
        <div className="grid grid-cols-2 gap-5 w-3/4 mx-auto mt-10">
          {sexualTendency.map((value, i) => {
            return (
              <div
                key={i}
                className="relative mx-auto w-full rounded-lg overflow-hidden shadow-xl"
              >
                <input
                  type="radio"
                  hidden
                  value={value}
                  id={value}
                  className="peer"
                  name="sexual_tendency"
                  onChange={(e) =>
                    dataContext.setter({
                      ...dataContext.data,
                      sexual_tendency: e.target.value,
                    })
                  }
                />
                <label
                  htmlFor={value}
                  className="block bg-background py-2 peer-checked:bg-main"
                >
                  <div className="text-center">
                    <h6>{value}</h6>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </FloatingSection>
    </>
  );
}
export default function SignUpSub({ level }) {
  return (
    <main className="px-2 flex flex-col w-full h-fit">
      {(() => {
        switch (level) {
          case 0:
            return <SubPage0></SubPage0>;
          case 1:
            return <SubPage1></SubPage1>;
          case 2:
            return <SubPage2></SubPage2>;
          case 3:
            return <SubPage3></SubPage3>;
        }
      })()}
    </main>
  );
}
