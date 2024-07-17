import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestFourteen = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q14</h2>
        <h5>
          성향이 맞지 않는 사람과
          <br />
          도저히 좁힐 수 없는 간극... 어떻게 할까?
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
              그럼 내 성향을 바꿔볼게!
              <br />
              오히려 좋을 수도 있잖아?
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
              각자 조금씩
              <br />
              타협점을 찾아보는 건 어때?
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
              타협은 없어.
              <br />
              잘 맞는 사람 찾아 떠날 거야.
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmresult")}
        >
          DONE!
        </button>
        </div>
    </>
  );
};

export default TestFourteen;