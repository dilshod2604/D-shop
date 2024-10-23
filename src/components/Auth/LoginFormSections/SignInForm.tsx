"use client";
import React from "react";
import { useSignInMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface InputValue {
  email: string;
  password: string;
}

const SignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<InputValue>();
  const [signIn] = useSignInMutation();

  const onSubmit: SubmitHandler<InputValue> = async (value) => {
    try {
      const res = await signIn({
        email: value.email,
        password: value.password,
      });
      router.push("/");
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
        <button className="flex items-center justify-center rounded-md bg-white py-3 gap-x-2 font-bold hover:opacity-75">
          <FcGoogle size={25} />
          Sign up with Google
        </button>
        <div className="flex items-center  justify-center gap-x-2 ">
          <p className=" font-sm text-neutral-200 ">Already have account?</p>
          <Link
            href="/auth/sign-up"
            className="text-white hover:underline font-bold"
          >
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
