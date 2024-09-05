"use client";

import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { BACKEND_URL } from "@/constants";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

export type FormValues = {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const ClientToastContainer = dynamic(() => import("@/app/components/toasty"));

const EditUserForm = (data: FormValues) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { ...data } });

  console.log("session", session);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch(BACKEND_URL + `/users/${data.userId}`, {
        method: "PUT",
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      });
      if (response.ok) {
        toast("User Details Updated!");
      }
    } catch (error) {
      toast("Oops! Error editing User details, Please try again!");
      console.error(error);
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
            disabled
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
            disabled
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

        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-secondary mb-4">
            Edit
          </button>
        </div>
        <ClientToastContainer />
      </form>
    </>
  );
};

export default EditUserForm;
