"use client";
import React, { FC, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { CiSearch } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
interface SearchTrackProps {
  className?: string;
}
const SearchTrack: FC<SearchTrackProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className={twMerge("max-sm:hidden", className)}>
      <div className="flex items-center  gap-x-4 bg-neutral-200 px-4 rounded-md">
        <DebounceInput
          type="text"
          debounceTimeout={300}
          value={searchQuery}
          placeholder="What are you looking for?"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex items-center px-5 py-1 rounded-md focus:outline-none bg-neutral-200 border"
        />
        <CiSearch size={20} className="text-black" />
      </div>
      <CiSearch size={25} className="text-black hidden max-sm:flex" />
    </div>
  );
};

export default SearchTrack;
