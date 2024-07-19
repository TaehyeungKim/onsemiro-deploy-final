import { useRef, useEffect, useContext, useState } from "react";
import { DataContext } from ".";
import { FloatingSection, SectionTitle, RangeBar } from "./components";
import { CITYSET } from "../../assets/asset";

function SelectRegionRow({ label, regions, setter, context, sup = undefined }) {
  // const dataContext = useContext(DataContext);

  const ref = useRef(null);

  const LABELMAP = { 도시: "city", 행정구역: "subRegion" };

  useEffect(() => {
    if (!context.data[label]) ref.current?.setAttribute("selected", true);
  }, [sup]);

  return (
    <div className="flex justify-between items-center">
      <label htmlFor="city" className="block w-20">
        {label}
      </label>
      <select
        className="block grow ml-16 bg-background box-border px-3 py-2 rounded-md"
        onChange={(e) => setter(e.target.value)}
        value={context.data[LABELMAP[label]]}
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

export function FrequencySetSection({ meetNum, setter }) {
  return (
    <>
      <RangeBar
        max={4}
        min={1}
        step={1}
        defaultValue={meetNum}
        setter={setter}
        captions={["1번", "2번", "3번", "4번"]}
      ></RangeBar>
      <h5 className="text-center mt-4">{`일주일에 ${meetNum}번`}</h5>
    </>
  );
}

export function LocationSetSection({ set, city, setter, context }) {
  return (
    <>
      <div className="mb-3">
        <SelectRegionRow
          label="도시"
          regions={set.map((set) => set.city)}
          setter={setter.city}
          context={context}
        ></SelectRegionRow>
      </div>

      {city && (
        <div>
          <SelectRegionRow
            label="행정구역"
            regions={set.find((s) => s.city === city).sub}
            setter={setter.sub}
            context={context}
            sup={city}
          ></SelectRegionRow>
        </div>
      )}
    </>
  );
}

export default function FrequencyAndLocation() {
  const dataContext = useContext(DataContext);

  const [meetNum, setMeetNum] = useState(
    dataContext.data.meeting_frequency ?? 1
  );

  const [city, setCity] = useState(dataContext.data.city ?? "");
  const [sub, setSub] = useState(dataContext.data.subRegion ?? "");

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, city: city, subRegion: sub });
  }, [city, sub]);

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, meeting_frequency: meetNum });
  }, [meetNum]);

  return (
    <>
      <FloatingSection>
        <h5>원하는 만남 주기와 거주 지역을 알려주세요.</h5>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>일주일에 원하는 만남 횟수</SectionTitle>
        <div className="mt-14">
          <FrequencySetSection
            meetNum={meetNum}
            setter={(num) => setMeetNum(parseInt(num))}
          />
        </div>
      </FloatingSection>
      <FloatingSection>
        <SectionTitle>거주 지역</SectionTitle>
        <section className="mt-5">
          <LocationSetSection
            set={CITYSET}
            setter={{
              city: setCity,
              sub: setSub,
            }}
            city={city}
            context={dataContext}
          />
        </section>
      </FloatingSection>
    </>
  );
}
