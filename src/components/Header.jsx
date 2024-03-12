import React, { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [text, setText] = useState("");
  return (
    <header className="flex items-center justify-between my-2">
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
      <div className="flex items-center justify-center w-full">
        <Input
          isClearable
          type="text"
          variant="faded"
          label="جستوجو"
          className="w-full font-DanaDemiBold"
          placeholder="Enter your email"
          defaultValue=""
          onChange={(e) => setText(e.target.value)}
          onClear={(e) => console.log(e.target.value)}
        />
        <Button className="w-0.5">
          <svg className="w-4 h-4">
            <use href="#search"></use>
          </svg>
        </Button>
      </div>
      <div>3</div>
    </header>
  );
}

export default Header;
