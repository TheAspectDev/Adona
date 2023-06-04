import Overlay from "../../components/overlays/test";
import { RgbaStringColorPicker } from "react-colorful";
import { useEffect, useState } from "react";
import Silua from "../../components/colorpicker";

export default function overlayEdit() {
  const [bgcolor, setBgcolor] = useState("rgba(0, 0, 0, 0.1)");
  const [textcolor, setTextcolor] = useState("rgba(255, 255, 255, 1)");
  const [barborder, setbarborder] = useState(2);
  const [bordercolor, setBordercolor] = useState("rgba(0, 0, 0, 0.3)");
  const [barcolor, setBarcolor] = useState("rgba(255,255,255,1)");
  const [bottomtext, setBottomtext] = useState("rgb(219, 219, 219, 0.5)");
  const [bartext, setBartext] = useState("rgb(0, 0, 0, 1)");

  function setBorder(event) {
    setbarborder(event.target.value / 20);
  }

  return (
    <main className="h-full">
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@900&display=swap");

          * {
            font-family: "Vazirmatn", sans-serif;
          }
          input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
          }
          input[type="range"]:focus {
            outline: none;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            width: 100%;
            height: 12px;
            cursor: pointer;
            animate: 0.2s;
            box-shadow: 1px 1px 10px #ff3838;
            border-radius: 0px;
            background: #ff3838;
            border-radius: 1px;
            border: 1px solid #ff3838;
          }
          input[type="range"]::-webkit-slider-thumb {
            border: 2px solid #ff7a7a;
            height: 23px;
            box-shadow: 0px 0px 20px #ff7a7a;
            width: 23px;
            border-radius: 23px;
            background: #ff7a7a;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -7px;
          }
        `}
      </style>
      <div className="flex h-full w-full flex-row-reverse ">
        <div className="w-[50%]">
          <div className="flex flex-col items-center justify-center gap-x-5 pt-5 text-right text-[30px]">
            <p> بدنه</p>
            <div className="h-1 w-[60%] rounded-full bg-white/10"></div>
          </div>
          <div className="flex items-center justify-center gap-x-5 pl-5 pr-5 pt-5 text-right">
            <div>
              <label>رنگ پس زمینه</label>
              <Silua value={bgcolor} onChange={setBgcolor} />
            </div>
            <div>
              <label>رنگ هدف</label>
              <Silua value={textcolor} onChange={setTextcolor} />
            </div>
          </div>
          <div className="flex flex-col gap-x-5 pl-[25%] pr-[25%] pt-5 text-right">
            <label>اندازه حاشیه</label>
            <input
              min={0}
              max={100}
              value={barborder * 20}
              onChange={setBorder}
              type="range"
            ></input>
          </div>
          <div className="flex items-center justify-center gap-x-5 pl-5 pr-5 pt-5 text-right">
            <div>
              <label>رنگ هاشیه </label>
              <Silua value={bordercolor} onChange={setBordercolor} />
            </div>
            <div>
              <label>مقدار سپرده شده</label>
              <Silua value={barcolor} onChange={setBarcolor} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-x-5 pt-5 text-right text-[30px]">
            <p>رنگ ها</p>

            <div className="h-1 w-[60%] rounded-full bg-white/10"></div>
          </div>
          <div className="flex items-center justify-center gap-x-5 pl-5 pr-5 pt-5  text-right">
            <div>
              <label>رنگ متن زیرین </label>
              <Silua value={bottomtext} onChange={setBottomtext} />
            </div>
            <div>
              <label>متن سپرده شده</label>
              <Silua value={bartext} onChange={setBartext} />
            </div>
          </div>
        </div>

        <div className="h-full w-[50%]">
          <div className="flex h-[100%] w-[100%] items-center justify-center bg-white/10 ">
            <Overlay
              bgcolor={bgcolor}
              textcolor={textcolor}
              barcolor={barcolor}
              barborder={`${barborder}px solid ${bordercolor}`}
              bottomtext={bottomtext}
              bartext={bartext}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
