import IconImage from "../IconImage";
// import profile from "../../assets/matching-profile.png";
import match from "../../assets/match-link.png";

export default function MatchingStatus({ count }) {
  return (
    <button className="flex flex-row items-center bg-main text-white relative rounded-2xl w-40 box-border pl-2 py-2 justify-between pr-4 shadow-lg">
      <div className="w-9">
        <IconImage src={match} />
      </div>
      <p className="text-base">매칭 현황 보기</p>
      <div className="absolute bg-mathing_count w-4 h-4 rounded-full -top-1 -right-1 flex items-center justify-center">
        <p className="text-white text-xs">{count}</p>
      </div>
    </button>
  );
}
