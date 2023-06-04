import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import dynamic from "next/dynamic";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [OSName, setOSName] = useState("");

  useEffect(() => {
    var OSName = "Unknown OS";
    if (window.navigator.userAgent.indexOf("Linux") != -1) setOSName("Linux");
    if (window.navigator.userAgent.indexOf("Android") != -1)
      setOSName("Android");
    if (window.navigator.userAgent.indexOf("iPhone") != -1) setOSName("iPhone");
    if (window.navigator.platform == "Win32" || "win16" || "wince")
      setOSName("Windows");
  }, []);

  // Function runs right after form is submited
  // for logging the user in.
  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:1000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        OSName,
      }),
    });
    const data = JSON.parse(await response.json());

    // if token is invalid,
    // data.callback.token == false
    // so if it is not true, it adds the token
    if (data.callback.token) {
      setCookie("_token", data.callback.token);
      window.location.href = "/panel/dashboard";
    } else {
      alert(data.title);
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div
        className="form flex h-[500px]
             w-[400px] flex-col
             items-center justify-center bg-white bg-opacity-10
             "
      >
        <h1 className="text-2xl font-bold">Sign in</h1>
        <br />
        <br />
        <br />

        <form
          onSubmit={loginUser}
          className="flex w-full flex-col items-center"
        >
          <input
            className="
                        h-14 w-[70%] rounded-[5px] bg-white bg-opacity-10
                        pl-5 font-semibold shadow-md focus:outline-none
                    "
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="
                        h-14 w-[70%] rounded-[5px] bg-white bg-opacity-10
                        pl-5 font-semibold shadow-md focus:outline-none
                    "
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button
            className="
                        bg-purple-600 shadow-purple-900 hover:bg-purple-700 h-14
                        w-[35%] rounded-[5px]
                        font-bold shadow-md duration-500 focus:outline-none

                    "
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
