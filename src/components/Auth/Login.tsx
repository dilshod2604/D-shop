"use client";
import React from "react";
import Image from "next/image";
import image from "../../assets/auth.png";
import SignInForm from "./LoginFormSections/SignInForm";

const SignUp = () => {
  return (
    <div className=" flex w-full h-[800px] rounded-md overflow-hidden relative mt-[50px]">
      <Image
        src={image}
        alt="cover"
        className=" absolute w-full h-[781px] brightness-50"
      />

      <SignInForm />
    </div>
  );
};

export default SignUp;
