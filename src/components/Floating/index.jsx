import { useRef, useLayoutEffect, useEffect, forwardRef } from "react";
import { useSetRecoilState } from "recoil";
import { layoutFloatingEndState } from "state/state";
import styles from "./index.module.scss";

export function FloatingSection({ children, addedStyle = "" }) {
  const section = useRef(null);

  const setLayoutFloatingEndState = useSetRecoilState(layoutFloatingEndState);

  useLayoutEffect(() => {
    if (
      !section.current?.previousElementSibling ||
      !section.current?.previousElementSibling?.classList.contains(
        "floatingSection"
      )
    ) {
      section.current?.setAttribute("style", "display: flex");
    }
  }, []);

  useEffect(() => {
    section.current?.addEventListener("animationend", (e) => {
      const { nextElementSibling } = e.target;
      if (nextElementSibling) {
        nextElementSibling.setAttribute("style", "display: flex");
      } else {
        setLayoutFloatingEndState(true);
      }
    });
    return () => {
      console.log("unmount");
      setLayoutFloatingEndState(false);
    };
  }, []);

  return (
    <section
      ref={section}
      className={`p-3 flex items-center ${addedStyle} ${styles["floating"]} floatingSection`}
      style={{ display: "none" }}
    >
      <div className="w-full">{children}</div>
    </section>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export const FloatingElement = forwardRef(function FloatingElement(
  { children },
  ref
) {
  return (
    <div
      className={`${styles["floating"]}`}
      style={{ display: "none" }}
      ref={ref}
    >
      {children}
    </div>
  );
});
