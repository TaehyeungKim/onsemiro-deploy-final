import { useRef, useEffect, useState, useMemo } from "react";

export function FloatingSection({ children, addedStyle = "" }) {
  return <section className={`p-3 ${addedStyle}`}>{children}</section>;
}

export function SectionTitle({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export function RangeBar({
  max,
  min,
  step,
  defaultValue,
  setter,
  captions,
  options = null,
}) {
  return (
    <div className="w-full h-4 mx-auto relative flex items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className="w-full block  absolute top-0 left-0 h-full z-10"
        defaultValue={defaultValue}
        onChange={(e) => setter(e.target.value)}
      ></input>
      <div
        className={`h-1 w-full bg-main ${options?.bgStyle?.reduce(
          (prev, cur) => `${prev} ` + cur
        )}`}
      >
        <div className="flex justify-between w-full h-full absolute top-0 items-center">
          {captions.map((caption, i) => (
            <div
              key={i}
              className={`bg-main rounded-full w-3 aspect-square flex justify-center ${options?.captionCircleStyle?.reduce(
                (prev, cur) => `${prev} ` + `${cur}`
              )}`}
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

export function DoubleThumbRangeBar({ former, latter }) {
  const [formerValue, setFormerValue] = useState(former.default);
  const [latterValue, setLatterValue] = useState(latter.default);

  const progress = useRef(null);

  useEffect(() => {
    console.log(formerValue, latterValue);
  }, []);

  useEffect(() => {
    progress.current?.setAttribute(
      "style",
      `left: ${
        (((formerValue - former.range[0]) /
          (former.range[former.range.length - 1] - former.range[0])) *
          100 *
          (former.range.length - 1)) /
        (former.range.length + latter.range.length - 1)
      }%; right: ${
        (((latter.range[latter.range.length - 1] - latterValue) /
          (latter.range[latter.range.length - 1] - latter.range[0])) *
          100 *
          (latter.range.length - 1)) /
        (former.range.length + latter.range.length - 1)
      }%`
    );
  }, [formerValue, latterValue]);

  return (
    <div className="flex items-center w-full relative">
      <div
        className="absolute h-1 bg-main w-auto z-10 shadow-md"
        ref={progress}
      ></div>
      <div className="grow">
        <RangeBar
          min={former.range[0]}
          max={former.range[former.range.length - 1]}
          step={former.step}
          defaultValue={former.default}
          setter={(age) => {
            setFormerValue(parseInt(age));
            former.setter(age);
          }}
          captions={former.captions}
          options={{
            captionCircleStyle: [
              "!bg-white",
              // "!shadow-md",
              // "!border-main",
              // "!shadow-main",
              // "!border-[0.5px]",
            ],
            bgStyle: ["!bg-background"],
          }}
        />
      </div>
      <div
        className={`h-1 bg-white box-border border-main border-[0.3px]`}
        style={{
          width: `${100 / (former.range.length + latter.range.length - 1)}%`,
        }}
      ></div>
      <div className="grow">
        <RangeBar
          min={latter.range[0]}
          max={latter.range[latter.range.length - 1]}
          step={latter.step}
          defaultValue={latter.default}
          setter={(age) => {
            setLatterValue(parseInt(age));
            latter.setter(age);
          }}
          captions={latter.captions}
          options={{
            captionCircleStyle: [
              "!bg-white",
              // "!shadow-md",
              // "!border-main",
              // "!shadow-main",
              // "!border-[0.5px]",
            ],
            bgStyle: ["!bg-background", ""],
          }}
        />
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

  const UNIT_NUM = (max - min) / step;

  const progressLeftTransform = useMemo(() => {
    return (((innerValue - min) / step) * 100) / UNIT_NUM;
  }, [innerValue]);

  //   ((innerValue - range.current.min) * 100) / // `width: ${
  //   (range.current.max - range.current.min)
  // }%`

  useEffect(() => {
    progress.current?.setAttribute(
      "style",
      `left: ${progressLeftTransform}%; width: ${100 / UNIT_NUM}%`
    );
  }, [innerValue]);

  useEffect(() => {}, []);

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
        <div className="absolute h-full bg-main" ref={progress}></div>
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
              defaultChecked={
                dataContext.data[name] === value.main ? true : false
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

export function CustomTextInput({ id, placeholder, label = "", event = null }) {
  return (
    <div className="relative h-10 flex items-center rounded-lg grow">
      {label && (
        <label htmlFor={id} className="block mr-5">
          {label}
        </label>
      )}

      <div className="grow h-full bg-background rounded-lg overflow-hidden">
        <input
          className="h-full w-full block text-xs pl-3 box-border"
          placeholder={placeholder}
          id={id}
          onChange={(e) => event?.onChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
