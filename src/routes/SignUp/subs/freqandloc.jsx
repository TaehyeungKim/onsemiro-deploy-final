import { useRef, useEffect, useState } from "react";

import { RangeBar } from "components/CustomInputs";
import { FloatingSection, SectionTitle } from "components/Floating";
import { CITYSET } from "assets/asset";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { signUpState } from "state/state";

function SelectRegionRow({ label, regions, setter, selected }) {
  const ref = useRef(null);

  const [selectedRegion, setSelectedRegion] = useState(selected);

  useEffect(() => {
    if (!selectedRegion) ref.current?.setAttribute("selected", true);
    setter(selectedRegion);
  }, [selectedRegion]);

  return (
    <div className="flex justify-between items-center">
      <label htmlFor="city" className="block w-20">
        {label}
      </label>
      <select
        className="block grow ml-16 bg-input box-border px-3 py-2 rounded-md"
        onChange={(e) => setSelectedRegion(e.target.value)}
        value={selectedRegion}
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

const signUpDataRegionState = selector({
  key: "signUpDataRegionState",
  get: ({ get }) => {
    const { city, subRegion } = get(signUpState);
    return { city, subRegion };
  },
});

export function LocationSetSection({ set, setter }) {
  const { city, subRegion } = useRecoilValue(signUpDataRegionState);

  return (
    <>
      <div className="mb-3">
        <SelectRegionRow
          label="도시"
          regions={set.map((set) => set.city)}
          setter={setter.city}
          selected={city}
        ></SelectRegionRow>
      </div>

      {city && (
        <div>
          <SelectRegionRow
            label="행정구역"
            regions={set.find((s) => s.city === city).sub}
            setter={setter.sub}
            selected={subRegion}
          ></SelectRegionRow>
        </div>
      )}
    </>
  );
}

export default function FrequencyAndLocation() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [meetNum, setMeetNum] = useState(signUpData.meeting_frequency ?? 1);

  const [city, setCity] = useState(signUpData.city ?? "");
  const [sub, setSub] = useState(signUpData.subRegion ?? "");

  useEffect(() => {
    setSignUpData({ ...signUpData, city: city, subRegion: sub });
  }, [city, sub]);

  useEffect(() => {
    setSignUpData({ ...signUpData, meeting_frequency: meetNum });
  }, [meetNum]);

  return (
    <>
      <FloatingSection>
        <h5>원하는 만남 주기와 거주 지역을 알려주세요.</h5>
      </FloatingSection>
      <FloatingSection>
        <div>
          <SectionTitle>일주일에 원하는 만남 횟수</SectionTitle>
          <div className="mt-14">
            <FrequencySetSection
              meetNum={meetNum}
              setter={(num) => setMeetNum(parseInt(num))}
            />
          </div>
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
          />
        </section>
      </FloatingSection>
    </>
  );
}
