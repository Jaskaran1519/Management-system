"use client";
import React from "react";
import Image from "next/image";
import { Book } from "lucide-react";
import Link from "next/link";

const CourseList = ({ courses }) => {
  return (
    <div className="mt-5 grid bg-white dark:bg-[#151515] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {courses.map((course, index) => (
        <Link href={"/course-preview/" + course.id} key={index}>
          <div key={index} className="border rounded-lg hover:shadow-md p-2">
            <Image
              src={course.banner.url}
              alt={course.name}
              width={1000}
              height={500}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-[12px] md:text-[16px] text-gray-800 font-medium mt-2 dark:text-white">
                {course.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <Book className="h-5 w-6 text-white rounded-full bg-gray-600 p-1" />
                <h2 className="text-[10px] text-gray-400 py-2">
                  {course.totalEpisode} Episodes
                </h2>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
