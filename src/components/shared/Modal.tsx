import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface ModalProps {
  children: ReactNode;
  className?: string;
}
const Modal: FC<ModalProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        " absolute flex flex-col rounded-md p-5 bg-black/25 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
