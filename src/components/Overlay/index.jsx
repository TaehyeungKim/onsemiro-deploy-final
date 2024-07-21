import IconImage from "components/IconImage";
import closeIcon from "assets/icons/ph_x.png";
import { CustomButtonWithCount } from "components/CustomButton";

function OverlayBackground({ children }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-background z-40 flex items-center justify-center bg-opacity-70">
      {children}
    </div>
  );
}

export function MatchSituationMenuOverlay({ count, close }) {
  return (
    <OverlayBackground>
      <div className="w-2/3 bg-background px-2 box-border">
        <header className="w-full relative flex justify-center items-center after:content-[''] after:block after:h-0 after:absolute after:bottom-0 after:w-2/3 after:border-black after:border-[0.5px] after:opacity-10 ">
          <h3 className="text-center h-9 text-lg">매칭 현황 보기</h3>
          <button className="block w-6  absolute right-4" onClick={close}>
            <IconImage src={closeIcon} />
          </button>
        </header>
        <div className="flex flex-col justify-between w-2/3 mx-auto gap-3 py-4">
          <CustomButtonWithCount count={count.matching}>
            매칭 결과
          </CustomButtonWithCount>

          <CustomButtonWithCount
            count={count.photo}
            addedStyle="!bg-mint !text-black"
          >
            사진 요청 결과
          </CustomButtonWithCount>
        </div>
      </div>
    </OverlayBackground>
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
