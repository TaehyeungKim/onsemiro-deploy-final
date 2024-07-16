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
import PreferIdentity from "./preferIdentity";
import Ideal from "./ideal";

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
            return <Photos />;
          case 9:
            return <Introduction />;
          case 10:
            return <PreferIdentity />;
          case 11:
            return <SameUniv />;
          case 12:
            return <Ideal />;
        }
      })()}
    </main>
  );
}
