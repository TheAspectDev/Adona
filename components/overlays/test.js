import { Vazirmatn, Baloo_Bhaijaan_2, Markazi_Text } from "next/font/google";
import { useEffect } from "react";

const vazirmatn = Baloo_Bhaijaan_2({
  weight: "400",
  subsets: ["arabic"],
});
const markazi = Markazi_Text({
  weight: "500",
  subsets: ["arabic"],
});

export default function overlay({
  bgcolor = " rgba(0, 0, 0, 0.7)",
  textcolor = "rgb(255,255,255)",
  barborder = "1px solid rgb(255,255,255,0.4)",
  barcolor = "rgb(255,255,255)",
  bartext = "rgb(255,255,255)",
  bottomtext = "rgb(219, 219, 219, 1)",
}) {
  return (
    <main
      className={`
             text-[15px] font-light `}
    >
      <div
        className={`shape
                first-letter flex
                    min-w-[325px] flex-col items-center 
                    rounded-[10px] p-[5px]
                `}
        style={{
          backgroundColor: bgcolor,
          boxShadow: `0 0 5px ${bgcolor}`,
          color: textcolor,
        }}
      >
        <h1 className={`text-shadow text-[18px] ${vazirmatn.className}`}>
          : ❤ اینترنت ماهیانه خرداد ❤ هدف بعدی
        </h1>

        <div
          className="progressBar flex h-[100%] w-[90%] justify-end rounded-full"
          style={{ border: barborder }}
        >
          <div
            className="flex h-[100%] w-[67%] items-center justify-center rounded-full"
            style={{ backgroundColor: barcolor }}
          >
            <h1
              className={`relative left-3 text-[20px] font-light ${markazi.className}`}
              style={{ color: bartext }}
            >
              ۶۷%
            </h1>
          </div>
        </div>
        <div
          className={`flex flex-row-reverse gap-x-1 ${markazi.className}`}
          style={{ color: bottomtext }}
        >
          <p> ۶۷۰,۰۰۰ </p>
          <p>از</p>
          <p>۱,۰۰۰,۰۰۰</p>
          <p>تومان</p>
          <p>(%۶۷)</p>
        </div>
      </div>

      <style jsx>
        {`
          .shape {
            transition: opacity 0.3s;
            text-align: center;
          }
          .text-shadow {
            text-weight: 100;
            text-shadow: 0px 2px 3px ${textcolor}, 0px 2px 3px z ${textcolor};
          }
        `}
      </style>
    </main>
  );
}
