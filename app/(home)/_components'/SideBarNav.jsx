"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  layout,
  Mail,
  Shield,
  Menu,
  Cross,
  CrossIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

const SideBarNav = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();
  const [burger, setburger] = useState(false);
  const { user } = useUser();

  const menulist = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`h-full fixed z-10 sm:z-50 top-0 right-0 bg-white   border-r flex flex-col overflow-y-auto shadow-md ${
        isSidebarOpen ? `w-64 duration-150` : `w-0 duration-150`
      } `}
    >
      <div className="p-5 border-b z-50 flex justify-between items-center gap-10">
        <Image src="/logo.svg" width={70} height={70} alt="/" priority />
        {!user ? (
          <button
            className=""
            onClick={() => {
              router.push("/sign-in");
            }}
          >
            Login
          </button>
        ) : (
          <UserButton />
        )}
      </div>
      <div className="flex flex-col">
        {menulist.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${
              activeIndex == index ? "bg-purple-50 text-purple-800" : null
            } `}
            onClick={() => {
              setActiveIndex(index);
              router.push(item.path);
            }}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      <button
        className="underline text-right text-[1rem] p-4 hover:text-gray-700 "
        onClick={toggleSidebar}
      >
        Close
      </button>
    </div>
  );
};

export default SideBarNav;
