import IconImage from "../../components/IconImage";
import close from "../../assets/icons/ph_x.png";
import ProgressBar from "../../components/ProgressBar";
import { MainCustomButton } from "../../components/CustomButton";
import { useEffect } from "react";

export default function PlayLayout({ data, level, total, setter }) {
  useEffect(() => {
    console.log(data, level);
  }, [data]);

  return (
    <div className="flex flex-col">
      <header className="w-full flex justify-end">
        <div className="w-7">
          <IconImage src={close}></IconImage>
        </div>
      </header>
      <section className="w-full">
        <h1>Q{data && data.id}</h1>
        <h3>{data && data.question}</h3>
      </section>
      <section className="w-full flex flex-col">
        {data?.answers.map((a, i) => (
          <div className="w-full overflow-hidden rounded-lg shadow-xl" key={i}>
            <input
              type="radio"
              name={`answer_${data.id}`}
              id={`answer_${data.id}_${i}`}
              className="peer"
            />
            <label
              htmlFor={`answer_${data.id}_${i}`}
              className="bg-pale peer-checked:bg-main block w-full"
            >
              {a}
            </label>
          </div>
        ))}
      </section>
      <footer className="w-full">
        <ProgressBar total={total} cur={level} />
        <div className="w-full flex">
          <MainCustomButton
            addedStyle={"!bg-input"}
            event={{ onClick: () => setter(level - 1) }}
          >
            PREV
          </MainCustomButton>
          <MainCustomButton
            addedStyle={"bg-main"}
            event={{ onClick: () => setter(level + 1) }}
          >
            NEXT
          </MainCustomButton>
        </div>
      </footer>
    </div>
  );
}
