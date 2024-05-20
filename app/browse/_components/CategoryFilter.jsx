"use client";

import React, { useState } from "react";

const CategoryFilter = ({ selectedCategory }) => {
  const [activeindex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "TV Show",
      value: "tvshow",
    },
    {
      id: 3,
      name: "Anime",
      value: "anime",
    },
    {
      id: 4,
      name: "Movie",
      value: "movie",
    },
    {
      id: 5,
      name: "Game",
      value: "game",
    },
  ];
  return (
    <div className="flex gap-5 overflow-x-auto scrollbar-hide mt-6 w-[100vw] bg-white dark:bg-[#151515]">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(item.value);
          }}
          className={`border p-1 px-5 text-sm text-gray-900 dark:text-white rounded-md border-gray-300 hover:border-white hover:text-white font-semibold hover:bg-gray-800  ${
            activeindex == index
              ? "border-gray-800 dark:border-white bg-gray-50 text-gray-800 dark:bg-white dark:text-black"
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
