import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <section className="grid justify-items-center items-center mx-auto gap-[20px] h-fit">
      <div className="flex gap-5 justify-center items-center">
        <img src="/img/grape-home.svg" alt="Lowongan Kosong" />
        <h1 className="text-3xl font-bold text-dark">
          Yaahh belum ada <br />
          lowongan saat ini
        </h1>
      </div>
      <p className="text-trunks max-w-sm text-center text-sm-r">
        Punya tugas serabutan yang butuh bantuan? Atau ada pekerjaan yang bisa dikerjain orang lain? Bikin lowonganmu
        sendiri di sini! Siapa tahu ada yang butuh tambahan duit dan siap bantuin kamu.
      </p>
      <Link
        to={"/create-vacancy"}
        type="button"
        className="hidden sm:flex  xl:basis-1/5 gap-2 text-dark bg-cell px-4 py-2  hover:-translate-y-2 focus:outline-none font-bold rounded-lg text-center"
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
        <span className="hidden md:flex">Buat Lowongan</span>
      </Link>
    </section>
  );
};

export default Empty;
