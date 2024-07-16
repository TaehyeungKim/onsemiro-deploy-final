import { useRef, useEffect, useContext, useState } from "react";
import { DataContext } from ".";
import { FloatingSection, SectionTitle, RangeBar } from "./components";

function SelectRegionRow({ label, regions, setter, sup = undefined }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.setAttribute("selected", true);
    return () => setter("");
  }, [sup]);

  return (
    <div className="flex justify-between items-center">
      <label htmlFor="city" className="block w-20">
        {label}
      </label>
      <select
        className="block grow ml-16 bg-background box-border px-3 py-2 rounded-md"
        onChange={(e) => setter(e.target.value)}
      >
        <option hidden ref={ref}>
          선택하기
        </option>
        {regions.map((region) => (
          <option key={region} value={region} id={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function FrequencyAndLocation() {
  const [meetNum, setMeetNum] = useState(1);

  const [city, setCity] = useState("");
  const [sub, setSub] = useState("");

  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, city: city, subRegion: sub });
  }, [city, sub]);

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, meeting_frequency: meetNum });
  }, [meetNum]);

  const CITYSET = [
    {
      city: "서울",
      sub: ["종로", "구로", "관악", "강서", "강남", "서초"],
    },
    {
      city: "경기",
      sub: ["고양", "파주", "수원"],
    },
    {
      city: "부산",
      sub: ["서래포", "동구", "서구"],
    },
    {
      city: "울산",
      sub: ["ㅇㄹㅇㄹ", "ㄴㄹㄴㄹㄹ"],
    },
    {
      city: "제주",
      sub: ["제주시", "서귀포시"],
    },
  ];

  return (
    <>
      <FloatingSection>
        <h5>원하는 만남 주기와 거주 지역을 알려주세요.</h5>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>일주일에 원하는 만남 횟수</SectionTitle>
        <RangeBar
          max={4}
          min={1}
          step={1}
          defaultValue={1}
          setter={(num) => setMeetNum(parseInt(num))}
          captions={["1번", "2번", "3번", "4번"]}
        ></RangeBar>
        <h5 className="text-center mt-4">{`일주일에 ${meetNum}번`}</h5>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>거주 지역</SectionTitle>
        <section className="mt-5">
          <div className="mb-3">
            <SelectRegionRow
              label="도시"
              regions={CITYSET.map((set) => set.city)}
              setter={setCity}
            ></SelectRegionRow>
          </div>

          {city && (
            <div>
              <SelectRegionRow
                label="행정구역"
                regions={CITYSET.find((set) => set.city === city).sub}
                setter={setSub}
                sup={city}
              ></SelectRegionRow>
            </div>
          )}
        </section>
      </FloatingSection>
    </>
  );
}
