import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function RootLayout() {
  const [cookies] = useCookies(["access-token"]);

  return <div>{cookies["access-token"] ? <Outlet /> : <Navigate to={"/signin"} />}</div>;
}
