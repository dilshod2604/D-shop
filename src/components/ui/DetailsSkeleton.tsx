"use client";
import { Skeleton } from "antd";
import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="flex gap-x-5 w-full h-full justify-center mt-[100px] ">
      <div className="flex items-center justify-center overflow-hidden max-w-[300px] h-[400px]  rounded-md">
        <Skeleton.Image active style={{ width: "300px", height: "400px" }} />
      </div>
      <div className="flex flex-col gap-y-3">
        <Skeleton.Input active />
        <Skeleton.Input active />
        <Skeleton.Input active />
        <div className="flex items-center gap-x-4">
          <Skeleton.Button active />
          <Skeleton.Button active />
          <Skeleton.Button active />
        </div>
        <Skeleton.Node active style={{ width: "250px" }} />
        <Skeleton.Node active style={{ width: "250px" }} />
      </div>
    </div>
  );
};

export default DetailsSkeleton;
