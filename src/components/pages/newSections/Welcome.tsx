"use client";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [videoSrc, setVideoSrc] = useState<string>("");

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc("/video/smallHero.mp4");
    } else {
      setVideoSrc("/video/hero.mp4");
    }
  };

  useEffect(() => {
    handleVideoSrcSet();
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="w-full h-auto bg-black relative mt-[70px]">
      <div className="w-full h-auto  flex items-center justify-center ">
        <p
          id="hero"
          className=" absolute top-5 text-neutral-300 font-bold opacity-75"
        >
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
