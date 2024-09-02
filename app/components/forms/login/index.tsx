"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Handle login logic here
    const result = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/users",
      username: data.username,
      password: data.password,
    });

    console.log("Result", result);
  };

  return (
    <div>
      <form
        className="rounded bg-neutral px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 ">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className={`input input-bordered w-full ${errors.username ? "input-error" : ""}`}
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-primary w-full mb-4">
            Sign In
          </button>
        </div>
      </form>
      <button
        onClick={() => router.push("/users/sign-up")}
        className="btn btn-neutral w-full"
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginForm;
