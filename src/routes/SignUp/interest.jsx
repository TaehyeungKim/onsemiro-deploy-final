import { DataContext } from ".";
import { useContext, useEffect, useState, useMemo } from "react";
import { FloatingSection } from "./components";
import IconImage from "../../components/IconImage";
import InterestSelected from "../../components/InterestSelected";
import { interestValueSet } from "../../assets/asset";

export default function Interest() {
  const dataContext = useContext(DataContext);

  const [interest, setInterest] = useState([]);

  const valueSet = useMemo(() => interestValueSet, []);

  useEffect(() => {
    dataContext.setter({
      ...dataContext.data,
      interest: [...interest.map((v) => v.value)],
    });
  }, [interest]);

  return (
    <>
      <FloatingSection>
        <h5>
          요즘 당신이 빠진 관심사는 무엇인가요?
          <br />
          (복수 선택 가능)
        </h5>
        <div className="flex flex-wrap gap-x-5 gap-y-3 mt-4">
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
                />
                <label
                  className="flex px-2 py-1 bg-sub peer-checked:bg-main items-center"
                  htmlFor={set.value}
                >
                  <div className="w-3 mr-3">
                    <IconImage src={set.icon} />
                  </div>
                  {set.value}
                </label>
              </button>
            ))}
        </div>

        {interest.length > 0 && (
          <div className="flex justify-center mt-9">
            <InterestSelected interest={interest}></InterestSelected>
          </div>
        )}
      </FloatingSection>
    </>
  );
}
