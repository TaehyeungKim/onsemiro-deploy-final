import { useEffect, useState, useMemo } from "react";
import { FloatingSection } from "components/Floating";
import IconImage from "components/IconImage";
import InterestSelected from "components/InterestSelected";
import { interestValueSet } from "assets/asset";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function Interest() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const valueSet = useMemo(() => interestValueSet, []);

  const [interest, setInterest] = useState(signUpData.interest ?? []);

  const [icons, setIcons] = useState(
    signUpData.interest
      ? [
          ...signUpData.interest.map(
            (interest) => valueSet.find((set) => set === interest).icon
          ),
        ]
      : []
  );

  useEffect(() => {
    setSignUpData({ ...signUpData, interest: [...interest] });

    setIcons([
      ...interest.map(
        (interest) => valueSet.find((set) => set === interest).icon
      ),
    ]);
  }, [interest]);

  return (
    <>
      <FloatingSection>
        <h5>
          요즘 당신이 빠진 관심사는 무엇인가요?
          <br />
          (복수 선택 가능)
        </h5>
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
          {valueSet &&
            valueSet.map((set, i) => (
              <button key={i} className="overflow-hidden rounded-md">
                <input
                  className="peer"
                  hidden
                  id={set.value}
                  type="checkbox"
                  name="interest"
                  onChange={(e) => {
                    if (e.target.checked) setInterest([...interest, set]);
                    else setInterest([...interest.filter((v) => v !== set)]);
                  }}
                  defaultChecked={interest.find((v) => v === set) ?? false}
                />
                <label
                  className="flex px-2 py-1 bg-sub peer-checked:bg-main items-center text-sm"
                  htmlFor={set.value}
                >
                  <div className="w-3 mr-2">
                    <IconImage src={set.icon} />
                  </div>
                  {set.value}
                </label>
              </button>
            ))}
        </div>

        {interest.length > 0 && (
          <div className="flex justify-center mt-2">
            <InterestSelected icons={icons}></InterestSelected>
          </div>
        )}
      </FloatingSection>
    </>
  );
}
