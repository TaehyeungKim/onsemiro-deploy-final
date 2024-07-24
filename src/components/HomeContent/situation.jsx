import { getMatchingList } from "apis/api";
import { MatchMenuOverlay, MatchResultOverlay } from "components/Overlay";
import { useCallback, useState, useEffect } from "react";
import { useReducer } from "react";
import { cleanMatchList } from "./utils";

function reducer(state, action) {
  return { ...state, ...action };
}

export default function MatchingSituation({ count }) {
  const [state, dispatch] = useReducer(reducer, { for: "home" });
  const [matchResultsData, setMatchResultsData] = useState([]);

  const MatchOverlay = useCallback(() => {
    switch (state.for) {
      case "menu":
        return (
          <MatchMenuOverlay
            count={count}
            close={() => dispatch({ for: "home" })}
            opener={dispatch}
          />
        );
      case "result":
        return (
          <MatchResultOverlay
            close={() => dispatch({ for: "menu" })}
            dataByDay={matchResultsData}
          />
        );
      default:
        return null;
    }
  }, [state]);

  useEffect(() => {
    cleanMatchList().then((res) => setMatchResultsData(res));
  }, []);
  useEffect(() => {
    console.log(matchResultsData);
  }, [matchResultsData]);

  return (
    <>
      <MatchOverlay />
      <button
        className="flex flex-row items-center bg-white text-black relative rounded-md w-2/3 box-border py-2 shadow-md"
        onClick={() => dispatch({ for: "menu" })}
      >
        <p className="text-base text-center w-full">매칭 현황 보기</p>
        <div className="absolute bg-mathing_count w-4 h-4 rounded-full -top-1 -right-1 flex items-center justify-center">
          <p className="text-white text-xs">{count.matching + count.photo}</p>
        </div>
      </button>
    </>
  );
}
