import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestEight = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();


  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q8</h2>
        <h5>
          상대가 자신의 판타지였다는
          <br />
          하드한 플레이를 제안했다
          <br />
          엄두조차 안 나는 플레이에 대한 내 대답은?
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
              아무리 판타지라고 해도
              <br />
              널 아프게 하면서까지 하고 싶진 않아...
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
              잠깐 공부 좀 하고 올게.
              <br />
              그 후에 해보자!
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
              익숙한 걸 제일 잘하니까
              <br />
              그냥 하던대로 하는 건 어때?
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
              군침이 싹 도네...
              <br />
              왜 이제야 말했어?
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmnine")}
        >
          NEXT
        </button>
        </div>
    </>
  );
};
export default TestEight;