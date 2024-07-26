import bdsmImage from "../../assets/bdsm-test.png";
import { useNavigate } from "react-router-dom";

export function BdsmTest() {
  const navigate = useNavigate();

  return (
    <>
      <main
        className={
          "flex flex-col w-full items-center mt-header-height relative"
        }
      >
        <h3 className="py-11 text-xl">성향 테스트</h3>
        <h5>나의 은밀한 욕구를 만족시켜줄 나의 성향은?</h5>
        <img src={bdsmImage} className="w-full"></img>
        <p className="text-sm mb-11">
          *주의*
          <br />
          이 테스트는 성적 행위를 노골적으로 묘사하는 문항을
          <br />
          <br />
          포함하고 있습니다. 이러한 표현에 모멸감이나 혐오감을
          <br />
          느끼는 분들의 이용은 권장하지 않습니다.
          <br />
          <br />
          <br />
          이 테스트의 모든 질문은 당사자간의 완벽한 합의를 바탕으로,
          <br />
          절대적으로 안전하다는 가정 하에 작성되었습니다.
        </p>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmone")}
        >
          START!
        </button>
      </main>
    </>
  );
}
