"use client";
import { useSearchModal } from "@/store/useSearchModal";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { IoMdClose } from "react-icons/io";

const SearchModal = () => {
  const { isOpen, setIsOpen } = useSearchModal();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasFocus, setHasFocus] = useState(false);
  const router = useRouter();
  const hasOnFocus = () => {
    router.push("/search");
    setHasFocus(true);
  };
  useEffect(() => {
    if (hasFocus) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      } else {
        router.push("/search");
      }
    }
  }, [searchQuery]);

  const closeModal = () => setIsOpen(false);
  return (
    <div className="absolute">
      <div
        className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-50 flex items-start justify-center z-50 pb-5
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        transition-all duration-500 ease-in-out`}
      >
        {isOpen && (
          <div className="bg-white mt-16 p-3 rounded-lg shadow-lg w-3/4 sm:w-1/2 md:w-1/3 border ">
            <IoMdClose
              size={20}
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-100 hover:opacity-75 hover:scale-110 transition cursor-pointer "
            />
            <DebounceInput
              type="text"
              debounceTimeout={1000}
              value={searchQuery}
              placeholder="What are you looking for?"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex items-center w-full h-full px-5  rounded-md focus:outline-none"
              onClick={hasOnFocus}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
