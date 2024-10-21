import React from "react";
import image1 from "../../../assets/playstation.png";
import Image from "next/image";
import image2 from "../../../assets/attractive-woman-wearing-hat-posing-black-background.png";
import image3 from "../../../assets/Frame.png";
import image4 from "../../../assets/gucci.png";
import Link from "next/link";

const NewArrival = () => {
  return (
    <section className="mt-[70px]">
      <div className="container">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-4">
            <span className="w-5 h-7 bg-red-500 rounded-md "></span>
            <h1 className="text-red-500 font-bold">Featured</h1>
          </div>
          <div className=" flex items-center justify-start mb-[40px] mt-4">
            <h1 className="text-black font-bold text-3xl">New Arrival</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-md:grid-rows-2">
            <div className="border border-black h-[616px] row-span-2 col-span-2 max-md:col-span-2 relative  bg-neutral-900  flex items-end px-5 py-5 rounded-md">
              <div className="max-w-[500px] h-[500px] overflow-hidden absolute  bottom-0 left-5 z-0 brightness-50">
                <Image src={image1!} alt="cover" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-y-4 z-10  relative">
                <h1 className="text-white font-bold text-2xl  ">
                  PlayStation 5
                </h1>
                <p className="text-neutral-200 text-sm max-w-[250px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link href="#" className="text-white hover:underline">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="border border-black h-[300px] col-span-2 max-md:col-span-2 relative  bg-neutral-950 flex items-end px-5 py-5 rounded-md">
              <div className="max-w-[430px] h-[280px] absolute bottom-0 right-0 z-10   brightness-50">
                <Image src={image2} alt="image2" className="w-full h-full " />
              </div>
              <div className="flex flex-col gap-y-4 z-10 relative ">
                <h1 className="text-white font-bold text-2xl ">
                  Women&apos;s Collections
                </h1>
                <p className="text-neutral-200 text-sm max-w-[250px]">
                  Featured woman collections that give you another vibe.
                </p>
                <Link href="#" className="text-white hover:underline">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="border border-black h-[300px] max-md:col-span-1 relative bg-neutral-900 flex items-end px-5 py-5 rounded-md max-sm:col-span-2">
              <div className="max-w-[190px] h-[220px] absolute bottom-10 right-9 z-0 brightness-50">
                <Image src={image3} alt="image3" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-y-4 z-10 relative">
                <h1 className="text-white font-bold text-2xl">Speakers</h1>
                <p className="text-neutral-200 text-sm max-w-[250px]">
                  Amazon wireless speakers
                </p>
                <Link href="#" className="text-white hover:underline">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="border border-black h-[300px] max-md:col-span-1  relative  bg-neutral-900 flex items-end px-5 py-5 rounded-md max-sm:col-span-2">
              <div className="max-w-[190px] h-[220px] absolute bottom-10 right-9 z-0  brightness-50  ">
                <Image src={image4} alt="image4" className="w-full h-full " />
              </div>
              <div className="flex flex-col gap-y-4 z-10 relative ">
                <h1 className="text-white font-bold text-2xl "> Perfume</h1>
                <p className="text-neutral-200 text-sm max-w-[250px]">
                  GUCCI INTENSE OUD EDP
                </p>
                <Link href="#" className="text-white hover:underline">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
