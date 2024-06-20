import moment from "moment";
import { formatCurrency, formatName } from "../helpers";
import { useStoreJobDetails, useStoreModalConfirmation } from "../hooks/zustand";

const DetailVacancy = () => {
  const { jobContent, isShowJobDetails } = useStoreJobDetails();
  const { setOpenModal } = useStoreModalConfirmation();

  return (
    <>
      <section className="mt-[120px] flex justify-center">
        <div className="md:w-[55%] w-[90%] mr-0 lg:mr-28 p-[20px] border border-gray-200 rounded-lg shadow">
          <div className="grid justify-items-start">
            <div className="flex flexCenter gap-[10px]">
              <img
                src={"/img/user2.jpg"}
                alt="user"
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
              />
              <div className="flex md:grid gap-1 items-center justify-start">
                <h1 className="text-bulma text-sm-s">{`${formatName(jobContent?.creator.firstname || "")} ${formatName(
                  jobContent?.creator.lastname || ""
                )}`}</h1>
                <div className="md:hidden bg-bulma h-1 w-1 rounded-full"></div>
                <h6 className="text-trunks text-xs-r">{moment(jobContent?.createdAt).fromNow()}</h6>
              </div>
            </div>
            <div className="hidden mt-[20px] lg:inline-block rounded-lg bg-cell-90 bg-opacity-30 px-[6px] pt-[6px]">
              <h5 className="mb-2 text-sm-s text-cell-90">
                {" "}
                {moment().isAfter(jobContent?.deadline)
                  ? "Kadaluarsa"
                  : "Kadaluarsa dalam " + moment(jobContent?.deadline).toNow(true)}
              </h5>
            </div>
          </div>
          <div className="grid mt-[10px] gap-[10px] md:gap-0">
            <h1 className="text-md-s md:text-lg-s text-bulma">{jobContent?.title}</h1>
            <div className="grid my-2 gap-1">
              <div className="flex items-center gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="text-xs-r md:text-sm-r text-trunks">{jobContent?.address}</span>
              </div>
              <div className="flex items-center gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h1 className="text-sm-r">{formatCurrency(jobContent?.price!)} </h1>
              </div>
            </div>
            <p className="text-sm-r md:text-md-r text-trunks">{jobContent?.desc}</p>
          </div>
          <div className="mt-[20px] flex justify-end gap-[5px]">
            <button className="btn-sm-fill rounded-full bg-blue-90 text-white hover:text-blue focus:text-blue text-sm font-semibold">
              <span className="hidden md:inline">Hubungi Klien</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="md:hidden size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </button>
            <button
              onClick={setOpenModal}
              className="btn-sm-fill bg-dark text-white hover:text-dark focus:text-dark text-sm font-semibold"
            >
              <span className="hidden md:inline">Kerjakan</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailVacancy;
