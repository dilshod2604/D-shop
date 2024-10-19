import React from "react";
import { carousel } from "@/constants/tools";
import Image from "next/image";
import { Carousel } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Crousel = () => {
  return (
    <div className=" overflow-hidden pt-[40px] ">
      <Carousel
        autoplay
        dots
        easing="linear "
        autoplaySpeed={3000}
        arrows={true}
      >
        {carousel.map((item, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-md h-[400px] relative "
          >
            <div className="flex flex-col gap-y-4  max-w-[300px] absolute left-[40px] top-[130px] z-10 ">
              <div className="flex items-center gap-x-4">
                <item.icon size={25} className="text-white" />
                <p className="text-white  text-[12px]">{item.name}</p>
              </div>
              <h1 className="text-white font-bold text-3xl max-w-[300px]">
                {item.title}
              </h1>
              <Link
                href="#"
                className="text-white flex gap-x-4 items-center hover:underline transitions"
              > 
                Shop Now <FaArrowRight className="tetx-white" />
              </Link>
            </div>
            <Image
              src={item.image}
              alt="image"
              className="w-[300px] h-[300px] absolute  right-5  top-[50px] max-md:brightness-50  transition"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Crousel;
  