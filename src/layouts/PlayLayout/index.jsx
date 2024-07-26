import IconImage from "../../components/IconImage";
import close from "../../assets/icons/ph_x.png";
import ProgressBar from "../../components/ProgressBar";
import { MainCustomButton } from "../../components/CustomButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PLAY_DATA } from "assets/asset";
import { PlayExitAlert } from "components/Overlay";

export default function PlayLayout({ test, level, total, setter }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedCheckBoxes, setSelectedCheckBoxes] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [stopAlertVisible, setStopAlertVisible] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [endTestVisible, setEndTestVisible] = useState(false);

  useEffect(() => {
    console.log(test, level);
  }, [test, level]);

  useEffect(() => {
    if (selectedAnswers.length === total && level === total) {
      setShowResults(true);
    }
  }, [selectedAnswers, level, total]);

  useEffect(() => {
    selectedAnswers.sort((a,b) => a.questionId - b.questionId)
  }, [level])

  const data = test.questions[level];

  const handleAnswerChange = (questionId, answerIndex) => {
    setSelectedAnswers((prev) => ([...prev, {
      questionId, answerIndex
    }]));
  };

  useEffect(() => {
    if (selectedAnswers.length > 0)
    handleNextClick();
  }, [selectedAnswers]);

  const handleNextClick = () => {
    if (level + 1 < total) {
      setter(level + 1);
    } else {
      const allAnswered = selectedAnswers.length === total;
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
    const newSelectedCheckBoxes = Object.keys(selectedAnswers).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {}
    );
    setSelectedCheckBoxes(newSelectedCheckBoxes);
  };

  const handleDeselectAll = () => {
    const newSelectedCheckBoxes = Object.keys(selectedAnswers).reduce(
      (acc, key) => {
        acc[key] = false;
        return acc;
      },
      {}
    );
    setSelectedCheckBoxes(newSelectedCheckBoxes);
  };

  const handleCompleteSelection = () => {
    setEndTestVisible(true);
  };

  const handleClose = () => {
    setStopAlertVisible(true);
  };

  const confirmClose = () => {
    setter(null);
  };

  const handleStartTest = () => {
    setStartTest(true);
  };

  if (showResults) {
    console.log(selectedAnswers)
    return (
      <div className="flex flex-col h-screen p-5">
        {stopAlertVisible && (
          <PlayExitAlert
            close={() => setStopAlertVisible(false)}
            confirm={confirmClose}
          >
            <h4 className="font-bold">테스트를 종료하시겠습니까?</h4>
          </PlayExitAlert>
        )}
        {endTestVisible && (
          <PlayExitAlert
            close={() => setEndTestVisible(false)}
            confirm={confirmClose}
          >
            <h4 className="font-bold">프로필에 등록할 문항을 선택 완료했습니다.</h4>
          </PlayExitAlert>
        )}
        <header className="w-full flex justify-end pl-2 pr-2">
          <div className="w-7 cursor-pointer" onClick={handleClose}>
            <IconImage src={close}></IconImage>
          </div>
        </header>
        <header className="w-full flex justify-center">
          <h1 className="text-3xl font-bold">테스트 완료!</h1>
        </header>
        <section className="w-full py-5">
          <h3 className="text-lg text-left">
            내 프로필에 추가하고 싶은 문항을 선택하세요. <br /> 상대에게 보여줄
            수 있습니다.
          </h3>
        </section>
        <div className="flex justify-around mb-4">
          <button
            className="w-48 mb-4 bg-gray-200 p-2 rounded"
            onClick={handleSelectAll}
          >
            문항 전체 선택
          </button>
          <button
            className="w-48 mb-4 bg-gray-200 p-2 rounded"
            onClick={handleDeselectAll}
          >
            선택 취소
          </button>
        </div>
        <section className="flex flex-col flex-1 overflow-auto">
          {selectedAnswers.map((a) => {
            const answerIndex = a.answerIndex;
            const question = test.questions.find(
              (q) => q.id === parseInt(a.questionId)
            );
            const answer = question.answers[answerIndex];

            return (
              <div
                key={a.questionId}
                onClick={() => handleCheckboxChange(a.questionId)}
                className={`w-full flex items-center justify-start mb-4 p-2 border rounded shadow cursor-pointer ${
                  selectedCheckBoxes[a.questionId] ? "bg-main" : ""
                }`}
              >
                <div>
                  <p className="font-bold">
                    Q{parseInt(a.questionId) + 1}. {question.question}
                  </p>
                  <p>
                    A{parseInt(a.questionId) + 1}. {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
        <footer className="w-full p-5 flex justify-center">
          <MainCustomButton
            addedStyle={"!w-72"}
            onClick={handleCompleteSelection}
          >
            선택 완료
          </MainCustomButton>
        </footer>
      </div>
    );
  } else {
    if (!startTest) {
      return (
        <div className="flex flex-col h-screen">
          {stopAlertVisible && (
            <PlayExitAlert
              close={() => setStopAlertVisible(false)}
              confirm={confirmClose}
            >
              <h4 className="font-bold text-center">
                미로플레이 메인 화면으로 돌아가시겠습니까?
              </h4>
            </PlayExitAlert>
          )}
          <header className="w-full flex justify-end p-2">
            <div className="w-7 cursor-pointer" onClick={handleClose}>
              <IconImage src={close}></IconImage>
            </div>
          </header>
          <main
            className={
              "flex flex-col w-full items-center relative justify-between"
            }
          >
            <h3 className="pt-2 pb-5 text-3xl font-bold">{test.title}</h3>
            <h5 className="text-md font-light pb-5">{test.comment}</h5>
            <img src={test.image} className="h-80"></img>
            <p className="text-sm font-extralight text-center">
              {test.concern}
            </p>
          </main>
          <footer className="w-full p-5">
            <MainCustomButton
              addedStyle={"!w-72 !font-medium !text-2xl"}
              onClick={handleStartTest}
            >
              START!
            </MainCustomButton>
          </footer>
        </div>
      );
    } else {

      return (
        <div className="flex flex-col h-screen">
          {stopAlertVisible && (
            <PlayExitAlert
              close={() => setStopAlertVisible(false)}
              confirm={confirmClose}
            >
              <h4 className="font-bold text-center">
                여기서 테스트를 그만두시면 처음부터 다시 진행해야 해요.
                <br />
                다음에 다시 진행하시겠습니까?
              </h4>
            </PlayExitAlert>
          )}
          <header className="w-full flex justify-end p-2">
            <div className="w-7 cursor-pointer" onClick={handleClose}>
              <IconImage src={close}></IconImage>
            </div>
          </header>
          <section className="w-full p-5">
            <h1 className="text-3xl font-bold pb-5">Q{level + 1}</h1>
            <h3 className="text-lg">{data.question}</h3>
          </section>
          <section className="flex flex-col flex-1 ml-2 mr-6">
            {data.answers.map((a, i) => (
              <div
                className="w-full flex-1 flex items-center justify-center m-2 overflow-hidden rounded-lg shadow-xl"
                key={i}
              >
                <input
                  type="radio"
                  name={`answer_${level}`}
                  id={`answer_${level}_${i}`}
                  className="peer"
                  checked={selectedAnswers.find((answer) => 
                    answer.questionId === level)?.answerIndex === i}
                  onChange={() => {
                    handleAnswerChange(level, i)
                    console.log(level)
                  }}
                />
                <label
                  htmlFor={`answer_${level}_${i}`}
                  className="bg-pale peer-checked:bg-main hover:bg-main flex w-full h-full items-center justify-center p-1 text-center"
                >
                  {a}
                </label>
              </div>
            ))}
          </section>
          <footer className="w-full p-5">
            <ProgressBar total={total} cur={level + 1} />
            <div className="w-full flex justify-end">
              {level + 1}/{total}
            </div>
            <div className="w-full flex justify-between mt-10">
              <MainCustomButton
                addedStyle={"!bg-input !w-36 !text-black"}
                onClick={handlePrevClick}
              >
                PREV
              </MainCustomButton>
              <MainCustomButton
                addedStyle={"bg-main !w-36"}
                onClick={handleNextClick}
              >
                NEXT
              </MainCustomButton>
            </div>
          </footer>
        </div>
      );
    }
  }
}
