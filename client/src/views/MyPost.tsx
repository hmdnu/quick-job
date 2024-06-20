import { useState } from "react";
import Rating from "../components/Rating";
import { DUMMY_VACANCY, REPORT } from "../constant";

const MyPost = () => {
  const [jobs, setJobs] = useState(DUMMY_VACANCY);
  const [confirmation, setConfirmation] = useState(false);
  const [report, setReport] = useState(false);

  const handleReport = () => {
    setReport((prev) => !prev);
  };

  const handleOpenConfirmation = () => {
    setConfirmation((prev) => !prev);
    document.querySelector("body")?.classList.add("overflow-hidden");
  };
  const handleCloseConfirmation = () => {
    setConfirmation((prev) => !prev);
    document.querySelector("body")?.classList.remove("overflow-hidden");
  };

  const handleCompleteJob = (key: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.key === key ? { ...job, status: "complete" } : job
      )
    );
  };

  const handleCancelJob = (key: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.key === key ? { ...job, status: "cancelled" } : job
      )
    );
  };

  const handleDoneJob = (key: number) => {
    handleCompleteJob(key);
    handleOpenConfirmation();
  };

  return (
    <section className="grid mt-[100px] md:mt-[120px] lg:ml-[140px] gap-[20px] px-6 mb-[30px]">
      <div className="grid md:inline-block gap-[20px] space-y-4">
        {DUMMY_VACANCY.map((job, i) => (
          <div
            key={i}
            className="grid gap-[10px] md:mb-[20px] max-w-[54rem] p-4 bg-white border border-gray-200 rounded-lg shadow"
          >
            <div>
              <h6>
                {job.date} /
                {job.status === "ongoing"
                  ? " Sedang dikerjakan"
                  : job.status === "complete"
                  ? " Selesai"
                  : " Dibatalkan"}
              </h6>
            </div>
            <div>
              <div>
                <h1 className="text-md-s md:text-lg-s">{job.title}</h1>
              </div>
              <h6 className="text-trunks text-md-r">
                Dikerjakan oleh: {job.username}
              </h6>
              <h6 className="text-trunks text-md-r">Lokasi: {job.location}</h6>
            </div>
            <div>
              <p className="text-trunks text-sm-r md:text-md-r">{job.desc}</p>
            </div>
            <div className="flex flexEnd gap-[10px] md:mt-[20px]">
              <button
                onClick={() => handleCancelJob(job.key)}
                className={`btn-md-fill text-sm-s bg-pink text-dark 
                    ${
                      job.status === "complete" || job.status === "cancelled"
                        ? "hidden"
                        : "flex"
                    }
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
                className={`btn-md-fill text-sm-s bg-yellow text-dark ${
                  job.status === "complete" || job.status === "cancelled"
                    ? "hidden"
                    : "flex"
                }`}
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
                onClick={() => handleDoneJob(job.key)}
                className={`btn-md-fill text-sm-s bg-cell text-dark
                    ${
                      job.status === "complete" || job.status === "cancelled"
                        ? "hidden"
                        : "flex"
                    }
                  `}
              >
                <span className="hidden lg:inline">Selesai</span>
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
              {confirmation && (
                <div
                  // onClick={handleCloseConfirmation}
                  className="flex justify-center mx-auto items-center bg-[rgba(0,0,0,.5)] w-full h-screen fixed z-50 top-0 left-0 overflow-hidden"
                >
                  <div className="gap-[10px] absolute bg-white p-6 w-[250px] sm:w-[350px] rounded-lg ">
                    <div className="grid justify-items-center gap-[10px]">
                      <h1 className="text-center text-sm-s sm:text-md-s">
                        Seberapa puas dengan hasil kerja {job.username} ?
                      </h1>
                      <Rating />
                    </div>
                    <button
                      onClick={handleReport}
                      className="underline text-blue-600 text-sm"
                    >
                      <span className={report ? "hidden" : ""}>Laporkan</span>
                    </button>
                    {report && (
                      <div>
                        {REPORT.map((report) => (
                          <div
                            key={report.key}
                            className="flex justify-start gap-[5px]"
                          >
                            <input
                              type="radio"
                              name="reports"
                              value={report.minus}
                            />
                            <h6>{report.title}</h6>
                          </div>
                        ))}
                        <div
                          onClick={handleCloseConfirmation}
                          className="flex flexEnd gap-[10px]"
                        >
                          <button
                            className="btn-md-fill text-sm-s bg-pink text-dark"
                            type="submit"
                          >
                            Batal
                          </button>
                          <button
                            className="btn-md-fill text-sm-s bg-cell text-dark"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPost;
