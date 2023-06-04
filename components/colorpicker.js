import Overlay from "../components/overlays/test";
import { RgbaStringColorPicker } from "react-colorful";
import { useRef, useEffect, useState } from "react";

export default function ColorPicker({ value, onChange }) {
  const [toggleViewMode, setToggleViewMode] = useState(true);

  const [display, isDisplayed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        isDisplayed(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <div
        style={{
          display: display ? "block" : "none",
          position: "absolute",
          bottom: "-200px",
          zIndex: "100000",
        }}
      >
        <RgbaStringColorPicker color={value} onChange={onChange} />
      </div>
      <button
        className=" h-10 w-[110px] rounded-lg border-[2px] border-white p-5"
        style={{ backgroundColor: value }}
        onClick={() => {
          isDisplayed(!display);
          console.log(display);
        }}
      ></button>
    </div>
  );
}
