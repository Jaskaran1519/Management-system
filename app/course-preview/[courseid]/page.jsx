"use client";
import { getCourseById } from "@/app/_services";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetails from "./_components/CourseDetails";
import OptionSection from "./_components/OptionSection";
import Membership from "./_components/Membership";

const CoursePreview = ({ params }) => {
  const [courseDetail, setCourseDetails] = useState([]);

  useEffect(() => {
    params.courseid ? getCourse(params.courseid) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseid).then((res) => {
      console.log(res);
      setCourseDetails(res.courseList);
    }, []);
  };

  return (
    courseDetail?.name && (
      <div className="bg-white dark:bg-[#151515] w-full p-5 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <VideoPlayer videoUrl={courseDetail.video.url} />
            <CourseDetails courseDetail={courseDetail} />
          </div>
          <div className="px-5">
            <OptionSection courseDetail={courseDetail} />
            <Membership courseDetail={courseDetail} />
          </div>
        </div>
      </div>
    )
  );
};

export default CoursePreview;
