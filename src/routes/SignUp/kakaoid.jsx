import { DataContext } from ".";
import { useContext } from "react";
import { FloatingSection } from "./components";
import IconImage from "../../components/IconImage";

import howToKakao from "../../assets/howto_kakao_id.png";

export default function KakaoAuth() {
  const dataContext = useContext(DataContext);
  return (
    <FloatingSection addedStyle="mt-6">
      <h3 className="text-xl">카카오톡 아이디를 입력해주세요.</h3>
      <h5 className="mt-6 pl-1">
        카카오톡 아이디는 양측 모두
        <br />
        매칭에 동의했을 때 외에는 절대 공개되지 않아요
      </h5>
      <div className="relative h-8 flex items-center mt-6 px-3">
        <input
          className="h-full grow block placeholder:text-xs placeholder:pl-3 bg-background rounded-lg"
          placeholder="카카오톡 아이디 입력하기"
          onChange={(e) =>
            dataContext?.setter({
              ...dataContext.data,
              kakao_id: e.target.value,
            })
          }
          defaultValue={dataContext.data.kakao_id ?? null}
        ></input>
      </div>
      <div className="w-3/4 m-auto mt-20">
        <IconImage src={howToKakao} />
      </div>
    </FloatingSection>
  );
}
