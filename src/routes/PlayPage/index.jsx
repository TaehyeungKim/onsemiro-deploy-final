import { useEffect, useState } from "react";
import PlayLayout from "../../layouts/PlayLayout";
import { PLAY_TESTS } from "../../assets/asset";
import { MainCustomButton } from "components/CustomButton";
import IconImage from "components/IconImage";
import login from "assets/icons/login.png";
import menu from "assets/icons/hambg-menu.png";
import logo from "assets/logo/miroplay.png";
import { useNavigate } from "react-router-dom";

export default function PlayPage() {
  const navigate = useNavigate();
  const [selectedTest, setSelectedTest] = useState(null);
  const [level, setLevel] = useState(null);
  
  const handleBackToMain = () => {
    navigate("/home");
  };
  
  const handleStartTest = (test) => {
    setSelectedTest(test);
    setLevel(0);
  };

  if (selectedTest && level !== null) {
    return (
      <PlayLayout
        test={selectedTest}
        level={level}
        total={selectedTest.questions.length}
        setter={setLevel}
      />
    );
  } 

  return (
    <div className="flex flex-col grow">
      <header className="w-main-frame h-header-height flex flex-row items-center justify-between px-4 py-3 box-border border-b bg-white fixed top-0 z-10">
        <button className="w-8">
          <IconImage src={menu} />
        </button>
        <div className="w-40">
          <IconImage src={logo} />
        </div>
        <button className="w-8">
          <IconImage src={login} />
        </button>
      </header>
      <main className="flex flex-col w-full mt-header-height relative grow bg-main-image bg-fixed bg-center bg-no-repeat">
        <div className="flex flex-row gap-x-5 items-center justify-between fixed top-header-height w-main-frame py-6 px-10 z-10">
          <MainCustomButton
            addedStyle="!w-40"
            onClick={ handleBackToMain }>
            ONSEMIRO로
            <br />
            돌아가기
          </MainCustomButton>
          <MainCustomButton
            addedStyle="!bg-pink-200 !text-black !w-40">
            내 프로필
            <br />
            표시 확인
          </MainCustomButton>
        </div>
        <div className="top-44 w-main-frame p-5 justify-between text-center fixed z-20 bg-main-image bg-fixed bg-center">
          <h3 className="text-2xl font-bold">TEST</h3>
          <h6 className="pt-2 text-md">(상시 업데이트 중)</h6>
        </div>
        <div className="pt-56 pb-5 w-main-frame overflow-auto">
          <section className="flex flex-col space-y-5">
            {PLAY_TESTS.map((test) => (
              <MainCustomButton
                key={test.id}
                addedStyle="!bg-gray-100 !w-72 !h-20 !text-black"
                onClick={() => handleStartTest(test)}
              >
                <h3 className="text-lg">{test.title}</h3>
                <h5 className="text-sm">{test.description}</h5>
              </MainCustomButton>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}