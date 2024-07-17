import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const TestTwo = ({ selectedOption }) => {
  const [selectedValue, setSelectedValue] = useState(selectedOption || '');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
        <h2>Q2</h2>
        <h5>
          너의 성향을 한 번 떠올려보자!
          <br />
          넌 어떤 성향인 것 같아?
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
              난 상대방을 괴롭히고 싶어!
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
              난 내 마음대로 통제하고 싶어!
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
              난 화끈하게 당하고 싶어!
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
              난 상대방에게 리드당하고 싶어!
            </label>
          </button>
        </div>
        <div>
        <button
          className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          onClick={() => navigate("/bdsmthree")}
        >
          NEXT
        </button>
        </div>
    </>
  );
};

export default TestTwo;