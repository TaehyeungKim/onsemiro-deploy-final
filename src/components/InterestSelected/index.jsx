import styles from "./index.module.scss";
import IconImage from "components/IconImage";

export default function InterestSelected({ icons }) {
  return (
    <div>
      <div
        className={`relative ${styles.triangle} border-b-background border-b-[10px] mx-auto`}
      ></div>
      <div
        className={`bg-background-darker flex justify-center items-center ${styles.frame} w-fit px-10`}
      >
        {icons.map((v, i) => (
          <div key={i} className="w-4 mx-1">
            <IconImage src={v}></IconImage>
          </div>
        ))}
      </div>
    </div>
  );
}
