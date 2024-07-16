import { useRef, useEffect, useState } from "react";

export function FloatingSection({ children, addedStyle = "" }) {
  return <section className={`p-3 ${addedStyle}`}>{children}</section>;
}

export function SectionTitle({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export function RangeBar({ max, min, step, defaultValue, setter, captions }) {
  return (
    <div className="w-full h-4 mx-auto relative flex items-center mt-14">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className="w-full block  absolute top-0 left-0 h-full z-10"
        defaultValue={defaultValue}
        onChange={(e) => setter(e.target.value)}
      ></input>
      <div className="h-1 w-full bg-main">
        <div className="flex justify-between w-full h-full absolute top-0 items-center">
          {captions.map((caption, i) => (
            <div
              key={i}
              className="bg-main rounded-full w-3 aspect-square flex justify-center"
            >
              <p className="h-0 overflow-visible -translate-y-7 text-center whitespace-nowrap w-fit">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExtendedRangeBar({
  max,
  min,
  step,
  defaultValue,
  setter,
  captions,
}) {
  const [innerValue, setInnerValue] = useState(defaultValue);

  const progress = useRef(null);
  const range = useRef(null);

  useEffect(() => {
    progress.current?.setAttribute(
      "style",
      `width: ${
        ((innerValue - range.current.min) * 100) /
        (range.current.max - range.current.min)
      }%`
    );
  }, [innerValue]);

  return (
    <div className="w-full h-4 mx-auto relative flex items-center mt-14">
      <input
        ref={range}
        type="range"
        min={min}
        max={max}
        step={step}
        className={`w-full block  absolute top-0 left-0 h-full z-10`}
        defaultValue={defaultValue}
        onChange={(e) => {
          setter(e.target.value);
          setInnerValue(e.target.value);
        }}
      ></input>
      <div className="h-1 w-full border-main border-[1px] relative box-border">
        <div
          className="absolute left-0 right-0 h-full bg-main"
          ref={progress}
        ></div>
        <div className="flex justify-between w-full h-full absolute top-0 items-center">
          <div className="rounded-full w-3 aspect-square invisible"></div>
          {captions.map((caption, i) => (
            <div key={i} className="bg-main rounded-full w-3 aspect-square">
              <p className="w-0 h-0 text-xs overflow-visible -translate-y-7 -translate-x-1">
                {caption}
              </p>
            </div>
          ))}
          <div className=" rounded-full w-3 aspect-square invisible"></div>
        </div>
      </div>
    </div>
  );
}

export function SelectionRadioGrid({ collection, name, dataContext }) {
  return (
    <div className="grid grid-cols-2 gap-5 w-3/4 mx-auto mt-10">
      {collection.map((value, i) => {
        return (
          <div
            key={i}
            className="relative mx-auto w-full rounded-lg overflow-hidden shadow-xl"
          >
            <input
              type="radio"
              hidden
              value={value.main}
              id={value.main}
              className="peer"
              name={name}
              onChange={(e) =>
                dataContext.setter({
                  ...dataContext.data,
                  [name]: e.target.value,
                })
              }
            />
            <label
              htmlFor={value.main}
              className="block bg-background py-2 peer-checked:bg-main"
            >
              <div className="text-center">
                <h6>{value.main}</h6>
                {value.sub ? <p>{value.sub}</p> : null}
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
}
