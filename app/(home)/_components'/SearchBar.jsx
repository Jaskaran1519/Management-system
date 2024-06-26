"use client";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-3 text-[14px] items-center border p-2 rounded-md bg-gray-50 text-gray-500">
      <Search />
      <input
        type="text"
        placeholder="Search Course"
        className="bg-transparent outline-none max-w-[150px]"
      />
    </div>
  );
};

export default SearchBar;
