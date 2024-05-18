import React from "react";
import Image from "next/image";
import Link from "next/link";

const OptionSection = ({ courseDetail }) => {
  const optionList = [
    {
      id: 1,
      name: "Netflix",
      icon: "/netflix.png",
    },
    {
      id: 2,
      name: "Youtube",
      icon: "/youtube.png",
      ytlink: `${courseDetail.youtubelink}`,
    },
    {
      id: 3,
      name: "IMDB",
      icon: "/imdb.png",
    },
  ];
  return (
    <div className="flex items-center gap-3">
      {optionList.map((option, index) => (
        <div
          key={index}
          className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer"
        >
          <Link href="/browse">
            <Image src={option.icon} width={30} height={30} alt="icon" />
            <h2 className="text-[13px] text-gray-500">{option.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OptionSection;
