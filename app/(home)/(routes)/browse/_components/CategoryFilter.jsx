"use client";

import React, { useState } from "react";

const CategoryFilter = () => {
  const [activeindex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "React",
      value: "react",
    },
    {
      id: 3,
      name: "Next Js",
      value: "nextjs",
    },
    {
      id: 4,
      name: "Tailwind Css",
      value: "tailwindcss",
    },
    {
      id: 5,
      name: "Firebase",
      value: "firebase",
    },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50 ${
            activeindex == index
              ? "border-purple-800 bg-purple-50 text-purple-800"
              : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
