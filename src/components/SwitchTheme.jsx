import React, { useEffect } from "react";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "../context/ThemeProvider";

const ThemeSwitch = (props) => {
  const { theme, toggleTheme } = useTheme();

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg ",
            ],
          })}
        >
          {theme === "dark" && (
            <svg
              className="flex items-center justify-center w-8 h-8 "
              onClick={() => toggleTheme()}
            >
              <use href="#moon"></use>
            </svg>
          )}
          {theme === "light" && (
            <svg
              className="flex items-center justify-center w-8 h-8 text-yellow-600 "
              onClick={() => toggleTheme()}
            >
              <use href="#sun"></use>
            </svg>
          )}

          {/* {isSelected ? (
            <svg
              className="flex items-center justify-center w-5 h-5 "
              onClick={() => toggleTheme()}
            >
              <use href="#moon"></use>
            </svg>
          ) : (
            <svg
              className="flex items-center justify-center w-5 h-5 text-yellow-600"
              onClick={() => toggleTheme()}
            >
              <use href="#sun"></use>
            </svg>
          )} */}
        </div>
      </Component>
      {/* <p className="text-default-500 select-none">
        Lights: {isSelected ? "on" : "off"}
      </p> */}
    </div>
  );
};

function SwitchTheme() {
  return <ThemeSwitch />;
}

export default SwitchTheme;
