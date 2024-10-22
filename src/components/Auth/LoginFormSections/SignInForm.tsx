"use client";
import React from "react";
import { useSignInMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";

interface InputValue {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { register, handleSubmit } = useForm<InputValue>();
  const [signIn] = useSignInMutation();

  const onSubmit: SubmitHandler<InputValue> = async (value) => {
    try {
      const res = await signIn({
        email: value.email,
        password: value.password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-4 z-10 max-w-[370px]">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-white font-bold text-3xl">Log in to Exclusive</h1>
          <p className="text-neutral-200">Enter your details below</p>
        </div>
        <form
          className="flex flex-col gap-y-5 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400 rounded-md px-4"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400 rounded-md px-4"
            {...register("password", { required: true })}
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center py-4 bg-red-500 rounded-lg hover:opacity-75 text-white font-bold"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignInForm;
