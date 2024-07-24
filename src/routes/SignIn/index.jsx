import { CustomTextInput } from "components/CustomInputs";

import { MainCustomButton } from "components/CustomButton";
import { useState, useRef } from "react";
import { signIn } from "apis/api";
import { getCookie } from "utils/cookie";
import { useNavigate } from "react-router-dom";
import { NoUserExistsAlert } from "components/Overlay";

import styles from "./index.module.scss";
import { FloatAndShrinkElement } from "components/Floating";

export default function SignInPage() {
  const [phoneInput, setPhoneInput] = useState("");
  const [verificationCodeInput, setVerificationCodeInput] = useState("");

  const [verifyInputVisible, setVerifyInputVisible] = useState(false);

  const [noUserExistsAlertVisible, setNoUserExistsAlertVisible] =
    useState(false);

  const navigate = useNavigate();

  return (
    <>
      {noUserExistsAlertVisible && (
        <NoUserExistsAlert
          close={() => navigate("/signup")}
        ></NoUserExistsAlert>
      )}
      <main className="flex flex-col justify-center min-h-screen box-border px-5">
        <h2 className="text-4xl font-bold leading-snug mb-9">
          나에게 온 쪽지를
          <br /> 보러 가볼까요?
        </h2>
        <div className="flex mb-4">
          <CustomTextInput
            id="signin_phone"
            placeholder={"전화번호"}
            onChange={(e) => setPhoneInput(e.target.value)}
          />
          <div className="ml-6">
            <MainCustomButton
              onClick={() => {
                if (verifyInputVisible) return;
                signIn({ phone_num: phoneInput })
                  .then((res) => setVerifyInputVisible(true))
                  .catch((reason) => {
                    console.log(reason);
                    if (reason.response.status === 400)
                      setNoUserExistsAlertVisible(true);
                  });
              }}
              addedStyle={`${
                verifyInputVisible ? "!bg-input-darker !text-white" : null
              } `}
            >
              인증
            </MainCustomButton>
          </div>
        </div>
        {getCookie("access_token") && verifyInputVisible ? (
          <div className={`block ${styles.afterLogin}`}>
            <div className={`flex ${styles.verificationAppear} mb-3`}>
              <CustomTextInput
                id="phone_verify"
                placeholder={"인증번호 입력하기"}
                onChange={(e) => setVerificationCodeInput(e.target.value)}
              />
            </div>
            <FloatAndShrinkElement condition={verificationCodeInput}>
              <MainCustomButton
                addedStyle="w-full"
                onClick={() => {
                  getCookie("access_token") && navigate("/home");
                }}
              >
                로그인하기
              </MainCustomButton>
            </FloatAndShrinkElement>
          </div>
        ) : null}
        <h6 className="mt-3">* 전화번호는 소개에 노출되지 않습니다.</h6>
        <div className="mt-20 w-full flex-col flex items-center gap-3">
          <h5 className="font-bold">아직 계정이 없다면?</h5>
          <MainCustomButton onClick={() => navigate("/signup")}>
            설문하고 회원가입하기
          </MainCustomButton>
        </div>
      </main>
    </>
  );
}
