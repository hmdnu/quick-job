import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Navbar } from "../components";

export default function RootLayout() {
  const [cookies] = useCookies(["access-token"]);

  return (
    <>
      {cookies["access-token"] ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Navigate to={"/signin"} />
      )}
    </>
  );
}
