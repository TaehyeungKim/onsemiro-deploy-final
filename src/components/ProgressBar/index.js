import { useState, useEffect, useRef } from "react";

export default function ProgressBar({ total, cur }) {
  const bar = useRef(null);

  useEffect(() => {
    bar.current?.setAttribute("style", `width: ${(cur * 100) / total}%`);
  }, [cur]);

  return (
    <div
      className={`flex flex-row flex-wrap box-border bg-background h-4 rounded-md shadow-inner overflow-hidden`}
    >
      <div
        ref={bar}
        className={`box-border bg-main rounded-md bar-shadow transition-width duration-700 ease-in-out`}
      ></div>
    </div>
  );
}
