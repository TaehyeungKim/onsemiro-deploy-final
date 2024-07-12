import check from "../../assets/check_black.png";
import search from "../../assets/search.png";
import howToKakao from "../../assets/howto_kakao_id.png";
import IconImage from "../../components/IconImage";
import { MainCustomButton } from "../../components/CustomButton";
import { useContext, useMemo, useState, useEffect, useRef } from "react";
import { DataContext } from ".";

function FloatingSection({ children, addedStyle = "" }) {
  return <section className={`p-3 ${addedStyle}`}>{children}</section>;
}

function SectionTitle({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

function RangeBar({ max, min, step, defaultValue, setter, captions }) {
  return (
    <div className="w-full h-4 mx-auto relative flex items-center mt-14">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className="w-full block  absolute top-0 left-0 h-full z-10"
        defaultValue={defaultValue}
        onChange={(e) => setter(e.target.value)}
      ></input>
      <div className="h-1 w-full bg-main">
        <div className="flex justify-between w-full h-full absolute top-0 items-center">
          {captions.map((caption, i) => (
            <div className="bg-main rounded-full w-3 aspect-square">
              <p className="w-0 h-0 overflow-visible -translate-y-7 -translate-x-1">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExtendedRangeBar({ max, min, step, defaultValue, setter, captions }) {
  const [innerValue, setInnerValue] = useState(defaultValue);

  const progress = useRef(null);
  const range = useRef(null);

  useEffect(() => {
    progress.current?.setAttribute(
      "style",
      `width: ${
        ((innerValue - range.current.min) * 100) /
        (range.current.max - range.current.min)
      }%`
    );
  }, [innerValue]);

  return (
    <div className="w-full h-4 mx-auto relative flex items-center mt-14">
      <input
        ref={range}
        type="range"
        min={min}
        max={max}
        step={step}
        className={`w-full block  absolute top-0 left-0 h-full z-10`}
        defaultValue={defaultValue}
        onChange={(e) => {
          setter(e.target.value);
          setInnerValue(e.target.value);
        }}
      ></input>
      <div className="h-1 w-full border-main border-[1px] relative box-border">
        <div
          className="absolute left-0 right-0 h-full bg-main"
          ref={progress}
        ></div>
        <div className="flex justify-between w-full h-full absolute top-0 items-center">
          <div className="rounded-full w-3 aspect-square invisible"></div>
          {captions.map((caption, i) => (
            <div className="bg-main rounded-full w-3 aspect-square">
              <p className="w-0 h-0 text-xs overflow-visible -translate-y-7 -translate-x-1">
                {caption}
              </p>
            </div>
          ))}
          <div className=" rounded-full w-3 aspect-square invisible"></div>
        </div>
      </div>
    </div>
  );
}

function SelectionRadioGrid({ collection, name, dataContext }) {
  return (
    <div className="grid grid-cols-2 gap-5 w-3/4 mx-auto mt-10">
      {collection.map((value, i) => {
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
              name={name}
              onChange={(e) =>
                dataContext.setter({
                  ...dataContext.data,
                  [name]: e.target.value,
                })
              }
            />
            <label
              htmlFor={value.main}
              className="block bg-background py-2 peer-checked:bg-main"
            >
              <div className="text-center">
                <h6>{value.main}</h6>
                {value.sub ? <p>{value.sub}</p> : null}
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
}

function MBTILetterRow({ order, item, counter }) {
  return (
    <div className="flex flex-row">
      <button>
        <input type="radio" hidden name={order} id={item} value={item} />
        <label className="px-4 py-2 bg-sub" htmlFor={item}>
          {item}
        </label>
      </button>
      <div className="h-2 grow bg-sub"></div>
      <button>
        <input type="radio" hidden name={order} id={counter} value={counter} />
        <label className="px-4 py-2 bg-sub" htmlFor={counter}>
          {counter}
        </label>
      </button>
    </div>
  );
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
              addedStyle={"h-full py-0 ml-6 flex items-center"}
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
    () => [
      { main: "비성향자" },
      { main: "DOM" },
      { main: "SUB" },
      { main: "SW" },
      { main: "SADI" },
      { main: "MASO" },
    ],
    []
  );

  return (
    <>
      <FloatingSection>
        <h3>성적 지향 및 성향을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>성적 지향</SectionTitle>
        <SelectionRadioGrid
          collection={sexualOrientation}
          name="sexual_orientation"
          dataContext={dataContext}
        />
      </FloatingSection>
      <FloatingSection addedStyle="mb-5">
        <SectionTitle>성적 성향</SectionTitle>
        <SelectionRadioGrid
          collection={sexualTendency}
          name="sexual_tendency"
          dataContext={dataContext}
        />
      </FloatingSection>
    </>
  );
}

function SubPage4() {
  const dataContext = useContext(DataContext);

  const [MIN, MAX] = [145, 190];

  const [height, setHeight] = useState(MIN + 5);

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
          defaultValue={MIN + 5}
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

function SubPage5() {
  const [mbti, setMBTI] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  return (
    <>
      <FloatingSection>
        <h3>당신의 MBTI와 성격을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>MBTI</SectionTitle>
        <MBTILetterRow order={"first"} item={"E"} counter={"I"} />
        <MBTILetterRow order={"second"} item={"S"} counter={"N"} />
        <MBTILetterRow order={"third"} item={"T"} counter={"F"} />
        <MBTILetterRow order={"fourth"} item={"J"} counter={"P"} />
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
          case 4:
            return <SubPage4></SubPage4>;
          case 5:
            return <SubPage5></SubPage5>;
        }
      })()}
    </main>
  );
}
