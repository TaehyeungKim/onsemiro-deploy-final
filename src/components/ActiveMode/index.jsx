import styles from "./index.module.scss";
import { useState } from "react";

export default function ActiveMode() {
  const [isModeOn, setModeOn] = useState(false);

  const toggleMode = () => setModeOn(!isModeOn);

  return (
    <div
      className="flex items-center flex-col cursor-pointer w-20"
      onClick={toggleMode}
    >
      <div
        className={`bg-slate-300 ${styles.frame} flex items-center overflow-clip relative mb-1`}
      >
        <p className="absolute right-2 text-sm">OFF</p>
        <div
          className={`${
            isModeOn ? styles["below-layer-on"] : styles["below-layer-off"]
          } ${styles["below-layer"]} ${
            styles["transition"]
          } bg-main relative overflow-hidden`}
        >
          <p className="absolute text-sm left-2 w-full text-white">ON</p>
        </div>
        <div
          className={`bg-white rounded-full h-full aspect-square box-border shadow-md absolute ${
            isModeOn ? styles["slider-on"] : styles["slider-off"]
          } ${styles["transition"]} z-20`}
        ></div>
      </div>
      <p className="text-sm">매칭 참여</p>
    </div>
  );
}
