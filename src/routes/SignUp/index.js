import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";
import IconImage from "../../components/IconImage";
import ArorwLeft from "../../assets/arrow_left.png";
import closeButton from "../../assets/ph_x.png";
import SignUpSub from "./sub";

export default function SignUpPage() {
  const TOTAL_LEVEL_COUNT = 14;

  const [curLevel, setCurLevel] = useState(0);
  return (
    <>
      <header className="p-2">
        <nav className="flex flex-row justify-between mb-3">
          <div className="w-3">
            <IconImage src={ArorwLeft} />
          </div>
          <div className="w-4">
            <IconImage src={closeButton} />
          </div>
        </nav>
        <ProgressBar total={TOTAL_LEVEL_COUNT} cur={curLevel} />
        <h5 className="text-right text-xs mt-2">
          {curLevel}/{TOTAL_LEVEL_COUNT}
        </h5>
      </header>
      <SignUpSub></SignUpSub>
    </>
  );
}
