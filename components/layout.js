import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useState, useEffect, useRef } from "react";
import logo from "../public/banner.png";
import Image from "next/image";
import { FaExpand, FaBars } from "react-icons/fa";

export default function Layout({ children }) {
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const [pageSize, setPagesize] = useState(["70%", "80%"]);
  const ref = useRef(null);

  const togglePageSize = () => {
    if (pageSize[0] == "70%") setPagesize(["80%", "90%"]);
    else setPagesize(["70%", "80%"]);
  };

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setToggleViewMode(true);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div
      className={`
            flex
             h-screen w-screen
             items-center justify-center bg-[#d13c3c]`}
    >
      <div className="bgfx"></div>

      <style jsx>{`
        @media screen and (min-width: 1200px) {
          .box {
            width: ${pageSize[0]};
            height: ${pageSize[1]};
          }
        }
      `}</style>
      <main
        className={` box flex
                rounded-xl bg-background-dark
                 `}
      >
        <div
          className={`mainbar flex w-full flex-col items-center ${
            toggleViewMode ? "main-untoggled" : "main-toggled"
          }`}
        >
          <Navbar>
            <div className={`flex items-center justify-center`}>
              <button
                className={`hidden items-center text-3xl text-primary  md:flex`}
                onClick={() => setToggleViewMode(!toggleViewMode)}
              >
                <FaBars />
              </button>

              <div className={`w-[1vw]`}></div>

              <Image priority src={logo} width={250} alt="" />
            </div>
            <div className={`flex items-center`}>
              <button
                onClick={() => togglePageSize()}
                className={`m-button  bg-background-dark text-primary`}
              >
                <FaExpand />
              </button>
            </div>
          </Navbar>
          <div className="h-3"></div>
          <div
            className={`
                    h-[80%] w-[90%] overflow-x-visible
                    overflow-y-scroll rounded-xl bg-[#292B33]
                    `}
          >
            {children}
          </div>
        </div>
        <div
          ref={ref}
          className={`sidebar w-[300px] bg-background-dark text-white ${
            toggleViewMode ? "navbar-untoggled" : "navbar-toggled"
          } flex justify-center
                    overflow-x-visible overflow-y-scroll
                    bg-background-dark`}
        >
          <SideBar />
        </div>
      </main>
    </div>
  );
}
