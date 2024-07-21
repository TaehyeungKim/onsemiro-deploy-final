import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import { CustomButtonWithCount } from "components/CustomButton";
import testProfile from "assets/testProfile.png";

function OverlayBackground({ children }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-background z-40 flex items-center justify-center bg-opacity-70">
      {children}
    </div>
  );
}

function MatchOverlayMenuLayout({ title, children, close }) {
  return (
    <OverlayBackground>
      <div className="min-w-main-frame bg-background px-1 box-border ">
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
    </OverlayBackground>
  );
}

export function MatchSituationMenuOverlay({ count, close, opener }) {
  return (
    <MatchOverlayMenuLayout title={"매칭 현황 보기"} close={close}>
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
                className="flex flex-row w-full box-border rounded-lg border-main border-2 p-2 "
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

export function CustomAlertLayout({ children }) {
  return (
    <OverlayBackground>
      <div className="bg-background-darker rounded-lg flex flex-col justify-center items-center p-4">
        {children}
      </div>
    </OverlayBackground>
  );
}
