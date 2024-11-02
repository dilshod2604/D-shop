"use client";
import React from "react";
import Navbar from "../ui/Navbar";
import SearchTrack from "../ui/SearchTrack";
import Actions from "../ui/Actions";
import Image from "next/image";
import logo from "../../assets/logo.png";
import BurgerButton from "../ui/BurgerButton";
import { useBurgerStore } from "@/store/useBurgerStore";
import Modal from "../shared/Modal";
import BurgerMenu from "../ui/BurgerMenu";
import { useGetMeQuery } from "@/redux/api/auth";
import ProfileButton from "../ui/ProfileButton";
import { useActionsStore } from "@/store/useActionsStore";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/store/useProfileStore";
import ProfileMenu from "../ui/ProfileMenu";
import SearchModal from "../ui/SearchModal";
import ActionsMenu from "../ui/ActionsMenu";
import CategoriesMenu from "../ui/CategoriesMenu";

const Header = () => {
  const router = useRouter();
  const { isOpen } = useBurgerStore();
  const { isShow } = useProfileStore();

  const { data: me } = useGetMeQuery();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-100">
      <div className="container">
        <div className="flex items-start justify-between pt-5 pb-2 border-b border-neutral-400">
          <div
            className="flex items-center justify-center  overflow-hidden cursor-pointer "
            onClick={() => router.push("/")}
          >
            <Image src={logo} alt="logo" className="w-[30px] h-[30px]" />
            <span className="flex items-center text-sky-600 font-bold max-md:hidden">
              D-<p className="text-pink-600  ">shop</p>
            </span>
          </div>
          <Navbar />
          <div className="flex items-center gap-x-4 ">
            <SearchTrack />
            <Actions />
            <ActionsMenu />
            <CategoriesMenu />
            {me?.email && <ProfileButton image={me.photo!} />}
            <BurgerButton />
          </div>
          {isOpen && (
            <Modal className="right-5 top-[70px] z-50 bg-neutral-800 px-[30px]">
              <BurgerMenu />
            </Modal>
          )}
          {isShow && (
            <Modal className="right-[170px] top-[70px] z-50 bg-neutral-800 px-[30px] max-2xl:right-[20px] max-lg:right-[10px] ">
              <ProfileMenu />
            </Modal>
          )}
          <SearchModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
