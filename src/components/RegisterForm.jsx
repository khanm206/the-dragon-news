"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const handleRegister = (data) => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <fieldset className="fieldset w-2xl">
        <label className="text-2xl font-semibold mb-4">Your Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          autoComplete="current-password"
          className="w-full bg-base-200 p-6 rounded text-xl"
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
        <br />
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
        <button className="btn btn-neutral mt-4 text-2xl p-8">Register</button>
      </fieldset>
    </form>
  );
};

export default RegisterForm;
