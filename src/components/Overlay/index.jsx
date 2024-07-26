import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import {
  CustomButtonWithCount,
  MainCustomButton,
} from "components/CustomButton";

import styles from "./styles.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { CustomTextInput } from "components/CustomInputs";
import { AUTH_UNIV_LIST } from "assets/asset";
import LetterLayout from "layouts/LetterLayout";
import {
  getDetailedInfo,
  getMatchingList,
  getPhotoResults,
  TARGET,
} from "apis/api";
import {
  cleanMatchList,
  soapDetailViewData,
} from "components/HomeContent/utils";
import ProfileWOPhoto from "assets/profile1.png";
import { matchDataState, photoDataState } from "state/state";
import { useRecoilState } from "recoil";

// import { createFuzzyMatcher } from "utils/match";

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
      <div ref={container} className={` ${styles.floating}`}>
        {
          <Child close={() => setShrink(true)} {...props}>
            {children}
          </Child>
        }
      </div>
    </OverlayBackground>
  );
}

function OverlayStandard({ close, children, title }) {
  return (
    <FloatAndShrink Child={OverlayStandardLayout} close={close} title={title}>
      {children}
    </FloatAndShrink>
  );
}

function OverlayStandardLayout({ title, close, children }) {
  return (
    <>
      <div className="min-w-main-frame bg-background px-1 box-border rounded-xl shadow-md">
        <header className="w-full relative flex justify-center items-center after:content-[''] after:block after:h-0 after:absolute after:bottom-0 after:w-11/12 after:border-black after:border-[0.5px] after:opacity-10 ">
          <h3 className="text-center h-9 text-lg">{title}</h3>
          <button className="block w-6  absolute right-4" onClick={close}>
            <IconImage src={closeIcon} />
          </button>
        </header>
        <div className="flex flex-col justify-between w-full mx-auto gap-3 py-4 max-h-[600px] overflow-y-scroll">
          {children}
        </div>
      </div>
    </>
  );
}

export function MatchMenuOverlay({ count, close, opener }) {
  return (
    <OverlayStandard close={close} title={"매칭 결과 조회"}>
      <div className="w-2/3 mx-auto flex flex-col gap-3">
        <CustomButtonWithCount
          count={count.matching}
          onClick={() => opener({ for: "result" })}
        >
          매칭 결과
        </CustomButtonWithCount>

        <CustomButtonWithCount
          count={count.photo}
          addedStyle="!bg-mint !text-black"
          onClick={() => opener({ for: "photo" })}
        >
          사진 요청 결과
        </CustomButtonWithCount>
      </div>
    </OverlayStandard>
  );
}

