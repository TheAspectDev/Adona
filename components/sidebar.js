import {
  FaHome,
  FaHistory,
  FaNetworkWired,
  FaRegCheckCircle,
  FaTools,
  FaMoneyCheck,
  FaDiscord,
  FaSignOutAlt,
} from "react-icons/fa";

import Image from "next/image";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  weight: "900",
  subsets: ["latin"],
});

export default function SideBar(data) {
  return (
    <>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@900&display=swap");

          * {
            font-family: "Vazirmatn", sans-serif;
          }
        `}
      </style>

      <main
        className={`
                text-right
                `}
      >
        <div
          className={`ml-3 mr-3 mt-3 flex flex-col
                items-center justify-center gap-y-1`}
        >
          <Image
            className={`rounded-full`}
            src={"/profile.png"}
            width={200}
            height={175}
          />

          <h1 className="pb-1 pt-3">Aspect</h1>

          <button className={`side-button side-active`}>
            <p>داشبورد</p> <FaHome />
          </button>
          <button className={`side-button`}>
            <p>درگاه شما</p>
            <FaMoneyCheck />
          </button>
          <button className={`side-button`}>
            <p>تاریخچه</p>
            <FaHistory />
          </button>
          <button className={`side-button`}>
            <p>ابزار</p>
            <FaTools />
          </button>
          <button className={`side-button`}>
            <p>ارتباط</p>
            <FaNetworkWired />
          </button>
          <button className={`side-button`}>
            <p>اشتراک</p>
            <FaRegCheckCircle />
          </button>
          <button className={`side-button`}>
            <p>دیسکورد</p>
            <FaDiscord />
          </button>
          <button className={`side-button`}>
            <p>خروج</p>
            <FaSignOutAlt />
          </button>
        </div>
      </main>
    </>
  );
}
