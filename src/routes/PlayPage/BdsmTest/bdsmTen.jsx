import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestTen = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q10</h2>
        <h5>
          호텔에서 새로운 플레이를 제안하는 상대방!
          <br />
          방에 있는 물건 중 뭘 사용해볼까?
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
              묶으면 쉽게 풀리지 않을 것 같은
              <br />
              아이보리색 암막커튼 끈
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
              내 바지에 끼워져 있는
              <br />
              최고급 소가죽 벨트
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
              눈을 가리면 아무것도 보이지 않는
              <br />
              벨벳 소재의 안대
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
              한 시간이 지나도 촉촉한
              <br />
              황금색 바디 오일
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmeleven")}
        >
          NEXT
        </button>
        </div>
    </>
  );
};

export default TestTen;