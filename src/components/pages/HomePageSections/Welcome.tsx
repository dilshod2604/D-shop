"use client";
import Modal from "@/components/shared/Modal";
import Crousel from "@/components/ui/Crousel";
import HomeSideBar from "@/components/ui/HomeSideBar";
import { useCategoriesStore } from "@/store/useCategoriesStore";
import React from "react";

const Welcome = () => {
  const {isOpen}=useCategoriesStore()
  return (
    <section>
      <div className="container">
        <div className="flex gap-x-5 ">
          <HomeSideBar />
          <Crousel />
        </div>
        {
          isOpen&&<Modal>
            
          </Modal>
        }
      </div>
    </section>
  );
};

export default Welcome;
