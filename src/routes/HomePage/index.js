import HomeHeader from "../../components/HomeHeader";
import MatchingStatus from "../../components/MatchingStatus";
import ActiveMode from "../../components/ActiveMode";
import MainIconSection from "../../components/MainIconSection";
import Sun from "../../assets/sun.png";
import Love from "../../assets/love 1.png";

import {
  LetterArrive,
  LetterChecked,
  LetterClosed,
  RequestHold,
} from "../../components/MainIconSection/cases";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHeader />
      <main className="flex flex-col w-full mt-header-height relative">
        <div className="flex flex-row items-center justify-between fixed top-header-height w-main-frame py-4 px-2 z-10">
          <MatchingStatus count={1} />
          <ActiveMode />
        </div>
        <section className="mt-28 px-6">
          <MainIconSection icon={Sun} caption={"7/8 아침 쪽지 (08:00)"}>
            <LetterArrive></LetterArrive>
          </MainIconSection>
          <MainIconSection icon={Love} caption={"받은 요청"}>
            <RequestHold count={1}></RequestHold>
          </MainIconSection>
        </section>
      </main>
    </div>
  );
}
