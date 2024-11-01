import { Skeleton } from "antd";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
interface CardsSkeletonProps {
  className?: string;
}
const CardsSkeleton: FC<CardsSkeletonProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        `flex flex-wrap container gap-x-4 gap-y-4 justify-center`,
        className
      )}
    >
      <div className="flex flex-col gap-y-2 rounded-md w-[250px] h-[300px] items-center bg-neutral-100 p-3">
        <Skeleton.Image active style={{ width: "150px", height: "150px" }} />
        <Skeleton.Input active style={{ width: "100%" }} />
        <Skeleton.Input active style={{ width: "100px" }} />
        <Skeleton.Input active />
      </div>
      <div className="flex flex-col gap-y-2 rounded-md w-[250px] h-[300px] items-center bg-neutral-100 p-3">
        <Skeleton.Image active style={{ width: "150px", height: "150px" }} />
        <Skeleton.Input active style={{ width: "100%" }} />
        <Skeleton.Input active style={{ width: "100px" }} />
        <Skeleton.Input active />
      </div>
      <div className="flex flex-col gap-y-2 rounded-md w-[250px] h-[300px] items-center bg-neutral-100 p-3">
        <Skeleton.Image active style={{ width: "150px", height: "150px" }} />
        <Skeleton.Input active style={{ width: "100%" }} />
        <Skeleton.Input active style={{ width: "100px" }} />
        <Skeleton.Input active />
      </div>
      <div className="flex flex-col gap-y-2 rounded-md w-[250px] h-[300px] items-center bg-neutral-100 p-3">
        <Skeleton.Image active style={{ width: "150px", height: "150px" }} />
        <Skeleton.Input active style={{ width: "100%" }} />
        <Skeleton.Input active style={{ width: "100px" }} />
        <Skeleton.Input active />
      </div>
    </div>
  );
};

export default CardsSkeleton;
