import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { errorMessage } from "../constant";
import { useAuth } from "../hooks/user";
import { loginSchema } from "../schemas";
import { Login } from "../types";

export default function SignIn() {
  const [seePassword, setSeePassword] = useState(false);
  const [_, setCookies] = useCookies();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Login>({
    criteriaMode: "all",
    resolver: zodResolver(loginSchema),
  });

  const { data, error, isError, isPending, mutate, isSuccess } = useAuth({
    type: "login",
  });

  const onSubmit = (formData: Login) => {
    mutate(formData);
  };

  useEffect(() => {
    document.title = "Quick Job | Sign in";
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setCookies("access-token", data?.data.access_token);
      navigate("/");
      return;
    }

    const err = (error?.response?.data as { message: string })?.message;

    if (isError) {
      console.log(err);
      switch (err) {
        case errorMessage.USER_NOT_FOUND:
          setError("email", { message: errorMessage.USER_NOT_FOUND });
          break;

        case errorMessage.PASSWORD_INVALID:
          setError("password", { message: errorMessage.PASSWORD_INVALID });
          break;

        default:
          setError("root", { message: errorMessage.INTERNAL_SERVER_ERROR });
          break;
      }
    }
  }, [isSuccess, data, navigate, setCookies, isError, error, errors, setError]);

  return (
    <section className="h-dvh grid md:flex md:justify-center md:items-center p-5">
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
            <Link to={"/signup"} className="text-red-90 underline text-sm-s">
              Sign Up
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
          <div className="flex items-start justify-between max-w-sm mx-auto">
            <h1 className="content-start text-5xl-s md:text-8xl-s text-dark lg:mt-[40px]">
              Selamat <br />
              datang !
            </h1>
            <div className="flex justify-end">
              <img
                src="/img/larry-sign.svg"
                alt="larry-sign"
                className="md:hidden h-[300px] mb-[5px]"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-sm mx-auto lg:mt-[20px]"
          >
            <div className="mb-5">
              <label className="block mb-2 text-sm-s md:text-md-s text-dark">
                Email
              </label>
              <input
                type="email"
                className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r bg-white border border-gray-300 rounded-lg shadow focus:outline-none"
                placeholder="example@gmail.com"
                {...register("email")}
              />

              <p className="text-red-600 text-sm">{errors.email?.message}</p>
            </div>

            <div className="mb-5">
              <label className="block text-sm-r md:text-md-s mb-2 text-sm-s text-dark">
                Kata Sandi
              </label>
              <input
                type={seePassword ? "text" : "password"}
                className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r bg-white border border-gray-300 rounded-lg shadow focus:outline-none"
                placeholder="**********"
                {...register("password")}
              />

              <p className="text-red-600 text-sm">{errors.password?.message}</p>
            </div>
            <div className="grid gap-[70px]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onClick={() => setSeePassword((prev) => !prev)}
                />
                <label className="text-sm">Lihat kata sandi</label>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="/"
                  className="text-red-90 underline text-sm-s md:text-sm-s"
                >
                  Lupa kata sandi?
                </a>
                <button
                  type="submit"
                  className="btn-sm-fill bg-dark text-white hover:text-dark focus:text-dark text-sm font-semibold"
                  disabled={isPending}
                >
                  {isPending ? "Loading" : "Sign in"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
