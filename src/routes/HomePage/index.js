import HomeHeader from "../../components/HomeHeader";
import MatchingStatus from "../../components/MatchingStatus";
import ActiveMode from "../../components/ActiveMode";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHeader />
      <main className="flex flex-col w-full top-header-height relative">
        <div className="flex flex-row items-center justify-between fixed top-header-height w-main-frame">
          <MatchingStatus count={1} />
          <ActiveMode />
        </div>
      </main>
    </div>
  );
}
