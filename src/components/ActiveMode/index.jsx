import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { toggleActiveMode, getActiveMode } from "apis/api";
import { activeState } from "state/state";

export default function ActiveMode() {
  const [isModeOn, setModeOn] = useRecoilState(activeState);

  const toggleMode = async () => {
    toggleActiveMode().then((res) => setModeOn(res));
  };

  useEffect(() => {
    getActiveMode().then((res) => setModeOn(res));
  }, []);

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
