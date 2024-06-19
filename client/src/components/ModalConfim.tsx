import { useStoreModalConfirmation } from "../hooks/zustand";

export default function ModalConfim() {
  const { setCloseModal, setConfirm } = useStoreModalConfirmation();

  return (
    <div
      onClick={setCloseModal}
      className="flex justify-center mx-auto items-center bg-[rgba(0,0,0,.5)] w-full h-screen fixed z-50 top-0 left-0 overflow-hidden"
    >
      <div className="grid justify-items-center gap-[30px] absolute bg-white p-6 w-[250px] sm:w-[350px] rounded-lg ">
        <h1 className="text-center text-sm-s sm:text-md-s">
          Apakah anda yakin akan mengerjakan pekerjaan ini?
        </h1>
        <div className="flex gap-3">
          <button className="btn-sm-fill md:btn-md-fill text-sm-s bg-red-90 text-white hover:text-red-90 focus:text-red-90">
            <span className="hidden lg:inline">Gak Dulu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="current"
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
            onClick={setConfirm}
            className="btn-sm-fill md:btn-md-fill text-sm-s bg-dark text-white hover:text-dark focus:text-dark"
          >
            <span className="hidden lg:inline">Gass</span>
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
    </div>
  );
}
