import { PROFILE_LINKS } from "../constant";

const Navbar = () => {
  return (
    <nav className="fixed z-30 w-full top-0 bg-navbar bg-center">
      <div className="static max-w-screen-xl flex flex-row items-center gap-[20px] justify-between md:justify-start mx-auto p-4">
        {/* Logo */}
        <a
          href="/"
          className="flex md:grid justify-items-center basis-20 items-center space-x-3"
        >
          <img
            src="/img/logo-quickjob.png"
            className="h-[40px]"
            alt="Flowbite Logo"
          />
          <span className="text-white text-md-s">QuickJob</span>
        </a>

        <div className="hidden lg:flex flex-row justify-center gap-[20px] basis-3/4">
          {/* Creat Vacancy Button */}
          <button
            type="button"
            className="flex w-[220px] xl:basis-1/5 gap-2 text-green-90 bg-gohan px-4 py-2 hover:bg-orange-90 hover:text-white focus:outline-none focus:bg-orange-90 focus:text-white font-bold rounded-lg text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Buat Lowongan
          </button>

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
                    stroke-width="2"
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
            <img
              src="/img/user.jpg"
              alt="user"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-bulma text-md-s">Lavina Kim</h1>
            <h6 className="text-trunks text-xs-r">
              Malang, sejak 23 Agustus 2004
            </h6>
          </div>
          <ul className="h-full gap-3 lg:grid">
            {PROFILE_LINKS.map((link) => (
              <li className="flex flex-row gap-[12px] cursor-pointer">
                <img src={link.icon} alt="menus" />
                <a href={link.href} key={link.key} className="text-sm-r">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button>
          <img
            src="/img/user.jpg"
            alt="user"
            className="w-[40px] h-[40px] rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
