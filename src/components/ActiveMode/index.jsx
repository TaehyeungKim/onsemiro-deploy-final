import styles from "./index.module.scss";
import { useState } from "react";

export default function ActiveMode() {
  const [isModeOn, setModeOn] = useState(false);

  const toggleMode = () => setModeOn(!isModeOn);

  return (
    <div className="flex items-center cursor-pointer" onClick={toggleMode}>
      <p className="text-base mr-5">매칭 활성화</p>
      <div
        className={`bg-slate-300 ${styles.frame} flex items-center overflow-clip relative`}
      >
        <p className="absolute right-2 text-sm">OFF</p>
        <div
          className={`${
            isModeOn ? styles["below-layer-on"] : styles["below-layer-off"]
          } ${styles["below-layer"]} ${
            styles["transition"]
          } bg-light-green relative overflow-hidden`}
        >
          <p className="absolute text-sm left-2 w-full text-white">ON</p>
        </div>
        <div
          className={`bg-white rounded-full h-full aspect-square box-border shadow-md absolute ${
            isModeOn ? styles["slider-on"] : styles["slider-off"]
          } ${styles["transition"]} z-20`}
        ></div>
      </div>
    </div>
  );
}
