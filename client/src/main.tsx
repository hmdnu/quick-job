import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.tsx";
import Vacancy from "./components/Vacancy.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Vacancy />
    {/* <App /> */}
  </React.StrictMode>
);
