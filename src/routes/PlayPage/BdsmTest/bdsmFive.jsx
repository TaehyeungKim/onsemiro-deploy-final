import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestFive = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q5</h2>
        <h5>
          비 오는 날, 말없이 나를 찾아온 상대방
          <br />
          젖은 상대방의 모습 중
          <br />
          나를 가장 흥분시키는 포인트는?
        </h5>
        <div className="px-5">
          <button className="h-full block w-full overflow-hidden rounded-sm mb-5">
            <input
              type="radio"
              id="option1"
              name="options"
              value="option1"
              checked={selectedValue === 'option1'}
              onChange={handleOptionChange}
            />
            <label 
              htmlFor="option1"
              className = "w-full h-full flex peer-checked:bg-main bg-background justify-center items-center"
            >
              다 젖은 머리로 나를 쳐다보는
              <br />
              청순가련 눈동자
            </label>
          </button>
          <button className="h-full block w-full overflow-hidden rounded-sm mb-5">
            <input
              type="radio"
              id="option2"
              name="options"
              value="option2"
              checked={selectedValue === 'option2'}
              onChange={handleOptionChange}
            />
            <label 
              htmlFor="option2"
              className = "w-full h-full flex peer-checked:bg-main bg-background justify-center items-center"
            >
              바디 라인이 살짝살짝 보일 정도로
              <br />
              흠뻑 젖은 흰색 티셔츠
            </label>
          </button>
          <button className="h-full block w-full overflow-hidden rounded-sm mb-5">
            <input
              type="radio"
              id="option3"
              name="options"
              value="option3"
              checked={selectedValue === 'option3'}
              onChange={handleOptionChange}
            />
            <label 
              htmlFor="option3"
              className = "w-full h-full flex peer-checked:bg-main bg-background justify-center items-center"
            >
              갈 곳이 없다는 듯한 애처로운 말투
            </label>
          </button>
          <button className="h-full block w-full overflow-hidden rounded-sm mb-5">
            <input
              type="radio"
              id="option4"
              name="options"
              value="option4"
              checked={selectedValue === 'option4'}
              onChange={handleOptionChange}
            />
            <label 
              htmlFor="option4"
              className = "w-full h-full flex peer-checked:bg-main bg-background justify-center items-center"
            >
              셔츠 너머로 보이는
              <br />
              추워서 벌벌 떨고 있는 어깨
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmsix")}
        >
          NEXT
        </button>
        </div>
    </>
  );
};

export default TestFive;