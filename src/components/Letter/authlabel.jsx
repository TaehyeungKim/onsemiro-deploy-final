import IconImage from "components/IconImage";
import check from "assets/icons/check_black.png";

export default function AuthLabel({ children }) {
  return (
    <label className="flex flex-row bg-mint text-black items-center rounded-lg px-4 py-1 text-sm shadow-md mx-1">
      <div className="w-4 mr-2">
        <IconImage src={check}></IconImage>
      </div>
      {children}
    </label>
  );
}
