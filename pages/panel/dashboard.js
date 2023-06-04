import { useEffect, useState } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import { isAuthenticated, getUserDetails } from "../../utils";
import Image from "next/image";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import faker from "faker";
import { monthlyChart, weeklyChart } from "../chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [sessions, setSessions] = useState([]);

  // Used for authentication process, as serverside code is private, i think its better to keep it down.
  /*useEffect(() => {
    const token = getCookie("_token");
    // redirects back if not logged in.
    if (!isAuthenticated(token)) {
      deleteCookie("_token");

      window.location.href = "/login";
    } else {
      runPage();
    }

    function runPage() {
      // Gets User Data
      // E.g ( Username, Email, Sessions )
      const getUserData = async () => {
        if (await isAuthenticated(token)) {
          await getUserDetails(token).then((e) => {
            let a = JSON.parse(e).callback;
            setUsername(a.username);
            setEmail(a.email);
            setSessions(a.sessions);
          });
        } else {
          window.location.href = "/login";
        }
      };
      getUserData();
    }
  }, []);*/

  const e2p = (s) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  ChartJS.defaults.font.family = '"Vazirmatn", sans-serif';

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

      <div className="flex h-full w-full gap-5 p-10 czsize:m-0 czsize:p-3  bzsize:flex-col ">
        <div className="flex w-[50%] flex-col gap-4 bzsize:w-[100%]">
          <div
            className="
                    flex h-[150px] min-w-[300px]
                    max-w-[800px]
                    items-center rounded-3xl bg-[#3A3D47] czsize:flex czsize:h-[225px] czsize:flex-col czsize:text-center bsize:max-w-none"
          >
            <Image
              className={`relative bottom-3 rounded-full`}
              src={"/profile.png"}
              width={150}
              height={100}
            />
            <div className="relative top-1 w-full">
              <h1 className=" text-2xl font-bold">{username}</h1>
              <p className="text-sm font-medium text-gray/60">
                {" "}
                Adona.ir/Aspect
              </p>
              <div className="h-2"></div>
              <div className="flex w-full items-center gap-x-2 csize:hidden">
                <h1 className="text-lg font-bold">۶۷%</h1>
                <div className=" h-7 w-[80%] rounded-full bg-[#595D6C] ">
                  <div className="h-full w-[67%] rounded-full bg-primary "></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" hidden h-[100px]
                    w-full min-w-[300px] max-w-[500px] flex-col items-center justify-center rounded-3xl bg-[#3A3D47]
                    czsize:flex czsize:max-w-[900px]
                    "
          >
            <h1 className="text-lg font-bold">67%</h1>
            <div className=" h-7 w-[80%] rounded-full bg-[#595D6C] ">
              <div className="h-full w-[67%] rounded-full bg-primary "></div>
            </div>
          </div>
          <div
            className="
                    flex h-[400px] w-full min-w-[300px] max-w-[900px] flex-col items-center justify-center rounded-3xl
                    bg-[#3A3D47] pl-2 pr-2  pt-10 text-right czsize:h-[200px] czsize:max-w-[900px]
                    bsize:max-w-none
                    "
          >
            <h1 className="pb-2 text-2xl">درآمد این ماه</h1>

            <Line options={monthlyChart().options} data={monthlyChart().data} />
            <br />
          </div>
          <div
            className="
                    flex h-[650px] w-full min-w-[300px] flex-col items-center
                    justify-center rounded-3xl 
                    bg-[#3A3D47] pl-2 pr-2 pt-10 czsize:h-[700px]
                    czsize:max-w-[900px] bsize:max-w-none 
                    "
          >
            <h1 className="pb-2 text-2xl">درآمد این هفته</h1>
            <Line options={weeklyChart().options} data={weeklyChart().data} />
            <br />
          </div>
        </div>

        <div className="w-[50%] bzsize:w-[100%]">
          <div
            className="
                    flex h-[900px] w-full min-w-[300px] flex-col items-center
                    justify-center rounded-3xl 
                    bg-[#3A3D47] pl-2 pr-2 pt-10 czsize:h-[700px]
                    czsize:max-w-[900px] bsize:max-w-none 
                    "
          >
            <h1 className="text-3xl font-bold">اپدیت ها</h1>
            <br />

            <div className="flex h-[80%] w-[90%] flex-col items-center gap-y-5 overflow-y-auto rounded-[30px] pt-5">
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
              <div
                className="
                            w-[100%] rounded-2xl bg-background-dark
                            p-5 text-right text-sm font-extralight text-gray"
              >
                <p>
                  به آرزوی ما برای انتشار وبسایت جدید برای استریمرها و علاقمندان
                  به محتواهای چندرسانه‌ای می‌پیوندید، بنابراین برای تشویق شما و
                  دیگران به استفاده از این وبسایت، یک پیشنهاد ویژه و جذاب در نظر
                  گرفته‌ایم. با این پیشنهاد، شما قادر خواهید بود از تخفیف
                  بی‌نظیر ۹۰ درصدی برای اشتراک اولیه بهره‌مند شوید. ما امیدواریم
                  که این تخفیف بالقوه شما را ترغیب کند تا از وبسایت ما استفاده
                  کنید و لذت ببرید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
