import {
  useRef,
  useLayoutEffect,
  useEffect,
  forwardRef,
  useCallback,
  useState,
  useDeferredValue,
} from "react";
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

export function FloatingElement({ children, condition }) {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if (condition) setVisible(true);
    return () => setVisible(false);
  }, [condition]);

  if (!visible) return;

  return (
    <div className={`${styles["floating"]}`} ref={ref}>
      {children}
    </div>
  );
}

export function FloatAndShrinkElement({ children, condition }) {
  const [elementVisibleState, setElementVisibleState] = useState("invisible");
  const deferredElementVisbleState = useDeferredValue(elementVisibleState);

  const ref = useRef(null);

  useEffect(() => {
    if (condition) setElementVisibleState("visible");
    else {
      if (deferredElementVisbleState === "visible")
        setElementVisibleState("shrink");
    }
  }, [condition]);

  const attachShrink = useCallback(() => {
    if (elementVisibleState === "shrink") {
      ref.current?.classList.remove(styles.floating);
      ref.current?.classList.add(styles.shrinking);
    } else {
      ref.current?.classList.remove(styles.shrinking);
      ref.current?.classList.add(styles.floating);
    }
  }, [elementVisibleState]);

  useEffect(() => {
    ref.current?.setAttribute("style", "display: block");
  }, [condition]);

  useEffect(() => attachShrink(), [elementVisibleState]);

  const closeWithShrink = useCallback(() => {
    if (elementVisibleState === "shrink") setElementVisibleState("invisible");
  }, [elementVisibleState]);

  useEffect(() => {
    ref.current?.addEventListener("animationend", closeWithShrink);
    return () =>
      ref.current?.removeEventListener("animationend", closeWithShrink);
  }, [elementVisibleState]);

  if (elementVisibleState === "invisible") return;

  return (
    <div className={`${styles["floating"]}`} ref={ref}>
      {children}
    </div>
  );
}
