"use client ";
import { useSignUpMutation } from "@/redux/api/auth";
import { IUser } from "@/types/sheme";
import { message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import { clearScreenDown } from "readline";
const SignUpForm = () => {
  const router = useRouter();
  const [image, setImage] = useState<string>("");
  const { register, handleSubmit } = useForm<IUser>();
  const [signUp] = useSignUpMutation();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if ((file && file.type === "image/png") || file?.type === "image/jpeg") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a PNG or JPG file.");
    }
  };

  const onSubmit: SubmitHandler<IUser> = async (value) => {
    try {
      const data = {
        name: value.name,
        email: value.email,
        password: value.password,
        photo: image,
      };
      await signUp(data);
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-4 z-10 max-w-[370px]">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-white font-bold text-3xl">Create an account</h1>
          <p className="text-neutral-200">Enter your details below</p>
        </div>
        <form
          className="flex flex-col gap-y-5 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative flex group items-center justify-center w-[150px] h-[150px] overflow-hidden rounded-full border  ">
            <img src={image} className="w-full h-full" />
            <input
              type="file"
              {...register("photo", { required: true })}
              className="absolute border  w-[150px] h-[150px] z-10 opacity-0 cursor-pointer "
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />
            <button className="absolute flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-neutral-950/75 transition focus:outline-none">
              <RxAvatar size={170} className="text-white " />
            </button>
          </div>
          <input
            type="text"
            placeholder="Name "
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400  rounded-md px-4"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400  rounded-md px-4"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 focus:outline-none placeholder:text-neutral-400  rounded-md px-4"
            {...register("password", { required: true })}
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
          <Link
            href="/auth/login"
            className="text-white hover:underline font-bold"
          >
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
