<<<<<<< HEAD
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="text-red-500">
      Home page
      <Outlet />
    </div>
=======
import { Vacancy } from "../components";
export default function Home() {
  return (
    <>
      <Vacancy />
    </>
>>>>>>> 0797b6d91f3149a7c070e073327cad1965627881
  );
}
