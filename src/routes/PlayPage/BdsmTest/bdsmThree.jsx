import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestThree = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q3</h2>
        <h5>
          애인이 바람피우는 꿈을 꾸다가
          <br />
          너무 열 받아서 깨버렸어
          <br />
          내 꿈속에서 바람피운 애인의 모습은?
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
              다른 사람과 방 침대에 누워있는 애인
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
              아파트 입구에서 다른 사람과 손잡고 나오는 애인
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
              낯선 사람과 낯 뜨거운
              <br />
              19금 DM을 주고받은 애인
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
              다른 사람에게 마음이 간다고
              <br />
              담담하게 말하는 애인
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmfour")}
        >
          NEXT
        </button>
        </div>
    </>
  );
};

export default TestThree;