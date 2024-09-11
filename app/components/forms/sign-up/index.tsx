"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";

import { SignUpFormValues } from "@/app/types/user";
import { signUpFetch } from "@/app/fetch/user";
import ImageUpload from "../../image-upload";

const ClientToastContainer = dynamic(() => import("@/app/components/toasty"));

const SignUpForm = () => {
  const [file, setFile] = useState<File | null>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    const id = uuidv4();

    console.log("submitting form");
    try {
      await signUpFetch({ ...data, id, image: file }), router.push(`/`);
    } catch (error) {
      toast("Oops! Error creating a new User, Please try again!");
      console.error(error);
    } finally {
      // reset();
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center rounded bg-neutral px-8 pt-6 pb-8 mb-4 md:w-[45vw]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <ImageUpload handleUpload={(file) => setFile(file)} />
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
          <label className="block text-sm font-bold mb-2" htmlFor="firstName">
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
          <label className="block text-sm font-bold mb-2" htmlFor="lastName">
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
          <label className="block text-sm font-bold mb-2" htmlFor="email">
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
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text pr-2">Is Lecturer?</span>
            <input
              {...register("isLecturer")}
              type="checkbox"
              className="toggle toggle-primary"
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-secondary mb-4">
            Sign Up
          </button>
        </div>
        <ClientToastContainer />
      </form>
    </>
  );
};

export default SignUpForm;
