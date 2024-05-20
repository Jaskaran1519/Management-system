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
      link: `${courseDetail.youtubelink}`,
    },
    {
      id: 3,
      name: "IMDB",
      icon: "/imdb.png",
    },
  ];
  return (
    <div className="flex items-center gap-3 py-5">
      {optionList.map((option, index) => (
        <div
          key={index}
          className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer hover:bg-gray-900"
        >
          <Link href="/browse">
            <Image
              src={option.icon}
              width={40}
              height={40}
              className="py-3 mx-auto"
              alt="icon"
            />
            <h2 className="text-[13px] text-gray-500 p-2">{option.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OptionSection;
