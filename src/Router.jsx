import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
