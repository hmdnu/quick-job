import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home, SignIn, RootLayout } from "./views";
import CreateVacancy from "./views/CreateVacancy";
import Riwayat from "./views/Riwayat";
import SignUp from "./views/SignUp";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
