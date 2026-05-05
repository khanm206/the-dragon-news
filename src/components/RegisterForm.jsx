"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const handleRegister = async (data) => {
    const { name, email, photo, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert(`${name} is successfully registered`);
      router.push("/");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <fieldset className="fieldset md:w-2xl">
        <label className="text-lg md:text-2xl font-semibold mb-2">
          Your Name
        </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
        <br />
        <label className="text-lg md:text-2xl font-semibold mb-2">
          Your Photo
        </label>
        <input
          type="text"
          {...register("photo")}
          className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
          placeholder="Enter your photo url"
        />
        <br />
        <label className="text-lg md:text-2xl font-semibold mb-2">
          Email address
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        <br />
        <fieldset className="relative fieldset">
          <label className="text-lg md:text-2xl font-semibold mb-2">
            Password
          </label>

          <input
            type={showPass ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            autoComplete="current-password"
            className="w-full bg-base-200 p-4 md:p-6 rounded md:text-xl"
            placeholder="Enter your password"
          />
          <span
            className="absolute top-[60%] right-[4%] hover:cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash size={22} /> : <FaEye size={20} />}
          </span>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </fieldset>
        <br />
        <button className="btn btn-neutral mt-4 md:text-2xl md:p-8">
          Register
        </button>
      </fieldset>
    </form>
  );
};

export default RegisterForm;
