"use client";
import { useActionsStore } from "@/store/useActionsStore";
import React from "react";
import { RiAppsLine } from "react-icons/ri";
import { RiAppsFill } from "react-icons/ri";

const ActionsButton = () => {
  const { isOpen, setIsOpen } = useActionsStore();
  return (
    <button onClick={() => setIsOpen(!isOpen)} className=" hidden max-sm:flex">
      {isOpen ? (
        <RiAppsFill size={25} className="text-black" />
      ) : (
        <RiAppsLine size={25} className="text-black" />
      )}
    </button>
  );
};

export default ActionsButton;
