import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

interface Login {
  email: string;
  password: string;
}

const loginSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .email(),
  password: z.string({
    required_error: "password is required",
  }),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data) {}

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
            <Link to={"/signup"} className="text-red-90 underline text-sm-s">
              Sign Up
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="grid justify-items-end">
            <h1 className="text-5xl-s md:text-8xl-s text-green-90 lg:mt-[60px]">
              Selamat <br className="hidden md:flex" />
              datang !
            </h1>
            <img
              src="/img/larry-sign.svg"
              alt="larry-sign"
              className="md:hidden h-[300px] mt-[-40px] mb-[5px]"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm-r md:text-md-r text-green-90">
                Your email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm-r md:text-md-r mb-2 text-sm-r text-green-90">
                Your password
              </label>
              <input
                type="password"
                id="email"
                className="w-full py-[8px] px-[12px] text-xs-r md:text-sm-r rounded-lg border-2 border-goku focus:outline-none"
                placeholder="**********"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <a
                href="/"
                className="text-red-90 underline text-sm-s md:text-sm-s"
              >
                Forgot Password?
              </a>
              <button
                type="submit"
                className="btn-sm-fill bg-green-90 text-white hover:text-green-90 focus:text-green-90 text-sm font-semibold"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
