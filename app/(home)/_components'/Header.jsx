"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SideBarNav from "./SideBarNav";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=" p-6 border-b flex w-full  items-center justify-between">
      <SearchBar />
      <button
        className="mr-4 focus:outline-none text-gray-900 font-semibold hover:border-gray-900 border-gray-700 px-3 py-1 border rounded-lg z-99 hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black duration-200"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? null : <h1>Options</h1>}
      </button>
      <SideBarNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};
