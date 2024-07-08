import Evening from "../../assets/evening.png";
import Night from "../../assets/night.png";
import Sun from "../../assets/sun.png";

export const timeMatch = (time) => {
  const t = parseInt(time);
  if (t < 10) return { icon: Sun, time: "아침" };
  else if (t < 22) return { icon: Evening, time: "저녁" };
  return { icon: Night, time: "밤" };
};
