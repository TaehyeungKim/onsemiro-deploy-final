import IconImage from "../IconImage";
import check from "../../assets/icons/check.png";

export default function AuthLabel({ children }) {
  return (
    <label className="flex flex-row bg-auth text-white items-center rounded-lg px-4 py-1 text-sm shadow-md mx-1">
      <div className="w-4 mr-2">
        <IconImage src={check}></IconImage>
      </div>
      {children}
    </label>
  );
}