export function ResultListOverlay({ close, dataByDay = [] }) {
  const [detailVisible, setDetailVisible] = useState(false);
  const [detailInfo, setDetailInfo] = useState(null);
  const [resultsState, setResultsState] = useRecoilState(matchDataState);
  const [photoState, setPhotoState] = useRecoilState(photoDataState);

  if (detailVisible && detailInfo)
    return (
      <FloatingLetterOverlay
        info={[detailInfo]}
        close={() => {
          setDetailVisible(false);
          setDetailInfo(null);
          cleanMatchList(getMatchingList).then((res) => setResultsState(res));
          cleanMatchList(getPhotoResults).then((res) => setPhotoState(res));
        }}
        mode={"detail"}
      />
    );

  return (
    <OverlayStandard title={"매칭 결과"} close={close}>
      {dataByDay.map((d, i) => (
        <section key={i} className="w-11/12 mx-auto">
          <header className="w-full relative flex justify-center items-center after:content-[''] after:block after:h-0 after:absolute after:bottom-0 after:w-full after:border-black after:border-[0.5px] pb-2 mb-2">
            {d.day}
          </header>
          <div className="flex flex-col gap-4">
            {d.data.map((info, p) => (
              <article
                key={p}
                className={`flex flex-row w-full box-border rounded-lg border-main border-2 p-2 cursor-pointer ${
                  info.active ? "bg-main bg-opacity-30" : ""
                }`}
                onClick={async () => {
                  const res = await getDetailedInfo({
                    matching_num: info.matching_num,
                    matching_index: info.matching_index,
                  });

                  if (res.status === 200) {
                    setDetailVisible(true);
                    const data = await soapDetailViewData(
                      res.data,
                      info.matching_index,
                      {
                        date: info.matching_request_at,
                        time: info.time,
                        photo: info.photo,
                      }
                    );
                    setDetailInfo(data);
                  }
                }}
              >
                <div className="w-20 aspect-square rounded-full overflow-hidden flex items-center justify-center">
                  <IconImage
                    src={
                      info.photo ? `${TARGET}/${info.photo}` : ProfileWOPhoto
                    }
                  />
                </div>
                <div className="grow flex flex-col justify-between ml-4">
                  <span className="block font-bold">
                    {info.user2_profile.nickname}
                  </span>
                  <span className="block">
                    {info.user2_profile.age}세 {info.user2_profile.gender}
                  </span>
                  <div className="flex w-full gap-1 text-xs">
                    <span className="bg-main text-white block grow rounded-xl text-center shadow-md py-1">
                      #{info.user2_profile.univ}
                    </span>
                    <span className="bg-main text-white block grow rounded-xl text-center shadow-md py-1">
                      #{info.user2_profile.location}
                    </span>
                    <span className="bg-main text-white block grow rounded-xl text-center shadow-md py-1">
                      #{info.user2_profile.mbti}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </OverlayStandard>
  );
}

function AlertFrame({ children }) {
  return (
    <div className="min-w-main-frame bg-background px-1 box-border  shadow-md rounded-lg flex flex-col justify-center items-center p-4">
      {children}
    </div>
  );
}

export function SignUpCancleAlert({ children, close, ...props }) {
  return (
    <FloatAndShrink Child={FloatingCustomAlertLayout} close={close} {...props}>
      {children}
    </FloatAndShrink>
  );
}

export function PlayExitAlert({ children, close, ...props }) {
  return (
    <FloatAndShrink Child={FloatingCustomAlertLayout} close={close} {...props}>
      {children}
    </FloatAndShrink>
  );
}

function FloatingCustomAlertLayout({ children, close, ...props }) {
  return (
    <AlertFrame>
      {children}
      <div className="flex justify-center mt-6 gap-5">
        <MainCustomButton onClick={props.confirm}>확인</MainCustomButton>
        <MainCustomButton addedStyle="bg-white !text-black" onClick={close}>
          취소
        </MainCustomButton>
      </div>
    </AlertFrame>
  );
}

function SearchOverlayInputSection({ setter, ...props }) {
  return (
    <div className="w-full">
      <CustomTextInput
        id={props.id}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange(e);
          setter(e.target.value);
        }}
      />
    </div>
  );
}

function SearchOverlayResultsSection({ select, results = [] }) {
  return (
    <div className="w-overlay-search">
      {results.length === 0 ? (
        <p className="w-full flex items-center justify-center text-center h-28">
          검색된 결과가 없습니다.
        </p>
      ) : (
        <section className="w-full h-28 overflow-y-scroll grid grid-cols-3 gap-3">
          {results.map((result) => (
            <div key={result} className="w-full h-10">
              <input
                type="radio"
                hidden
                id={`search_${result}`}
                className="peer"
                onChange={(e) => select(e.target.value)}
                value={result}
                name="search"
              ></input>
              <label
                htmlFor={`search_${result}`}
                className="h-full w-full  bg-main text-center rounded-md shadow-md flex items-center justify-center text-white cursor-pointer"
              >
                {result}
              </label>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

function SearchOverlayContent({ select, ...props }) {
  const [input, setInput] = useState(props.defaultValue);
  const [results, setResults] = useState(AUTH_UNIV_LIST);

  useEffect(() => {
    if (input) {
      setResults(
        AUTH_UNIV_LIST.find((univ) => univ === input)
          ? [AUTH_UNIV_LIST.find((univ) => univ === input)]
          : []
      );
    } else setResults(AUTH_UNIV_LIST);
  }, [input]);

  return (
    <>
      <SearchOverlayInputSection setter={setInput} {...props} />
      <SearchOverlayResultsSection results={results} select={select} />
    </>
  );
}

export function SearchOverlay({ close, select, ...props }) {
  return (
    <OverlayStandard close={close} title={"대학 검색"}>
      <SearchOverlayContent select={select} {...props} />
    </OverlayStandard>
  );
}

function FloatingLetterOverlayLayout({ close, children, ...props }) {
  return (
    <FloatAndShrink Child={LetterLayout} close={close} {...props}>
      {{ children }}
    </FloatAndShrink>
  );
}

export function FloatingLetterOverlay({ close, ...props }) {
  return <FloatingLetterOverlayLayout close={close} {...props} />;
}

function NoUserExistsAlertLayout({ close }) {
  return (
    <AlertFrame>
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-bold text-center leading-8">
            해당 번호로 가입된 계정이 없습니다.
            <br />
            회원가입하고 온새미로를 이용해보세요!
          </h4>
        </div>
        <MainCustomButton onClick={close}>
          설문하고 회원가입하기
        </MainCustomButton>
      </div>
    </AlertFrame>
  );
}

function FloatingNoUserExistsAlertLayout({ close }) {
  return <FloatAndShrink Child={NoUserExistsAlertLayout} close={close} />;
}

export function NoUserExistsAlert({ close }) {
  return <FloatingNoUserExistsAlertLayout close={close} />;
}
