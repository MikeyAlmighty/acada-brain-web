"use client";

import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import Image from "next/image";

import { EditFormValues } from "@/app/types/user";
import { editUserFetch } from "@/app/fetch/user";

const ClientToastContainer = dynamic(() => import("@/app/components/toasty"));

const EditUserForm = (data: EditFormValues & { imgUrl: string }) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormValues>({ defaultValues: data });

  const onSubmit: SubmitHandler<EditFormValues> = async (data) => {
    try {
      if (session?.user.id) {
        await editUserFetch(session?.user.id, data, session?.user.accessToken);
        toast("User Details Updated!");
      }
    } catch (error) {
      toast("Oops! Error editing User details, Please try again!");
      console.error(error);
    }
  };
  console.log("imgUrl: ", data?.imgUrl)

  return (
    <div className="flex flex-col items-center">
      <Image
        className="object-cover rounded-full mb-12"
        width={250}
        height={250}
        src={data?.imgUrl ? data.imgUrl : "/default-avatar.svg"}
        alt="Profile Picture"
      />
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
          <button type="submit" className="btn btn-secondary my-4">
            Save
          </button>
        </div>
        <ClientToastContainer />
      </form>
    </div>
  );
};

export default EditUserForm;
