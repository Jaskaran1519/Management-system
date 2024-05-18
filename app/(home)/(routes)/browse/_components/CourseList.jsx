import React from "react";
import Image from "next/image";
import { Book } from "lucide-react";
import Link from "next/link";

const CourseList = ({ courses }) => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {courses.map((course, index) => (
        <Link href={"/course-preview/" + course.id} key={index}>
          <div key={index} className="border rounded-lg p-2">
            <Image
              src={course.banner.url}
              alt={course.name}
              width={1000}
              height={500}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-[12px] md:text-[16px] font-medium mt-2">
                {course.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <Book className="h-5 w-6 text-purple-600 rounded-full bg-purple-300 p-1" />
                <h2 className="text-[10px] text-gray-400">
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
