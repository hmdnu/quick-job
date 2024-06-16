import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerSchema } from "../schemas";
import { IRegister } from "../types";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    criteriaMode: "all",
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    document.title = "Quick Job | Sign up";
  }, []);

  const onSubmit = (formData: IRegister) => {
    console.log(formData);
  };

  return (
    <section className="h-dvh grid md:flex justify-center items-center p-5">
      <div className="grid md:flex gap-[50px]">
        <div className="hidden md:flex">
          <img
            src="/img/larry-sign.svg"
            alt="larry-sign"
            className="md:w-[300px] lg:w-full"
          />
        </div>
        <div>
          <div className="flex flexEnd items-center gap-1">
            <Link to={"/signin"} className="text-red-90 underline text-sm-s">
              Sign In
            </Link>
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <h1 className="text-5xl-s md:text-8xl-s text-green-90 lg:mt-[60px]">
            Daftar <br className="md:hidden" /> kuy !
          </h1>
          <div className="grid justify-items-end">
            <img
              src="/img/larry-sign.svg"
              alt="larry-sign"
              className="md:hidden h-[300px] mt-[-40px] mb-[5px]"
            />
          </div>
          {/* form e coy */}
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
            <div className="mb-5">
              <div className="flex gap-[10px] my-4">
                <div>
                  <label className="block mb-2 text-sm-r md:text-md-r text-green-90">
                    Nama Awal
                  </label>
                  <input
                    type="text"
                    className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
                    placeholder="ujang"
                    {...register("firstname")}
                  />
                  {errors && (
                    <p className="text-red-600 text-sm">
                      {errors.firstname?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm-r md:text-md-r text-green-90">
                    Nama Akhir
                  </label>
                  <input
                    type="text"
                    className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
                    placeholder="cantik"
                    {...register("lastname")}
                  />
                  {errors && (
                    <p className="text-red-600 text-sm">
                      {errors.lastname?.message}
                    </p>
                  )}
                </div>
              </div>
              <label className="block mb-2 text-sm-r md:text-md-r text-green-90">
                Email
              </label>
              <input
                type="email"
                className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              {errors && (
                <p className="text-red-600 text-sm">{errors.email?.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="block text-sm-r md:text-md-r mb-2 text-sm-r text-green-90">
                Kata Sandi
              </label>
              <input
                type="password"
                id="email"
                className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
                placeholder="**********"
                {...register("password")}
              />
              {errors && (
                <p className="text-red-600 text-sm">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center mb-6">
              <a
                href="/"
                className="text-red-90 underline text-sm-s md:text-sm-s"
              >
                Lupa kata sandi?
              </a>
              <button
                type="submit"
                className="btn-sm-fill bg-green-90 text-white hover:text-green-90 focus:text-green-90 text-sm font-semibold"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
