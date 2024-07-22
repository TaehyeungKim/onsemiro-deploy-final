import IconImage from "../../components/IconImage";
import close from "../../assets/icons/ph_x.png";
import ProgressBar from "../../components/ProgressBar";
import { MainCustomButton } from "../../components/CustomButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { PLAY_DATA } from "assets/asset";


export default function PlayLayout({ data, level, total, setter }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedCheckBoxes, setSelectedCheckBoxes] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data, level);
  }, [data]);

  const handleAnswerChange = (questionId, answerIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleNextClick = () => {
    if (level + 1 < total) {
      setter(level + 1);
    } else {
      const allAnswered = Object.keys(selectedAnswers).length === total;
      if (allAnswered) {
        setShowResults(true);
      } else {
        alert("모든 질문에 답변해주세요.");
      }
    }
  };

  const handlePrevClick = () => {
    if (level > 0) {
      setter(level - 1);
    } else {
      alert("첫 번째 질문입니다.");
      }
  };

  const handleCheckboxChange = (questionId) => {
    setSelectedCheckBoxes((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(selectedCheckBoxes).every(Boolean);
    setSelectedCheckBoxes((prev) =>
      Object.keys(prev).reduce((acc, key) => {
        acc[key] = !allChecked;
        return acc;
      }, {})
    );
  };

  const handleCompleteSelection = () => {
    alert("프로필에 표시할 문항 선택 완료!");
    navigate("/home");
  };

  if ( showResults ) {
    return (
      <div className="flex flex-col h-screen p-5">
        <header className="w-full flex justify-end p-2">
          <div className="w-7">
            <IconImage src={close}></IconImage>
          </div>
        </header>
        <header className="w-full flex justify-center">
          <h1 className="text-3xl font-bold">테스트 완료!</h1>
        </header>
        <section className="w-full py-5">
          <h3 className="text-lg text-left">
            내 프로필에 추가하고 싶은 문항을 선택하세요. <br /> 상대에게 보여줄 수 있습니다.
          </h3>
        </section>
        <section className="flex flex-col flex-1 overflow-auto">
          <button
            className="mb-4 bg-gray-200 p-2 rounded"
            onClick={handleSelectAll}
          >
            {Object.values(selectedCheckBoxes).every(Boolean)
              ? "선택 취소"
              : "문항 전체 선택"}
          </button>
          {Object.keys(selectedAnswers).map((questionId) => {
            const questionIndex = parseInt(questionId, 10);
            const question = PLAY_DATA[questionIndex];
            const answerIndex = selectedAnswers[questionId];
            const answer = question?.answers?.[answerIndex];

            return (
              <div
                key={questionId}
                className="w-full flex items-center justify-start mb-4 p-2 border rounded shadow"
              >
                <input
                  type="checkbox"
                  checked={selectedCheckBoxes[questionId]}
                  onChange={() => handleCheckboxChange(questionId)}
                  className="mr-2"
                />
                <div>
                  <p className="font-bold">Q. {question?.question}</p>
                  <p>A. {answer}</p>
                </div>
              </div>
            )
          })}
        </section>
        <footer className="w-full p-5 flex justify-center">
          <MainCustomButton
            addedStyle={"bg-main"}
            event={{ onClick: handleCompleteSelection }}
          >
            선택 완료
          </MainCustomButton>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-screen">
        <header className="w-full flex justify-end p-2">
          <div className="w-7">
            <IconImage src={close}></IconImage>
          </div>
        </header>
        <section className="w-full p-5">
          <h1 className="text-3xl font-bold pb-5">Q{data && data.id + 1}</h1>
          <h3 className="text-lg">{data && data.question}</h3>
        </section>
        <section className="flex flex-col flex-1 ml-2 mr-6">
          {data?.answers.map((a, i) => (
            <div className="w-full flex-1 flex items-center justify-center m-2 overflow-hidden rounded-lg shadow-xl" key={i}>
              <input
                type="radio"
                name={`answer_${data.id}`}
                id={`answer_${data.id}_${i}`}
                className="peer"
                checked={selectedAnswers[data.id] === i}
                onChange={() => handleAnswerChange(data.id, i)}
              />
              <label
                htmlFor={`answer_${data.id}_${i}`}
                className="bg-pale peer-checked:bg-main flex w-full h-full items-center justify-center p-1 text-center"
              >
                {a}
              </label>
            </div>
          ))}
        </section>
        <footer className="w-full p-5">
          <ProgressBar total={total} cur={level+1} />
          <div className="w-full flex justify-end">{level+1}/{total}</div>
          <div className="w-full flex justify-between mt-10">
            <MainCustomButton
              addedStyle={"!bg-input"}
              event={{ onClick: handlePrevClick }}
            >
              PREV
            </MainCustomButton>
            <MainCustomButton
              addedStyle={"bg-main"}
              event={{ onClick: handleNextClick  }}
            >
              NEXT
            </MainCustomButton>
          </div>
        </footer>
      </div>
    );
  };
};
