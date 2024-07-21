import HomeHeader from "components/HomeHeader";
import MatchingSituation from "components/HomeContent/situation";
import ActiveMode from "components/ActiveMode";
import Recommend from "components/HomeContent/recommend";
import Request from "components/HomeContent/request";

export default function HomePage() {
  return (
    <div className="flex flex-col grow">
      <HomeHeader />
      <main className="flex flex-col w-full mt-header-height relative grow bg-main-image bg-fixed bg-center bg-no-repeat">
        <div className="flex flex-row items-center justify-end fixed top-header-height w-main-frame py-4 px-2 z-10">
          <ActiveMode />
        </div>
        <section className="mt-28 px-6 flex flex-col items-center justify-center grow">
          <MatchingSituation count={{ matching: 1, photo: 1 }} />
          <Recommend></Recommend>
          <Request></Request>
        </section>
      </main>
    </div>
  );
}
