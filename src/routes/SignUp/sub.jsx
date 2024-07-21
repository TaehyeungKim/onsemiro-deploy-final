import AuthenticateSelf from "./subs/authentication";
import KakaoAuth from "./subs/kakaoid";
import AgeAndGender from "./subs/genderAge";
import Sexual from "./subs/sexual";
import Appearance from "./subs/appearance";
import Character from "./subs/character";
import Interest from "./subs/interest";
import FrequencyAndLocation from "./subs/freqandloc";
import SameUniv from "./subs/sameuniv";
import Photos from "./subs/photos";
import Introduction from "./subs/introduction";
import PreferIdentity from "./subs/preferIdentity";
import Ideal from "./subs/ideal";
import NickNameInput from "./subs/nickname";

export default function SignUpSub({ level }) {
  return (
    <main className="px-2 flex flex-col w-full h-fit grow">
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
          default:
        }
      })()}
    </main>
  );
}
