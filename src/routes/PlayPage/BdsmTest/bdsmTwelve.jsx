import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestTwelve = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q12</h2>
        <h5>
          상대방이 갑자기 직장 상황극을 시작하며
          <br />
          나를 궁지에 몰기 시작했다.
          <br />
          상대방은 어떤 직장 동료일까?
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
              나를 선배님이라고 부르는
              <br />
              열정 넘치고 풋풋한 신입사원
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
              승진심사 기간, 내 약점을 쥐고
              <br />
              무언가를 원하는 눈빛의 인사팀장
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
              늘 나한테 차갑게 대하다가
              <br />
              오늘은 뭔가 오묘한 기류가 흐르는 우리 팀 선배
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmthirteen")}
        >
          NEXT
        </button>
        </div>
    </>
  );
};

export default TestTwelve;