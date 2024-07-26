import {
  useRef,
  useEffect,
  useState,
  useCallback,
  useDeferredValue,
} from "react";

import styles from "./index.module.scss";

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
    <div className={`w-full h-4 mx-auto relative flex items-center `}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className={`w-full block absolute top-0 left-0 h-full z-10`}
        defaultValue={defaultValue}
        onChange={(e) => setter(e.target.value)}
      ></input>
      <div
        className={`h-1 w-full bg-main ${options?.bgStyle?.reduce(
          (prev, cur) => `${prev} ` + cur
        )}`}
      >
        <div className="flex justify-between w-full h-full absolute top-0 items-center">
          {captions?.map((caption, i) => (
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

export function DoubleThumbRangeBar({
  min,
  max,
  step,
  captions,
  defaultValue,
  setter,
}) {
  const [smaller, setSmaller] = useState(defaultValue.min);
  const [bigger, setBigger] = useState(defaultValue.max);

  const deferredBiggerValue = useDeferredValue(bigger);
  const deferredSmallerValue = useDeferredValue(smaller);

  const progress = useRef(null);

  useEffect(() => {
    setter.setBigger(bigger);
    setter.setSmaller(smaller);
  }, [smaller, bigger]);

  const controlBiggerValue = useCallback(
    (e) => {
      if (parseInt(e.target.value) <= smaller) {
        setBigger(deferredBiggerValue);
      } else setBigger(parseInt(e.target.value));
    },
    [smaller, deferredBiggerValue]
  );
  const controlSmallerValue = useCallback(
    (e) => {
      if (parseInt(e.target.value) >= bigger) setSmaller(deferredSmallerValue);
      else setSmaller(parseInt(e.target.value));
    },
    [bigger, deferredSmallerValue]
  );

  useEffect(() => {
    const unitLength = 100 / ((max - min) / step);

    progress.current?.setAttribute(
      "style",
      `left: ${((smaller - min) * unitLength) / step}%; right: ${
        ((max - bigger) * unitLength) / step
      }%`
    );
  }, [smaller, bigger]);

  return (
    <div className="flex h-3 items-center w-full relative">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className={`w-full block absolute top-0 left-0 h-full z-10 pointer-events-none`}
        // defaultValue={min}
        value={smaller}
        onChange={controlSmallerValue}
      ></input>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className={`w-full block absolute top-0 left-0 h-full z-10 pointer-events-none`}
        // defaultValue={max}
        value={bigger}
        onChange={controlBiggerValue}
      ></input>
      <div className="w-full h-1 bg-white flex justify-between items-center absolute shadow-md">
        <div ref={progress} className="absolute bg-main shadow-md h-1"></div>
        {captions.map((c) => (
          <div
            key={c}
            className="rounded-full aspect-square h-3 bg-white shadow-md flex justify-center"
          >
            <span className="block text-center translate-y-5 text-xs">{c}</span>
          </div>
        ))}
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
  return (
    <>
      <div className="w-full h-4 mx-auto relative flex items-center mt-14 ">
        <div className="w-full h-1 flex justify-between shadow-md">
          {(() => {
            const arr = [];
            for (let i = min; i <= max; i += step) {
              arr.push(
                <div key={i} className="grow h-full has-[:checked]:z-30 group">
                  <input
                    type="radio"
                    className="peer"
                    hidden
                    name="ex-range"
                    id={`ex-range-${i}`}
                    value={i}
                    onChange={(e) => setter(e.target.value)}
                    // defaultValue={defaultValue}
                    defaultChecked={i === defaultValue ?? false}
                  />
                  <label
                    htmlFor={`ex-range-${i}`}
                    className="flex items-center h-full peer-checked:*:after:range-point-selected peer-checked:bg-main bg-white justify-between"
                  >
                    <div
                      className={`flex items-center justify-center group-first:bg-white shadow-md bg-main ${styles["range-point"]} ${styles["range-point-left"]}`}
                    ></div>
                    <div
                      className={`flex items-center justify-center group-last:bg-white shadow-md bg-main ${styles["range-point"]} ${styles["range-point-right"]}`}
                    ></div>
                  </label>
                </div>
              );
            }
            return arr;
          })()}
        </div>
      </div>
      <div className="w-full h-1 flex justify-between">
        <div className=" h-full aspect-square invisible"></div>
        {captions.map((c, i) => (
          <span
            key={i}
            className={`h-full flex justify-center aspect-square text-center text-xs`}
          >
            {c}
          </span>
        ))}
        <div className="h-full aspect-square invisible"></div>
      </div>
    </>
  );
}

export function SelectionRadioGrid({ collection, name, setter, defaultV }) {
  // const [data, setData] = useRecoilState(atom);

  return (
    <div className="grid grid-cols-2 gap-5 w-5/6 mx-auto mt-10 mb-5">
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
              onChange={
                (e) => setter(e.target.value)
                // (e) => setData({ ...data, [name]: e.target.value })
                // dataContext.setter({
                //   ...dataContext.data,
                //   [name]: e.target.value,
                // })
              }
              defaultChecked={defaultV === value.main ? true : false}
            />
            <label
              htmlFor={value.main}
              className="block bg-input py-2 peer-checked:bg-main"
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

export function CustomTextInput({
  id,
  placeholder,
  defaultValue = null,
  label = "",
  ...props
}) {
  return (
    <div className="relative h-10 flex items-center rounded-lg grow">
      {label && (
        <label htmlFor={id} className="block mr-5">
          {label}
        </label>
      )}

      <div className="grow h-full bg-input rounded-lg overflow-hidden">
        <input
          className="h-full w-full block text-xs pl-3 box-border"
          placeholder={placeholder}
          id={id}
          defaultValue={defaultValue}
          {...props}
        ></input>
      </div>
    </div>
  );
}
