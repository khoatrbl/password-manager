import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Vault from "./pages/Vault";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/:displayName" element={<Home />} />
        <Route path="/vault" element={<Vault />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
