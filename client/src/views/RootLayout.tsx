import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function RootLayout() {
  const [cookies] = useCookies(["access-token"]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
