import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestOne = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q1</h2>
        <h5>
          너의 은밀한 성향에 대해 고민해본 적 있어?
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
              난 여러 성향을 갖고 있어
              <br />
              다양하게 경험해볼수록 좋잖아?
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
              난 검사는 해봤어!
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
              내 성향에 대해 어느 정도 알기는 해.
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
              검사는 안 해봤지만... 궁금하긴 해.
              <br />
              뭔가 있는 것 같긴 하거든.
            </label>
          </button>
          <button className="h-full block w-full overflow-hidden rounded-sm mb-5">
            <input
              type="radio"
              id="option5"
              name="options"
              value="option5"
              checked={selectedValue === 'option5'}
              onChange={handleOptionChange}
            />
            <label 
              htmlFor="option5"
              className = "w-full h-full flex peer-checked:bg-main bg-background justify-center items-center"
            >
              성향은 딱히 없어!
              <br />
              그냥 궁금하니까 한 번 해보는 거야 ㅋㅋ
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsm")}
        >
          NEXT
        </button>
        </div>
    </>
  );
};

export default TestOne;