import HomeHeader from "components/HomeHeader";
import MatchingSituation from "components/HomeContent/situation";
import ActiveMode from "components/ActiveMode";
import Recommend from "components/HomeContent/recommend";
import Request from "components/HomeContent/request";
import { useRecoilValue } from "recoil";
import { matchDataState, photoDataState } from "state/state";
import { useEffect } from "react";

export default function HomePage() {
  const matchResults = useRecoilValue(matchDataState);
  const photoResults = useRecoilValue(photoDataState);

  useEffect(() => {
    console.log(
      matchResults.flat(),
      matchResults.length,
      photoResults.flat(),
      photoResults.length
    );
  }, [matchResults, photoResults]);

  return (
    <div className="flex flex-col grow">
      <HomeHeader />
      <main className="flex flex-col w-full mt-header-height relative grow bg-main-image bg-fixed bg-center bg-no-repeat">
        <div className="flex flex-row items-center justify-end fixed top-header-height w-main-frame py-4 px-2 z-10">
          <ActiveMode />
        </div>
        <section className="mt-28 px-6 flex flex-col items-center justify-center grow">
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
        </section>
      </main>
    </div>
  );
}
