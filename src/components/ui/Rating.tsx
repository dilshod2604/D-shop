"use client";
import { Rate } from "antd";
import React, { FC } from "react";
interface RatingProps {
  rating: {
    rate: number;
    count: number;
  };
}
const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex">
      <Rate allowHalf defaultValue={rating.rate} />
     
    </div>
  );
};

export default Rating;
