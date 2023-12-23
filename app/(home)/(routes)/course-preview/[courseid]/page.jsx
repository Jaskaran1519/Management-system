"use client";
import React, { useEffect } from "react";

const CoursePreview = ({ params }) => {
  useEffect(() => {
    console.log(params.courseid);
  });
  return <div>CoursePreview</div>;
};

export default CoursePreview;
