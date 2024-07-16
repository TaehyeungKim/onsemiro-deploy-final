import styles from "./index.module.scss";
import IconImage from "../IconImage";

export default function InterestSelected({ interest }) {
  return (
    <div>
      <div
        className={`relative ${styles.triangle} border-b-background border-b-[10px] mx-auto`}
      ></div>
      <div
        className={`bg-background flex justify-center items-center ${styles.frame} w-fit px-10`}
      >
        {interest.map((v, i) => (
          <div key={i} className="w-4 mx-1">
            <IconImage src={v.icon}></IconImage>
          </div>
        ))}
      </div>
    </div>
  );
}
