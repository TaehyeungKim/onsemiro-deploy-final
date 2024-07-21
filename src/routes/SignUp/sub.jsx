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
import NickNameInput from "./nickname";

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
            return <NickNameInput />;
          case 3:
            return <AgeAndGender />;
          case 4:
            return <Sexual />;
          case 5:
            return <Appearance />;
          case 6:
            return <Character />;
          case 7:
            return <Interest />;
          case 8:
            return <FrequencyAndLocation />;
          case 9:
            return <Photos />;
          case 10:
            return <Introduction />;
          case 11:
            return <PreferIdentity />;
          case 12:
            return <SameUniv />;
          case 13:
            return <Ideal />;
        }
      })()}
    </main>
  );
}
