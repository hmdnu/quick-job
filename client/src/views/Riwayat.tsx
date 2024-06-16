import { useState } from "react";
import { DUMMY_VACANCY } from "../constant";

const Riwayat = () => {
  const [jobs, setJobs] = useState(DUMMY_VACANCY);
  const [selectedSegment, setSelectedSegment] = useState(1);

  const handleCompleteJob = (key: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.key === key ? { ...job, status: "complete" } : job
      )
    );
  };

  const currentJobs =
    selectedSegment === 1
      ? jobs.filter((job) => job.status === "ongoing")
      : jobs.filter((job) => job.status === "complete");

  const onGoingJobs = DUMMY_VACANCY.filter((job) => job.status === "ongoing");

  if (selectedSegment === 1 && onGoingJobs.length === 0) {
    return (
      <section>
        <img src="/img/larry-history.svg" alt="" />
      </section>
    );
  }

  return (
    <section className="grid mt-[100px] md:mt-[120px] lg:ml-[100px] gap-[20px] px-6">
      <div className="flex p-2 text-white text-sm-s rounded-lg w-[182px] bg-green-90">
        <button
          onClick={() => setSelectedSegment(1)}
          className={`btn-md-fill focus:bg-white focus:text-green-90
            ${selectedSegment === 1 ? "btn-active" : ""}
            `}
        >
          Berjalan
        </button>
        <button
          onClick={() => setSelectedSegment(2)}
          className="btn-md-fill focus:bg-white focus:text-green-90"
        >
          Selesai
        </button>
      </div>
      {selectedSegment === 1 && onGoingJobs.length === 0 ? (
        <section>
          <img src="/img/larry-history.svg" alt="" />
        </section>
      ) : (
        <div className="grid md:inline-block gap-[20px] space-y-4">
          {currentJobs.map((job, i) => (
            <div
              key={i}
              className="grid gap-[10px] md:mb-[20px] max-w-[54rem] p-4 bg-white border border-gray-200 rounded-lg shadow"
            >
              <div>
                <h1 className="text-md-s md:text-xl-s">{job.title}</h1>
              </div>
              <div>
                <h6 className="text-trunks text-sm-r md:text-md-r">
                  Nama Klien: {job.username}
                </h6>
                <h6 className="text-trunks text-sm-r md:text-md-r">
                  Lokasi: {job.location}
                </h6>
                <h6 className="text-trunks text-sm-r md:text-md-r">
                  Fee: {job.sallary}
                </h6>
              </div>
              <div>
                <p className="text-trunks text-sm-r md:text-md-r">{job.desc}</p>
              </div>
              <div className="flex flexEnd gap-[10px] md:mt-[20px]">
                <button
                  onClick={() => handleCompleteJob(job.key)}
                  className={`btn-md-fill text-sm-s bg-red-90 text-white hover:text-red-90 focus:text-red-90 
                    ${job.status === "complete" ? "hidden" : "flex"}
                  `}
                >
                  <span className="hidden lg:inline">Batalkan</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="lg:hidden size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleCompleteJob(job.key)}
                  className={`btn-md-fill text-sm-s bg-orange-90 text-white hover:text-orange-90 focus:text-orange-90 
                    ${job.status === "complete" ? "hidden" : "flex"}
                  `}
                >
                  <span className="hidden lg:inline">Hubungi Klien</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="lg:hidden size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleCompleteJob(job.key)}
                  className={`btn-md-fill text-sm-s bg-green-90 text-white hover:text-green-90 focus:text-green-90 
                    ${job.status === "complete" ? "hidden" : "flex"}
                  `}
                >
                  <span className="hidden lg:inline">Kerjakan</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Riwayat;
