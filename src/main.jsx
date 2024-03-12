import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
