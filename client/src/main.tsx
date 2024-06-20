import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Home, RootLayout, SignIn } from "./views";
import CreateVacancy from "./views/CreateVacancy";
import ErrorPage from "./views/ErrorPage";
import MobileChat from "./views/MobileChat";
import MyPost from "./views/MyPost";
import Riwayat from "./views/Riwayat";
import SignUp from "./views/SignUp";
import DetailVacancy from "./views/DetailVacancy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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

      {
        path: "/postingan-saya",
        element: <MyPost />,
      },
      {
        path: "/chat",
        element: <MobileChat />,
      },
      {
        path: "/detail-job/:postId",
        element: <DetailVacancy />,
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
