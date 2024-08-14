import HomeHeader from "components/HomeHeader";
import MatchingSituation from "components/HomeContent/situation";
import ActiveMode from "components/ActiveMode";
import Recommend from "components/HomeContent/recommend";
import Request from "components/HomeContent/request";
import { useRecoilValue } from "recoil";
import { matchDataState, photoDataState } from "state/state";
import { useEffect } from "react";
import { PlayButtonArea } from "components/PlayRelated";

export default function HomePage() {
  const matchResults = useRecoilValue(matchDataState);
  const photoResults = useRecoilValue(photoDataState);

  return (
    <div className="w-full flex flex-col grow">
      <HomeHeader />
      <main className="flex flex-col w-full mt-header-height relative grow bg-main-image bg-fixed bg-center bg-no-repeat bg-cover">
        <div className="flex flex-row items-center justify-end fixed top-header-height  max-w-main-frame w-screen py-4 px-2 z-10">
          <ActiveMode />
        </div>
        <section className="px-6 flex flex-col items-center justify-center grow">
          <MatchingSituation
            count={{
              matching: matchResults.reduce(
                (prev, cur) => prev + cur.data.length,
                0
              ),
              photo: photoResults.reduce(
                (prev, cur) => prev + cur.data.length,
                0
              ),
            }}
          />
          <Recommend></Recommend>
          <Request></Request>
          <PlayButtonArea />
        </section>
      </main>
    </div>
  );
}
