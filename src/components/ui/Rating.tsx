"use client";
import { Rate } from "antd";
import React, { FC } from "react";
interface RatingProps {
 rate:number
}
const Rating: FC<RatingProps> = ({ rate}) => {
  return (
    <div className="flex">
      <Rate allowHalf defaultValue={rate} />
    </div>
  );
};

export default Rating;
