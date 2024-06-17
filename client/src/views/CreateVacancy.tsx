import { Link } from "react-router-dom";
import { PAYMENT_METHOD, TIME_BUTTON } from "../constant";
import { useForm } from "react-hook-form";
import { NewPost, Token } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../schemas";
import { useCreatePost } from "../hooks/post";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import formatToISO from "../helpers/formatDate";

export default function CreateVacancy() {
  const [activeButtons, setActiveButtons] = useState<{ payment?: number; deadline?: number }>();
  const navigate = useNavigate();
  const [cookies] = useCookies(["access-token"]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<NewPost>({
    criteriaMode: "all",
    resolver: zodResolver(postSchema),
  });

  const { mutate, isPending, error, data, isError, isSuccess } = useCreatePost();

  const onSubmit = (formData: NewPost) => {
    console.log(typeof formData.price);
    if (cookies["access-token"]) {
      const userToken: Token = jwtDecode(cookies["access-token"]);

      mutate({
        ...formData,
        price: formData.price,
        creatorId: userToken.id,
        deadline: formatToISO(formData.deadline.split(" ")[0]),
        payment: formData.payment === "Tunai" ? "CASH" : "TRANSFER",
      });

      console.log({
        ...formData,
        price: formData.price,
        creatorId: userToken.id,
        deadline: formatToISO(formData.deadline.split(" ")[0]),
        payment: formData.payment === "Tunai" ? "CASH" : "TRANSFER",
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }

    const err = (error?.response?.data as { message: string })?.message;

    if (isError) {
      console.error(err);
    }
  }, [error, isError, isSuccess, navigate]);

  return (
    <section className="mt-[70px] md:mt-[100px] lg:ml-[180px] p-6 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-md md:flex justify-between gap-5">
        <div className="grid mb-5 w-full h-full gap-[10px]">
          <div>
            <label className="block mb-2 text-sm-s md:text-md-s text-green-90">Judul</label>
            <input
              type="text"
              className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
              placeholder="ex.Anterin ke surga"
              {...register("title")}
            />
            <p className="text-red-500 text-sm">{errors.title?.message}</p>
          </div>
          <div>
            <label className="block mb-2 text-sm-s md:text-md-s text-green-90">Alamat tempat tinggal</label>
            <input
              type="text"
              className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
              placeholder="Jalan kapitan patimura"
              {...register("address")}
            />
            <p className="text-red-500 text-sm">{errors.address?.message}</p>
          </div>
          <div>
            <label className="block mb-2 text-sm-s md:text-md-s text-green-90">Deskripsi Pekerjaan</label>
            <textarea
              id="desc"
              className="w-full h-[80px] py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
              placeholder="1. Berpenampilan menarik"
              {...register("desc")}
            />
            <p className="text-red-500 text-sm">{errors.desc?.message}</p>
          </div>
          <div className="flex gap-5">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6 stroke-green-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Link>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6 stroke-green-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid mb-5 w-full gap-[10px]">
          <div>
            <label className="block mb-2 text-sm-s md:text-md-s text-green-90">Mau nunggu sampai kapan ?</label>
            <div className="flex flex-wrap gap-2">
              {TIME_BUTTON.map((time, i) => (
                <input
                  key={i}
                  onClick={() => {
                    setValue("deadline", time.label);
                    setActiveButtons((prev) => ({ ...prev, deadline: i }));
                  }}
                  type="button"
                  value={time.label}
                  className={`border-none rounded-lg bg-opacity-20 px-2 py-1 lg:border-none lg:rounded-lg lg:bg-opacity-20 lg:px-3 lg:py-1 hover:cursor-pointer ${
                    activeButtons?.deadline === i ? "bg-green-90 text-green-90" : "bg-orange-90 text-orange-90"
                  } text-sm font-bold`}
                />
              ))}
            </div>
            <p className="mt-[5px] text-2xs-r text-trunks">
              * setelah waktu yang dipilih habis, lowongan yang anda buat akan otomatis menghilang.
            </p>
          </div>
          <p className="text-red-500 text-sm">{errors.deadline?.message}</p>
          <div>
            <label className="block mb-2 text-sm-s md:text-md-s text-green-90">Mau bayar berapa bro ?</label>
            <input
              type="text"
              id="sallary"
              className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
              placeholder="ex. 1.000.000.000"
              {...register("price")}
            />
            <p className="text-red-500 text-sm">{errors.price?.message}</p>
          </div>
          <div>
            <label className="block mb-2 text-sm-s md:text-md-s text-green-90">Metode Pembayaran</label>
            <div className="flex gap-[10px]">
              {PAYMENT_METHOD.map((payment, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setValue("payment", payment.label);
                    setActiveButtons((prev) => ({ ...prev, payment: i }));
                  }}
                  className={`flex flexCenter border-none rounded-lg px-3 py-2 text-sm-s font-semibold gap-2 ${
                    activeButtons?.payment !== i ? "bg-green-900 text-white" : "bg-slate-200 text-green-900"
                  }`}
                >
                  {payment.label}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-red-500">{errors.payment?.message}</p>
          <div className="flex flexEnd mt-[35px]">
            <button className="btn-md-fill text-md-s bg-green-90 text-white hover:text-green-90 focus:text-green-90">
              {isPending ? "Loading" : "Buat lowongan"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

// tunai
{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
className="size-5 stroke-white"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
/>
</svg> */
}

// cash
// <svg
// xmlns="http://www.w3.org/2000/svg"
// fill="none"
// viewBox="0 0 24 24"
// strokeWidth={1.5}
// stroke="currentColor"
// className="size-5 stroke-white"
// >
// <path
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
// />
// </svg>
