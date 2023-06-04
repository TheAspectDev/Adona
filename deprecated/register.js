import { useState } from "react";
import { setCookie } from "cookies-next";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function runs right after form is submited
  // for registering the new user.
  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:1000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = JSON.parse(await response.json());

    // if token is inv
    if (data.callback.token) {
      setCookie("_token", data.callback.token);
      window.location.href = "/dashboard";
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
          onSubmit={registerUser}
          className="flex w-full flex-col items-center"
        >
          <input
            className="
                        h-14 w-[70%] rounded-[5px] bg-white bg-opacity-10
                        pl-5 font-semibold shadow-md focus:outline-none
                    "
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
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
