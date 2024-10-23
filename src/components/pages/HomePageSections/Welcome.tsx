"use client";
import Modal from "@/components/shared/Modal";
import CategoriesMenu from "@/components/ui/CategoriesMenu";
import Crousel from "@/components/ui/Crousel";
import HomeSideBar from "@/components/ui/HomeSideBar";
import { useCategoriesStore } from "@/store/useCategoriesStore";
import React from "react";

const Welcome = () => {
  const { isOpen } = useCategoriesStore();
  return (
    <section className="pt-10">
      <div className="container">
        <div className="flex gap-x-5 ">
          <HomeSideBar />
          <Crousel />
        </div>
        {isOpen && (
          <Modal className=" top-[70px] right-[70px] z-30  bg-neutral-800 ">
            <CategoriesMenu />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Welcome;
