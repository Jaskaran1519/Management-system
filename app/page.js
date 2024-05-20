import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="bg-white w-full min-h-screen dark:bg-[#151515]">
      HOme
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
