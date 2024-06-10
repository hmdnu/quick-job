import { DUMMY_VACANCY } from "../constant";
import DetailVacancy from "./DetailVacancy";

const Vacancy = () => {
  return (
    <section className="mt-[120px] md:flex md:justify-center lg:justify-start h-full xl:ml-[120px] mx-[20px] my-[20px] gap-[20px]">
      <div className="grid md:inline-block gap-[20px]">
        {DUMMY_VACANCY.map((vacancy) => (
          <div className="md:mb-[20px] max-w-sm p-4 gap-[10px] bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-between">
              <div className="flex flexCenter gap-[10px]">
                <img
                  src={vacancy.userImg}
                  alt="user"
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
                />
                <div className="flex lg:grid gap-1 items-center justify-start">
                  <h1 className="text-bulma text-sm-s">{vacancy.username}</h1>
                  <div className="lg:hidden bg-bulma h-1 w-1 rounded-full"></div>
                  <h6 className="text-trunks text-xs-r">
                    {vacancy.timestamp} lalu
                  </h6>
                </div>
              </div>
              <div className="lg:hidden lg:mt-[20px] h-full inline-block rounded-lg bg-chici-90 bg-opacity-30 px-[6px] pt-[6px]">
                <h5 className="mb-2 text-sm-s text-chici-90">{vacancy.exp}</h5>
              </div>
              <div className="hidden lg:flex">
                <h1 className="text-lg-s">Rp {vacancy.sallary}</h1>
              </div>
            </div>
            <div className="hidden mt-[20px] lg:inline-block rounded-lg bg-chici-90 bg-opacity-30 px-[6px] pt-[6px]">
              <h5 className="mb-2 text-sm-s text-chici-90">
                Kadaluarsa dalam {vacancy.exp}
              </h5>
            </div>
            <div className="grid mt-[10px] gap-[10px] md:gap-0">
              <h1 className="text-sm-s md:text-md-s text-bulma">
                {vacancy.title}
              </h1>
              <p className="line-clamp-1 lg:line-clamp-2 text-xs-r md:text-sm-r text-trunks">
                {vacancy.desc}
              </p>
              <span className="text-xs-r md:text-sm-r text-trunks">
                {vacancy.location}
              </span>
            </div>
            <div className="mt-[10px] flex justify-end gap-[5px]">
              <button className="btn-sm-fill rounded-full bg-orange-90 text-white hover:text-orange-90 focus:text-orange-90 text-sm font-semibold">
                <span className="hidden lg:inline">Hubungi Klien</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="lg:hidden size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
              </button>
              <button className="btn-sm-fill bg-green-90 text-white hover:text-green-90 focus:text-green-90 text-sm font-semibold">
                <span className="hidden lg:inline">Kerjakan</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:hidden w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <DetailVacancy />
    </section>
  );
};

export default Vacancy;
