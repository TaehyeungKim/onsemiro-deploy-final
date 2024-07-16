import AuthenticateSelf from "./authentication";
import KakaoAuth from "./kakaoid";
import AgeAndGender from "./genderAge";
import Sexual from "./sexual";
import Appearance from "./appearance";
import Character from "./character";
import Interest from "./interest";
import FrequencyAndLocation from "./freqandloc";
import SameUniv from "./sameuniv";
import Photos from "./photos";
import Introduction from "./introduction";

export default function SignUpSub({ level }) {
  return (
    <main className="px-2 flex flex-col w-full h-fit">
      {(() => {
        switch (level) {
          case 0:
            return <AuthenticateSelf />;
          case 1:
            return <KakaoAuth />;
          case 2:
            return <AgeAndGender />;
          case 3:
            return <Sexual />;
          case 4:
            return <Appearance />;
          case 5:
            return <Character />;
          case 6:
            return <Interest />;
          case 7:
            return <FrequencyAndLocation />;
          case 8:
            return <SameUniv />;
          case 9:
            return <Photos />;
          case 10:
            return <Introduction />;
        }
      })()}
    </main>
  );
}
