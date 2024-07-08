import HomeHeader from "../../components/HomeHeader";
import MatchingStatus from "../../components/MatchingStatus";
import ActiveMode from "../../components/ActiveMode";
import RecommendLetter from "../../components/MainIconSection/recommend";
import RequestAccepted from "../../components/MainIconSection/request";

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
          <RecommendLetter></RecommendLetter>
          <RequestAccepted></RequestAccepted>
        </section>
      </main>
    </div>
  );
}
