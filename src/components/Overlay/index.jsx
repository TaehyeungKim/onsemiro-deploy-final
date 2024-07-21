import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import {
  CustomButtonWithCount,
  MainCustomButton,
} from "components/CustomButton";
import testProfile from "assets/testProfile.png";
import styles from "./styles.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";

function OverlayBackground({ children }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-background-darker z-40 flex items-center justify-center bg-opacity-90">
      {children}
    </div>
  );
}

function FloatAndShrink({ Child, close, children, ...props }) {
  const container = useRef(null);

  const [shrink, setShrink] = useState(false);

  const attachShrink = useCallback(() => {
    if (shrink) {
      container.current?.classList.remove(styles.floating);
      container.current?.classList.add(styles.shrink);
    }
  }, [shrink]);

  const closeWithShrink = useCallback(() => {
    if (shrink) close();
  }, [shrink]);

  useEffect(() => attachShrink(), [shrink]);

  useEffect(() => {
    container.current?.addEventListener("animationend", closeWithShrink);
    return () =>
      container.current?.removeEventListener("animationend", closeWithShrink);
  }, [shrink]);

  return (
    <OverlayBackground>
      <div
        ref={container}
        className={` ${styles.floating} min-w-main-frame bg-background px-1 box-border rounded-xl shadow-md`}
      >
        {
          <Child close={() => setShrink(true)} {...props}>
            {children}
          </Child>
        }
      </div>
    </OverlayBackground>
  );
}

function MatchOverlayMenuLayout({ close, children, title }) {
  return (
    <FloatAndShrink
      Child={MatchOverlayMenuContentFrame}
      close={close}
      title={title}
    >
      {children}
    </FloatAndShrink>
  );
}

function MatchOverlayMenuContentFrame({ title, close, children }) {
  return (
    <>
      <header className="w-full relative flex justify-center items-center after:content-[''] after:block after:h-0 after:absolute after:bottom-0 after:w-11/12 after:border-black after:border-[0.5px] after:opacity-10 ">
        <h3 className="text-center h-9 text-lg">{title}</h3>
        <button className="block w-6  absolute right-4" onClick={close}>
          <IconImage src={closeIcon} />
        </button>
      </header>
      <div className="flex flex-col justify-between w-full mx-auto gap-3 py-4 max-h-[600px] overflow-y-scroll">
        {children}
      </div>
    </>
  );
}

export function MatchMenuOverlay({ count, close, opener }) {
  return (
    <MatchOverlayMenuLayout close={close} title={"매칭 결과 조회"}>
      <div className="w-2/3 mx-auto flex flex-col gap-3">
        <CustomButtonWithCount
          count={count.matching}
          event={{ onClick: () => opener({ for: "result" }) }}
        >
          매칭 결과
        </CustomButtonWithCount>

        <CustomButtonWithCount
          count={count.photo}
          addedStyle="!bg-mint !text-black"
        >
          사진 요청 결과
        </CustomButtonWithCount>
      </div>
    </MatchOverlayMenuLayout>
  );
}

export function MatchResultOverlay({ close, dataByDay = [] }) {
  return (
    <MatchOverlayMenuLayout title={"매칭 결과"} close={close}>
      {dataByDay.map((d, i) => (
        <section key={i} className="w-11/12 mx-auto">
          <header className="w-full relative flex justify-center items-center after:content-[''] after:block after:h-0 after:absolute after:bottom-0 after:w-full after:border-black after:border-[0.5px] pb-2 mb-2">
            {d.day}
          </header>
          <div className="flex flex-col gap-4">
            {d.profiles.map((profile, p) => (
              <article
                key={p}
                className="flex flex-row w-full box-border rounded-lg border-main border-2 p-2 cursor-pointer"
              >
                <div className="w-20 aspect-square rounded-full overflow-hidden flex items-center justify-center">
                  <IconImage src={testProfile} />
                </div>
                <div className="grow flex flex-col justify-between ml-4">
                  <span className="block font-bold">{profile.nickname}</span>
                  <span className="block">
                    {profile.age}세 {profile.gender}
                  </span>
                  <div className="flex w-full gap-2">
                    <span className="bg-main text-white block grow rounded-lg text-center shadow-md">
                      #{profile.univ}
                    </span>
                    <span className="bg-main text-white block grow rounded-lg text-center shadow-md">
                      #{profile.location}
                    </span>
                    <span className="bg-main text-white block grow rounded-lg text-center shadow-md">
                      #{profile.mbti}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </MatchOverlayMenuLayout>
  );
}

export function FloatingCustomAlertLayout({ children, close, ...props }) {
  return (
    <FloatAndShrink Child={CustomAlertLayout} close={close} {...props}>
      {children}
    </FloatAndShrink>
  );
}

export function CustomAlertLayout({ children, close, ...props }) {
  return (
    <div className=" rounded-lg flex flex-col justify-center items-center p-4">
      {children}
      <div className="flex justify-center mt-6 gap-5">
        <MainCustomButton event={{ onClick: props.confirm }}>
          확인
        </MainCustomButton>
        <MainCustomButton
          addedStyle="bg-white !text-black"
          event={{ onClick: close }}
        >
          취소
        </MainCustomButton>
      </div>
    </div>
  );
}
