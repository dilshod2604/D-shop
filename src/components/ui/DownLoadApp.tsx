import Image from "next/image";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import qrCode from "../../assets/Qrcode.png";
const DownLoadApp = () => {
  return (
    <div className="flex flex-col  ">
      <h1 className="text-white font-bold mb-5">Download App</h1>
      <p className="text-neutral-400 text-sm mb-2   ">
        Save $3 with App New User Only
      </p>
      <div className="flex items-center gap-x-4">
        <Image src={qrCode} alt="QrCode" className="w-[100px] h-[100px]" />
        <div className="flex flex-col gap-y-2">
          <button className="flex items-center border border-white rounded-md p-1 font-bold gap-x-2 hover:opacity-75 transition">
            <FaGooglePlay size={20} className="text-white" />
            Google Play
          </button>
          <button className="flex items-center border border-white rounded-md p-1 font-bold gap-x-2 px-3 hover:opacity-75 transition">
            <GrApple size={20} className="text-white" />
            App Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownLoadApp;
