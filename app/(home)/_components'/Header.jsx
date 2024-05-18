"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import SideBarNav from "./SideBarNav";

const Header = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  useEffect(() => {
    console.log(user);
  }, [user]);
  console.log(user);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=" p-6 border-b flex w-full  items-center justify-between">
      <SearchBar />
      <button
        className="mr-4 focus:outline-none border-gray-800 px-3 py-1 border rounded-lg z-99 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? null : <h1>Options</h1>}
      </button>
      <SideBarNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
