import { useNavigate } from "react-router-dom";

export function PlayButtonArea() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row w-full justify-center gap-4 mt-5">
      <button
        className="bg-play-black text-white aspect-square cursor-pointer w-24 text-center p-5 box-border rounded-lg shadow-md"
        onClick={() => navigate("/play")}
      >
        MIRO
        <br />
        PLAY
      </button>
      <button className="bg-play-black text-white aspect-square cursor-pointer w-24 text-center p-5 box-border rounded-lg shadow-md">
        MIRO
        <br />
        SHOP
      </button>
    </div>
  );
}
