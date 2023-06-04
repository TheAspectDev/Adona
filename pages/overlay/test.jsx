import Overlay from "../../components/overlays/test";
import { useEffect, useState } from "react";

export default function overlayEdit() {
  const [bgcolor, setBgcolor] = useState("rgba(0, 0, 0, 1)");
  const [textcolor, setTextcolor] = useState("rgba(255, 0, 0, 1)");
  const [barborder, setbarborder] = useState(2);
  const [bordercolor, setBordercolor] = useState("rgba(255, 0, 0, 0.3)");
  const [barcolor, setBarcolor] = useState("rgba(255,0,0,1)");
  const [bottomtext, setBottomtext] = useState("rgb(255, 0, 0, 1)");
  const [bartext, setBartext] = useState("rgb(0, 0, 0, 1)");

  let doresize = false;
  useEffect(() => {
    function rSize() {
      if (doresize == false) {
        document.getElementById("goalholder").style.transform =
          "translateX(-50%) translateY(-50%) scale(" +
          document.body.clientWidth / document.body.clientHeight +
          ")";
      } else {
        if (
          document.getElementById("goalholder").clientWidth /
            document.getElementById("goalholder").clientHeight >
          document.body.clientWidth / document.body.clientHeight
        ) {
          document.getElementById("goalholder").style.transform =
            "translateX(-50%) translateY(-50%) scale(" +
            document.body.clientWidth /
              document.getElementById("goalholder").clientWidth +
            ")";
          console.log;
        } else {
          document.getElementById("goalholder").style.transform =
            "translateX(-50%) translateY(-50%) scale(" +
            document.body.clientHeight /
              document.getElementById("goalholder").clientHeight +
            ")";
        }
      }
    }

    window.addEventListener("resize", function (event) {
      rSize();
    });
  });
  return (
    <main>
      <style jsx>
        {`
          .goalholder {
            top: 50%;
            right: unset;
            left: 50%;
            padding: 35px;
            width: 1px;
            bottom: unset;
            position: absolute;

            width: 30%;
            transform: translateX(-50%) translateY(-50%) scale(2);
          }
        `}
      </style>
      <div id="goalholder" className="goalholder min-w-[400px]">
        <Overlay
          bgcolor={bgcolor}
          textcolor={textcolor}
          barcolor={barcolor}
          barborder={`${barborder}px solid ${bordercolor}`}
          bottomtext={bottomtext}
          bartext={bartext}
        />
      </div>
    </main>
  );
}
