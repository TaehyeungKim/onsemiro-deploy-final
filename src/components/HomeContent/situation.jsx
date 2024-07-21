import { MatchSituationMenuOverlay } from "components/Overlay";
import { useState } from "react";

export default function MatchingSituation({ count }) {
  const [overlayVisible, setOverlayVisible] = useState(false);

  if (overlayVisible)
    return (
      <MatchSituationMenuOverlay
        count={count}
        close={() => setOverlayVisible(false)}
      />
    );

  return (
    <button
      className="flex flex-row items-center bg-white text-black relative rounded-md w-2/3 box-border py-2 shadow-md"
      onClick={() => setOverlayVisible(true)}
    >
      <p className="text-base text-center w-full">매칭 현황 보기</p>
      <div className="absolute bg-mathing_count w-4 h-4 rounded-full -top-1 -right-1 flex items-center justify-center">
        <p className="text-white text-xs">{count.matching + count.photo}</p>
      </div>
    </button>
  );
}
