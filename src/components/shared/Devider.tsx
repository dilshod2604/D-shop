import React, { FC } from "react";

interface DeviderProps {
  width: string;
  heigth: string;
  color?: string;
  type: "horizontal" | "vertical";
}
const Devider: FC<DeviderProps> = ({
  color,
  heigth,
  width,
  type = "horizontal",
}) => {
  const style =
    type === "horizontal"
      ? `w-[${width}px] h-[${heigth}px] bg-${color}`
      : `w-[${width}px] h-[${heigth}px] rotate-90 bg-${color}`;

  return <span className={style}></span>;
};

export default Devider;
