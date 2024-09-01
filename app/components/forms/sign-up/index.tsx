"use client";

import { SubmitHandler, useForm } from "react-hook-form";

export type FormValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle login logic here
    console.log("Form Data:", data);
  };

  return <></>;
};

export default SignUpForm;
