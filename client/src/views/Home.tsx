import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="text-red-500">
      Home page
      <Outlet />
    </div>
  );
}
