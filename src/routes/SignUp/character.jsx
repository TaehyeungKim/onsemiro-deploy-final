import { DataContext } from ".";
import { useContext, useEffect, useMemo, useState } from "react";
import { FloatingSection, SectionTitle, RangeBar } from "./components";

function MBTILetterRow({ order, item, counter, data, setter }) {
  useEffect(() => {
    setter({ ...data, [order]: item });
  }, []);
  return (
    <div className="flex flex-row items-center mb-4">
      <button>
        <input
          type="radio"
          hidden
          name={order}
          id={item}
          value={item}
          className="peer"
          onChange={(e) => setter({ ...data, [order]: e.target.value })}
          defaultChecked
        />
        <label
          className="px-4 py-3 bg-pale flex justify-center w-16 box-border rounded-md shadow-lg peer-checked:bg-main"
          htmlFor={item}
        >
          {item}
        </label>
      </button>
      <div className="h-3 grow bg-pale"></div>
      <button>
        <input
          type="radio"
          hidden
          name={order}
          id={counter}
          value={counter}
          className="peer"
          onChange={(e) => setter({ ...data, [order]: e.target.value })}
        />
        <label
          className="px-4 py-3 bg-pale flex justify-center w-16 box-border rounded-md shadow-lg peer-checked:bg-main"
          htmlFor={counter}
        >
          {counter}
        </label>
      </button>
    </div>
  );
}

export default function Character() {
  const dataContext = useContext(DataContext);

  const characterKeyMap = useMemo(() => {
    return {
      0: "조용한",
      1: "조금 조용한",
      2: "보통",
      3: "조금 활발한",
      4: "활발한",
    };
  }, []);

  const [mbti, setMBTI] = useState({
    first: "E",
    second: "S",
    third: "T",
    fourth: "J",
  });

  const [character, setCharacter] = useState("조용한");

  useEffect(() => {
    dataContext.setter({
      ...dataContext.data,
      mbti: `${mbti["first"]}${mbti["second"]}${mbti["third"]}${mbti["fourth"]}`,
      character: character,
    });
  }, [mbti, character]);

  return (
    <>
      <FloatingSection>
        <h3>당신의 MBTI와 성격을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>MBTI</SectionTitle>
        <div className="px-10">
          <MBTILetterRow
            order={"first"}
            item={"E"}
            counter={"I"}
            data={mbti}
            setter={setMBTI}
          />
          <MBTILetterRow
            order={"second"}
            item={"S"}
            counter={"N"}
            data={mbti}
            setter={setMBTI}
          />
          <MBTILetterRow
            order={"third"}
            item={"T"}
            counter={"F"}
            data={mbti}
            setter={setMBTI}
          />
          <MBTILetterRow
            order={"fourth"}
            item={"J"}
            counter={"P"}
            data={mbti}
            setter={setMBTI}
          />
        </div>
        <h5 className="text-center text-lg">{`${mbti.first}${mbti.second}${mbti.third}${mbti.fourth}`}</h5>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>성격</SectionTitle>
        <div className="flex justify-center">
          <div className="w-11/12">
            <RangeBar
              max={4}
              min={0}
              step={1}
              defaultValue={0}
              setter={(num) => setCharacter(characterKeyMap[num])}
              captions={Object.keys(characterKeyMap).map((key, i, arr) => {
                if (i === 0 || i === arr.length - 1)
                  return characterKeyMap[key];
                else return "";
              })}
            ></RangeBar>
          </div>
        </div>
        <h5 className="text-center text-lg mt-5">{character}</h5>
      </FloatingSection>
    </>
  );
}
