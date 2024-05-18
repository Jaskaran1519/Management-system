"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, layout, Mail, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

const SideBarNav = () => {
  const router = useRouter();

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
    <div className="h-full b-hiwte border-r flex flex-col overflow-y-auto shadow-md ">
      <div className="p-5 border-b z-50">
        <Image src="/logo.svg" width={70} height={70} alt="/" priority />
      </div>
      <div className="flex flex-col">
        {menulist.map((item, index) => (
          <div
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
    </div>
  );
};

export default SideBarNav;
