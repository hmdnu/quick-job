import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useGetUser } from "../hooks/user";
import { User } from "../types";
import moment from "moment";

interface Token {
  id: string;
  username: string;
  email: string;
  exp: number;
}

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const [user, setUser] = useState<User>();
  const [dateCreated, setDateCreated] = useState("");

  const { data, error, isError, isPending, mutate } = useGetUser();

  function handleLogout() {
    const isConfirm = confirm("You sure wanna logout?");

    if (isConfirm) {
      removeCookie("access-token");
    }
  }

  useEffect(() => {
    if (cookies["access-token"]) {
      const userToken: Token = jwtDecode(cookies["access-token"]);
      if (userToken) {
        mutate(userToken.id);
        return;
      }

      if (isError) {
        console.error(error?.response?.data);
        return;
      }
    }
  }, [cookies, mutate, error, isError]);

  useEffect(() => {
    setUser(data?.data);
    setDateCreated(moment(user?.createdAt).format("DD MMM YYYY"));
  }, [user, data]);

  return (
    <nav className="fixed w-full top-0 bg-navbar bg-center">
      <div className="static max-w-screen-xl flex flex-row items-center gap-[20px] justify-between md:justify-start mx-auto p-4">
        {/* Logo */}
        <Link to={"/"} className="flex md:grid justify-items-center basis-20 items-center space-x-3">
          <img src="/img/logo-quickjob.png" className="h-[40px]" alt="Flowbite Logo" />
          <span className="text-white text-md-s">QuickJob</span>
        </Link>

        <div className="hidden md:flex flex-row justify-center gap-[20px] basis-3/4">
          {/* Creat Vacancy Button */}
          <Link
            to={"/create-vacancy"}
            type="button"
            className="flex w-[220px] xl:basis-1/5 gap-2 text-green-90 bg-gohan px-4 py-2 hover:bg-orange-90 hover:text-white focus:outline-none focus:bg-orange-90 focus:text-white font-bold rounded-lg text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Buat Lowongan
          </Link>

          {/* Search Bar */}
          <div className="grid xl:basis-3/5">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-trunks dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="text-md-s block w-full px-4 py-2 ps-10 text-sm text-trunk border-none rounded-lg bg-gohan focus:outline-none"
                placeholder="Cari apa hayo..."
              />
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="hidden lg:grid absolute h-[274px] w-[268px] gap-[20px] rounded-lg bg-white border-2 border-trunks border-opacity-10 p-[15px] top-[24px] right-[20px]">
          <div className="w-full bg-green-90 flex justify-center py-2 rounded-lg">
            <img src="/img/user.jpg" alt="user" className="w-[50px] h-[50px] rounded-full" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-bulma text-md-s">{`${
              user?.firstname.charAt(0).toUpperCase() + user?.firstname.slice(1)!
            } ${user?.lastname.charAt(0).toUpperCase() + user?.lastname.slice(1)!}`}</h1>
            <h6 className="text-trunks text-xs-r">Sejak {dateCreated}</h6>
          </div>
          <ul className="h-full gap-3 lg:grid">
            <li className="flex flex-row items-center gap-[12px] cursor-pointer">
              <img src="/img/time.svg" alt="time" />
              <Link to={"/riwayat"} className="text-sm-r">
                Riwayat
              </Link>
            </li>
            <li className="flex flex-row items-center gap-[12px] cursor-pointer">
              <img src="/img/log-out.svg" alt="logout" />
              <button onClick={handleLogout} className="text-sm-r">
                Log out
              </button>
            </li>
          </ul>
        </div>
        <button>
          <img src="/img/user.jpg" alt="user" className="w-[40px] h-[40px] rounded-full" />
        </button>
      </div>
    </nav>
  );
}
