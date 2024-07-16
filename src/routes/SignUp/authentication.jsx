import { DataContext } from ".";
import { useContext } from "react";
import { FloatingSection, SectionTitle } from "./components";
import IconImage from "../../components/IconImage";
import check from "../../assets/check_black.png";
import search from "../../assets/search.png";
import { MainCustomButton } from "../../components/CustomButton";

export default function AuthenticateSelf() {
  const dataContext = useContext(DataContext);
  return (
    <>
      <FloatingSection addedStyle="mt-3">
        <h3>먼저, 본인인증과 학교 인증이 필요해요!</h3>
        <h5 className="flex items-center mt-2">
          <div className="w-3">
            <IconImage src={check} />
          </div>
          이 서비스는 신원이 확인된 사용자만 이용할 수 있어요.
        </h5>
      </FloatingSection>
      <FloatingSection addedStyle="mt-3">
        <SectionTitle>본인인증</SectionTitle>
        <div className="flex mt-2 items-center">
          <button
            className="bg-sub grow rounded-lg py-2"
            onClick={() => {
              dataContext?.setter({ ...dataContext.data, auth_self: true });
              console.log("auth_self");
            }}
          >
            본인인증
          </button>
          <div className="w-7 h-full border-2 rounded-full ml-5">
            <IconImage src={check} />
          </div>
        </div>
      </FloatingSection>
      <FloatingSection addedStyle="mt-20">
        <SectionTitle>학교인증</SectionTitle>
        <div className="mt-2 flex flex-col gap-2">
          <div className="relative h-8  flex items-center rounded-lg overflow-hidden">
            <input
              className="h-full grow placeholder:text-xs placeholder:pl-3 bg-background"
              placeholder="학교를 검색해주세요"
            ></input>
            <button className="h-full absolute right-1">
              <IconImage src={search} />
            </button>
          </div>
          <div className="relative h-8 flex items-center rounded-lg">
            <input
              className="h-full grow block placeholder:text-xs placeholder:pl-3 bg-background rounded-lg"
              placeholder="학교 이메일"
            ></input>
            <MainCustomButton
              addedStyle={"h-full py-0 ml-6 flex items-center"}
              event={{
                onClick: () => {
                  console.log("auth_school");
                  dataContext?.setter({
                    ...dataContext.data,
                    auth_school: true,
                  });
                },
              }}
            >
              인증
            </MainCustomButton>
          </div>
          <div className="relative h-8 flex items-center">
            <input
              className="h-full grow block placeholder:text-xs placeholder:pl-3 bg-background rounded-lg"
              placeholder="인증번호 입력하기"
            ></input>
          </div>
        </div>
      </FloatingSection>
    </>
  );
}
