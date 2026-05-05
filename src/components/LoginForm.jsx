"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const handleLogin = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset md:w-2xl">
          <label className="text-2xl font-semibold mb-4">Email address</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full bg-base-200 p-6 rounded text-xl"
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <br />
          <fieldset className="relative fieldset">
            <label className="text-2xl font-semibold mb-4">Password</label>
            <input
              type={showPass ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              autoComplete="current-password"
              className="w-full bg-base-200 p-6 rounded text-xl"
              placeholder="Enter your password"
            />
            <span
              className="absolute top-[60%] right-[4%]  hover:cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash size={22} /> : <FaEye size={20} />}
            </span>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <br />
          <button className="btn btn-neutral mt-4 text-2xl p-8">Login</button>
        </fieldset>
      </form>

      <div className="flex flex-col gap-4 mt-4">
        <button
          onClick={handleGoogleSignin}
          className="btn flex items-center gap-2 border-2 rounded-md border-sky-600 text-sky-600 text-2xl p-6"
        >
          <FcGoogle /> Login with Google
        </button>
        <button
          onClick={handleGitHubSignin}
          className="btn flex items-center gap-2  border-2 border-black text-2xl p-6"
        >
          <FaGithub /> Login with GitHub
        </button>
      </div>

      <div className="flex gap-2 items-center justify-center mt-8">
        <p className="text-xl font-semibold">Don't Have An Account ?</p>
        <Link
          href={"/register"}
          className="text-xl font-semibold text-red-600 hover:cursor-pointer"
        >
          Register
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
