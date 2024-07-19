import { DataContext } from ".";
import { useContext, useState, useEffect } from "react";
import { FloatingSection } from "./components";
import IconImage from "../../components/IconImage";
import Ok from "../../assets/ok.png";
import No from "../../assets/no.png";

export default function SameUniv() {
  const dataContext = useContext(DataContext);

  const [sameUniv, setSameUniv] = useState(
    dataContext.data.same_univ === false ? false : true
  );

  useEffect(() => {
    dataContext.setter({ ...dataContext.data, same_univ: sameUniv });
  }, [sameUniv]);

  return (
    <>
      <FloatingSection>
        <h5>온새미로에서 당신과 같은 대학의 사람들을 만나도 상관 없나요?</h5>
      </FloatingSection>
      <FloatingSection addedStyle="mt-10">
        <div className="px-10">
          <button className="h-10 block w-full overflow-hidden rounded-md mb-3">
            <input
              type="radio"
              hidden
              name="same_univ"
              id="ok"
              className="peer"
              value={true}
              defaultChecked={sameUniv === true ?? false}
              onChange={(e) => setSameUniv(e.target.value === "true")}
            />
            <label
              htmlFor="ok"
              className="w-full h-full flex peer-checked:bg-main bg-input justify-center items-center"
            >
              <div className="w-3">
                <IconImage src={Ok} />
              </div>
              상관없어요.
            </label>
          </button>
          <button className="h-10 block w-full overflow-hidden rounded-md mb-3">
            <input
              type="radio"
              hidden
              name="same_univ"
              id="no"
              className="peer"
              value={false}
              defaultChecked={sameUniv === false ?? false}
              onChange={(e) => setSameUniv(e.target.value === "true")}
            />
            <label
              htmlFor="no"
              className="w-full h-full flex peer-checked:bg-main bg-input justify-center items-center"
            >
              <div className="w-3">
                <IconImage src={No} />
              </div>
              배제해주세요.
            </label>
          </button>
        </div>
      </FloatingSection>
    </>
  );
}
