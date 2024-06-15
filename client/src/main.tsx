import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home, Login, RootLayout } from "./views";
import CreateVacancy from "./views/CreateVacancy";
import Riwayat from "./views/Riwayat";
import SignUp from "./views/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Error bro</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-vacancy",
        element: <CreateVacancy />,
      },
      {
        path: "/riwayat",
        element: <Riwayat />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
