import IconImage from "../IconImage";
import profile from "../../assets/matching-profile.png";

export default function MatchingStatus({ count }) {
  return (
    <button className="flex flex-col justify-center w-20">
      <div className="w-full relative">
        <IconImage src={profile} />
        <p className="text-sm">매칭 현황</p>
        <div className="absolute bg-mathing_count w-4 h-4 rounded-full top-2 right-2 flex items-center justify-center">
          <p className="text-white text-xs">{count}</p>
        </div>
      </div>
    </button>
  );
}
