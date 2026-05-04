"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const handleLogin = (data) => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <fieldset className="fieldset w-2xl">
        <label className="text-2xl font-semibold mb-4">Email address</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          autoComplete="current-password"
          className="w-full bg-base-200 p-6 rounded text-xl"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        <br />
        <label className="text-2xl font-semibold mb-4">Password*</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          autoComplete="current-password"
          className="w-full bg-base-200 p-6 rounded text-xl"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
        <br />
        <button className="btn btn-neutral mt-4 text-2xl p-8">Login</button>

        <div className="flex gap-2 items-center justify-center mt-8">
          <p className="text-xl font-semibold">Don't Have An Account ?</p>
          <Link
            href={"/register"}
            className="text-xl font-semibold text-red-600 hover:cursor-pointer"
          >
            Register
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
