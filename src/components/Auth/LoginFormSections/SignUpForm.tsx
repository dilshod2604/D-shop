import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const SignUpForm = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-4 z-10 max-w-[370px]">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-white font-bold text-3xl">Create an account</h1>
          <p className="text-neutral-200">Enter your details below</p>
        </div>
        <form className="flex flex-col gap-y-5 ">
          <input
            type="text"
            placeholder="Name "
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400  rounded-md px-4"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400  rounded-md px-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400  rounded-md px-4"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center py-4 bg-red-500 rounded-lg hover:opacity-75 text-white font-bold "
          >
            Create Account
          </button>
        </form>
        <button
          className="flex items-center justify-center gap-x-3
         rounded-md py-3 text-black font-semibold hover:opacity-75 bg-white"
        >
          <FcGoogle size={25} />
          Sign up with Google
        </button>
        <div className="flex items-center  justify-center gap-x-2 ">
          <p className=" font-sm text-neutral-200 ">Already have account?</p>
          <Link href={"#"} className="text-white hover:underline font-bold">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
