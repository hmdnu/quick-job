import { jwtDecode } from "jwt-decode";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import formatName from "../helpers/formatName";
import { useGetUser } from "../hooks/user";
import { useStoreSearch } from "../hooks/zustand";
import { Token, User } from "../types";

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const [user, setUser] = useState<User>();
  const [dateCreated, setDateCreated] = useState("");
  const [navMobile, setNavMobile] = useState(false);

  const { data, error, isError, isPending, mutate } = useGetUser();
  const { setPosts, posts } = useStoreSearch();

  function handleLogout() {
    const isConfirm = confirm("You sure wanna logout?");

    if (isConfirm) {
      removeCookie("access-token");
    }
  }

  function handleOpenNavMobile() {
    setNavMobile((prev) => !prev);
    document.querySelector("body")?.classList.add("overflow-hidden");
  }

  function handleCloseNavMobile() {
    setNavMobile((prev) => !prev);
    document.querySelector("body")?.classList.remove("overflow-hidden");
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
  }, [cookies, mutate, error, isError, posts]);

  useEffect(() => {
    setUser(data?.data);
    setDateCreated(moment(user?.createdAt).format("DD MMM YYYY"));
  }, [user, data]);

  return (
    <nav className="fixed z-30 w-full top-0 bg-navbar bg-center">
      <div className="static max-w-screen-xl flex flex-row items-center gap-[20px] justify-between lg:justify-start mx-auto p-4">
        {/* Logo */}
        <Link
          to={"/"}
          className="grid justify-items-center basis-20 items-center space-x-3"
        >
          <img
            src="/img/logo-quickjob.png"
            className="h-[40px]"
            alt="Flowbite Logo"
          />
          <span className="text-white text-md-s hidden lg:flex">QuickJob</span>
        </Link>

        <div className="flex flex-row justify-center sm:justify-end md:justify-center gap-[20px] basis-3/4">
          {/* Creat Vacancy Button */}
          <Link
            to={"/create-vacancy"}
            type="button"
            className="hidden sm:flex w-[50px] md:w-[220px] xl:basis-1/5 gap-2 text-dark bg-gohan px-4 py-2 hover:bg-cell focus:outline-none focus:bg-cell font-bold rounded-lg text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="hidden md:flex">Buat Lowongan</span>
          </Link>

          {/* Search Bar */}
          <div className="grid w-full sm:basis-4/5 md:basis-3/5 lg:basis-2/5 xl:basis-3/5">
            <div className="relative block">
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
                className="sm:text-md-r !font-semibold block w-full px-4 py-2 ps-10 text-sm-s text-trunks border-none rounded-lg bg-gohan focus:outline-none"
                placeholder="Cari apa hayo..."
                onChange={(e) => {
                  setPosts(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="hidden lg:grid absolute lg:w-[240px] xl:w-[258px] gap-[20px] rounded-lg bg-white border-2 border-trunks border-opacity-10 p-[15px] top-[24px] right-[20px]">
          <div className="w-full bg-dark flex justify-center items-center py-2 rounded-lg">
            <img
              src="/img/user.jpg"
              alt="user"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-bulma text-md-s">
              {`${formatName(user?.firstname || "")} 
            ${formatName(user?.lastname || "")}`}
            </h1>
            <h6 className="text-trunks text-xs-r">Sejak {dateCreated}</h6>
          </div>
          <ul className="h-full gap-3 lg:grid">
            <li className="flex flex-row items-center gap-[12px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <Link
                to={"/riwayat"}
                className="text-sm-r hover:text-sm-s focus:text-sm-s"
              >
                Riwayat
              </Link>
            </li>
            <li className="flex flex-row items-center gap-[12px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>

              <Link
                to={"/postingan-saya"}
                className="text-sm-r hover:text-sm-s focus:text-sm-s"
              >
                Postingan Saya
              </Link>
            </li>
            <li className="flex flex-row items-center gap-[12px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              <button
                onClick={handleLogout}
                className="text-sm-r hover:text-sm-s focus:text-sm-s"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
        <button className="flex xl:hidden">
          <img
            src="/img/user.jpg"
            alt="user"
            className="w-[40px] h-[40px] rounded-full"
            onClick={handleOpenNavMobile}
          />
          {navMobile && (
            <div
              id="navMobile"
              onClick={handleCloseNavMobile}
              className="bg-[rgba(0,0,0,.5)] w-full h-screen fixed z-50 top-0 left-0 overflow-hidden"
            >
              <div className="gap-[30px] absolute bg-white p-3 w-[150px] sm:w-[100px] right-5 lg:right-36 top-16 rounded-lg ">
                <li className="flex sm:hidden flex-row items-center gap-[12px] cursor-pointer">
                  <Link
                    to={"/create-vacancy"}
                    className="text-sm-r hover:text-sm-s focus:text-sm-s"
                  >
                    Buat Lowongan
                  </Link>
                </li>
                <li className="flex sm:hidden flex-row items-center gap-[12px] cursor-pointer">
                  <Link
                    to={"/chat"}
                    className="text-sm-r hover:text-sm-s focus:text-sm-s"
                  >
                    Kotak Pesan
                  </Link>
                </li>
                <li className="flex flex-row items-center gap-[12px] cursor-pointer">
                  <Link
                    to={"/riwayat"}
                    className="text-sm-r hover:text-sm-s focus:text-sm-s"
                  >
                    Riwayat
                  </Link>
                </li>
                <li className="flex flex-row items-center gap-[12px] cursor-pointer">
                  <button
                    onClick={handleLogout}
                    className="text-sm-r hover:text-sm-s focus:text-sm-s"
                  >
                    Log out
                  </button>
                </li>
              </div>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
