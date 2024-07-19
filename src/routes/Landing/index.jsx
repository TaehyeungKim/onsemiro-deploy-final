import letter from "../../assets/landing-letter.png";
import HomeHeader from "../../components/HomeHeader";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../apis/api";
import { useEffect } from "react";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    signIn({ phone_num: "dkdkdkdkdkdk" });
  }, []);

  return (
    <>
      <HomeHeader />
      <main
        className={
          "flex flex-col w-full items-center mt-header-height relative"
        }
      >
        <h3 className="py-11 text-xl">나와 꼭 맞는 상대를 찾을 수는 없을까?</h3>
        <img src={letter} className="w-full"></img>
        <p className="text-sm mb-11">
          '온새미로'는
          <br />
          ‘본래 그대로’라는 뜻의 순우리말입니다.
          <br />
          <br />
          세상에는 무수히 많은 취향을 가진 사람들이 존재하는데,
          <br />
          지금 나의 모습을 그대로 좋아하는 사람은 어디있을까요?
          <br />
          <br />
          내 마음에 쏙 드는, 검증된 프로필을 받아보세요.
          <br />
          온새미로는 세상의 모든 성적 지향과 성향을 존중합니다.
        </p>
        <button
          className="bg-main text-white w-80 box-border py-4 rounded-lg text-xl mb-5 shadow-lg"
          onClick={() => navigate("/signup")}
        >
          설문하고 회원가입하기
        </button>
        <button className="bg-sub text-black w-80 px-16 py-4 rounded-lg text-xl mb-11 shadow-lg">
          로그인하기
        </button>
      </main>
    </>
  );
}
