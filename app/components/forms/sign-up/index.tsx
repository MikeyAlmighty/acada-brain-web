"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { BACKEND_URL } from "@/constants";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

export type FormValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const ClientToastContainer = dynamic(() => import("@/app/components/toasty"));

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch(BACKEND_URL + "/users/signup", {
        method: "POST",
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast("New User Created!");
      }
    } catch (error) {
      toast("Oops! Error creating a new User, Please try again!");
      console.error(error);
    } finally {
      reset();
      router.push("/users");
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center rounded bg-neutral px-8 pt-6 pb-8 mb-4 md:w-[45vw]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
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

        <div className="mb-4 ">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            className={`input input-bordered w-full ${errors.username ? "input-error" : ""}`}
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="mb-4 ">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            className={`input input-bordered w-full ${errors.username ? "input-error" : ""}`}
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="mb-4 ">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Email Address
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email Addres"
            className={`input input-bordered w-full ${errors.username ? "input-error" : ""}`}
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Phone Number
          </label>

          <input
            id="phoneNumber"
            placeholder="Phone Number"
            className={`input input-bordered w-full ${errors.phoneNumber ? "input-error" : ""}`}
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs italic">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="py-2">
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
          <button type="submit" className="btn btn-primary mb-4">
            Sign Up
          </button>
        </div>
        <ClientToastContainer />
      </form>
    </>
  );
};

export default SignUpForm;
