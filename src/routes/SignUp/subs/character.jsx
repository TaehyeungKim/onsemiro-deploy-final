import { useEffect, useState } from "react";
import { RangeBar } from "components/CustomInputs";
import { FloatingSection, SectionTitle } from "components/Floating";
import { characterKeyMap } from "assets/asset";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

function MBTILetterRow({ order, item, counter, data, setter }) {
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
          defaultChecked={data[order] === item ? true : false}
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
          defaultChecked={data[order] === counter ? true : false}
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

export function MBTISettingSection({ mbti, setter }) {
  return (
    <>
      <div className="px-10">
        <MBTILetterRow
          order={"first"}
          item={"E"}
          counter={"I"}
          data={mbti}
          setter={setter}
        />
        <MBTILetterRow
          order={"second"}
          item={"S"}
          counter={"N"}
          data={mbti}
          setter={setter}
        />
        <MBTILetterRow
          order={"third"}
          item={"T"}
          counter={"F"}
          data={mbti}
          setter={setter}
        />
        <MBTILetterRow
          order={"fourth"}
          item={"J"}
          counter={"P"}
          data={mbti}
          setter={setter}
        />
      </div>
      <h5 className="text-center text-lg">{`${mbti.first}${mbti.second}${mbti.third}${mbti.fourth}`}</h5>
    </>
  );
}

export function CharacterSettingSection({ characterSym, setter, keyMap }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12 mt-14">
          <RangeBar
            max={4}
            min={0}
            step={1}
            defaultValue={characterSym}
            setter={setter}
            captions={Object.keys(keyMap).map((key, i, arr) => {
              if (i === 0 || i === arr.length - 1) return keyMap[key];
              else return "";
            })}
          ></RangeBar>
        </div>
      </div>
      <h5 className="text-center text-lg mt-5">{keyMap[characterSym]}</h5>
    </>
  );
}

export default function Character() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [mbti, setMBTI] = useState(
    signUpData.mbti
      ? {
          first: signUpData.mbti[0],
          second: signUpData.mbti[1],
          third: signUpData.mbti[2],
          fourth: signUpData.mbti[3],
        }
      : {
          first: "E",
          second: "S",
          third: "T",
          fourth: "J",
        }
  );

  const [characterSym, setCharacterSym] = useState(
    signUpData.character
      ? Object.keys(characterKeyMap).filter(
          (key) => characterKeyMap[key] === signUpData.character
        )[0]
      : 0
  );

  useEffect(() => {
    setSignUpData({
      ...signUpData,
      mbti: `${mbti["first"]}${mbti["second"]}${mbti["third"]}${mbti["fourth"]}`,
      character: characterKeyMap[characterSym],
    });
    // dataContext.setter({
    //   ...dataContext.data,
    //   mbti: `${mbti["first"]}${mbti["second"]}${mbti["third"]}${mbti["fourth"]}`,
    //   character: characterKeyMap[characterSym],
    // });
  }, [mbti, characterSym]);

  // useEffect(() => {
  //   if (dataContext.data.mbti) {
  //     setMBTI({
  //       first: dataContext.data.mbti[0],
  //       second: dataContext.data.mbti[1],
  //       third: dataContext.data.mbti[2],
  //       fourth: dataContext.data.mbti[3],
  //     });
  //   }
  // }, []);

  return (
    <>
      <FloatingSection>
        <h3>당신의 MBTI와 성격을 알려주세요.</h3>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>MBTI</SectionTitle>
        <div className="mt-8">
          <MBTISettingSection mbti={mbti} setter={setMBTI} />
        </div>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>성격</SectionTitle>
        <CharacterSettingSection
          characterSym={characterSym}
          setter={(num) => setCharacterSym(parseInt(num))}
          keyMap={characterKeyMap}
        />
      </FloatingSection>
    </>
  );
}
