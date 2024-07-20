import IconImage from "../../components/IconImage";
import close from "../../assets/ph_x.png";
import ProgressBar from "../../components/ProgressBar";

export default function PlayLayout({ data }) {
  return (
    <div className="flex flex-col">
      <header className="w-full flex justify-end">
        <div className="w-7">
          <IconImage src={close}></IconImage>
        </div>
      </header>
      <section className="w-full">
        <h1>Q{data.id}</h1>
        <h3>{data.question}</h3>
      </section>
      <section className="w-full flex flex-col">
        {data.answers.map((a, i) => (
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
            />
          </div>
        ))}
      </section>
      <footer className=""></footer>
    </div>
  );
}
