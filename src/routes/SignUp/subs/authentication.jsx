import { useState } from "react";
import {
  FloatingSection,
  SectionTitle,
  CustomTextInput,
} from "components/CustomInputs";
import IconImage from "components/IconImage";
import check from "assets/icons/check_black.png";
import search from "assets/icons/search.png";
import { MainCustomButton } from "components/CustomButton";
import { signUp, authSchool } from "apis/api";
import { useRecoilState } from "recoil";
import { signUpState } from "state/state";

export default function AuthenticateSelf() {
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [authSchoolInput, setAuthSchoolInput] = useState({
    school_name: "",
    school_email: "",
  });

  return (
    <>
      <FloatingSection addedStyle="mt-3">
        <h3>먼저, 전화 번호 인증과 학교 인증이 필요해요!</h3>
        <h5 className="flex items-center mt-2">
          <div className="w-3">
            <IconImage src={check} />
          </div>
          이 서비스는 신원이 확인된 사용자만 이용할 수 있어요.
        </h5>
      </FloatingSection>
      <FloatingSection addedStyle="mt-3">
        <SectionTitle>번호 인증</SectionTitle>
        <div className="mt-2">
          <div className="mb-2">
            <CustomTextInput
              placeholder={"이름을 입력하세요."}
              id={"auth_name"}
              label={"이름"}
              event={{ onChange: setNameInput }}
            />
          </div>
          <div className="mb-2 flex">
            <CustomTextInput
              id="auth_phone"
              placeholder={"전화번호"}
              event={{ onChange: setPhoneInput }}
            />
            <MainCustomButton
              addedStyle={"h-full py-0 ml-6 flex items-center"}
              event={{
                onClick: () => {
                  signUp({ phone_num: phoneInput });
                },
              }}
            >
              인증
            </MainCustomButton>
          </div>
        </div>
      </FloatingSection>
      <FloatingSection addedStyle="mt-20">
        <SectionTitle>학교인증</SectionTitle>
        <div className="mt-2 flex flex-col gap-2">
          <div className="relative flex items-center">
            <CustomTextInput
              id="auth_school_search"
              placeholder={"학교를 검색해주세요."}
              event={{
                onChange: (v) =>
                  setAuthSchoolInput({ ...authSchoolInput, school_name: v }),
              }}
            />
            <button className="h-full absolute right-1">
              <IconImage src={search} />
            </button>
          </div>
          <div className="flex items-center">
            <CustomTextInput
              id="auth_schoolEmail"
              placeholder={"학교 이메일"}
              event={{
                onChange: (v) =>
                  setAuthSchoolInput({ ...authSchoolInput, school_email: v }),
              }}
            />
            <MainCustomButton
              addedStyle={"h-full py-0 ml-6 flex items-center"}
              event={{
                onClick: () => {
                  authSchool({ email: authSchoolInput.school_email }).then(
                    (res) => {
                      if (res.status === 200) {
                        // dataContext?.setter({
                        //   ...dataContext.data,
                        //   univ: authSchoolInput.school_name,
                        // });
                        setSignUpData({
                          ...signUpData,
                          univ: authSchoolInput.school_name,
                        });
                      }
                    }
                  );
                },
              }}
            >
              인증
            </MainCustomButton>
          </div>
          <div>
            <CustomTextInput
              id="auth_school_verify_code"
              placeholder={"인증번호 입력하기"}
            />
          </div>
        </div>
      </FloatingSection>
    </>
  );
}
