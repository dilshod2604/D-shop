import { Skeleton } from "antd";
import React from "react";

const InlineSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-4 container mt-[100px]">
      <div className="flex gap-x-2 items-center">
        <Skeleton.Image active style={{ width: "50px", height: "50px" }} />
        <Skeleton active paragraph={{ rows: 1 }} />
      </div>
      <div className="flex gap-x-2 items-center">
        <Skeleton.Image active style={{ width: "50px", height: "50px" }} />
        <Skeleton active paragraph={{ rows: 1 }} />
      </div>
    </div>
  );
};

export default InlineSkeleton;
