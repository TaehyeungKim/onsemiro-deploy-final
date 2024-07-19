import HomeHeader from "../../components/HomeHeader";
import MatchingStatus from "../../components/MatchingStatus";
import ActiveMode from "../../components/ActiveMode";
import Recommend from "../../components/MainIconSection/recommend";
import Request from "../../components/MainIconSection/request";

export default function HomePage() {
  return (
    <div className="flex flex-col grow">
      <HomeHeader />
      <main className="flex flex-col w-full mt-header-height relative grow">
        <div className="flex flex-row items-center justify-end fixed top-header-height w-main-frame py-4 px-2 z-10">
          <ActiveMode />
        </div>
        <section className="mt-28 px-6 flex flex-col items-center justify-center grow">
          <MatchingStatus count={1} />
          <Recommend></Recommend>
          <Request></Request>
        </section>
      </main>
    </div>
  );
}
