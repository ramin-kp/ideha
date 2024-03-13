import React, { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-router-dom";
import SwitchTheme from "./SwitchTheme";

function Header() {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

  const focusHandler = () => {
    setFocus(false);
    setText(() => "");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <header className="flex items-center justify-between my-2 dark:bg-zinc-800">
      <div className="flex items-center shrink-0 child:mx-2">
        <Link to="/">
          <img
            src="/images/logo.jpg"
            alt="logo-icon"
            className="w-10 h-10 rounded-full overflow-hidden"
          />
        </Link>
        <Link
          to="/"
          className="inline-block px-3 py-1.5 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 text-white font-DanaDemiBold rounded-lg transition-all duration-75"
        >
          خانه
        </Link>
        <Link
          to="/"
          className="inline-block px-3 py-1.5 hover:bg-blue-700 hover:dark:bg-blue-600 text-zinc-700 dark:text-white hover:text-white font-DanaDemiBold rounded-lg transition-all duration-75"
        >
          ایده جدید
        </Link>
      </div>
      <div className="relative flex items-center justify-center mx-5 w-full">
        <form className="w-full" onSubmit={submitHandler}>
          <input
            type="text"
            className="w-full p-2 bg-gray-200 dark:bg-blue-900 font-DanaMedium rounded-lg"
            placeholder="جستوجو"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setFocus(true)}
          />
        </form>
        <button
          className={`absolute inset-0 right-[98%] ${!focus ? "hidden" : ""}`}
          onClick={focusHandler}
        >
          <svg className="w-5 h-5 m-1 shrink-0 rounded-full dark:text-white hover:bg-gray-300 ">
            <use href="#x-mark"></use>
          </svg>
        </button>
      </div>
      <div className="flex grow items-center justify-center">
        <div>
          <SwitchTheme />
        </div>
        <div>profile</div>
      </div>
    </header>
  );
}

export default Header;
