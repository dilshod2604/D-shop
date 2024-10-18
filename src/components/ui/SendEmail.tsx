"use client";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
const SendEmail = () => {
  const [email, setEmail] = useState<string>();

  return (
    <div className="flex items-center gap-x-2 p-2 border border-white rounded-md">
      <input
        value={email}
        type="text"
        className=" bg-transparent placeholder:text-neutral-700 focus:outline-none px-2"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <AiOutlineSend size={20} className="text-white" />
    </div>
  );
};

export default SendEmail;
