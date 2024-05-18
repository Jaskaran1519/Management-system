"use client";
import React, { useEffect, useState } from "react";
import CategoryFilter from "./_components/CategoryFilter";

import { getCourseList } from "./../../../_services/index";
import CourseList from "./_components/CourseList";
const Browse = () => {
  const [courses, setCourses] = useState([]);
  const [courseOrg, setCoursesOrg] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () =>
    getCourseList().then((res) => {
      console.log(res);
      setCourses(res.courseLists);
      setCoursesOrg(res.courseLists);
    });

  const filterCourse = (category) => {
    if (category == "all") {
      setCourses(courseOrg);
      return;
    }
    const filterList = courseOrg.filter((course) => {
      return course.tag.includes(category);
    });

    setCourses(filterList);
  };
  return (
    <div>
      <CategoryFilter selectedCategory={(category) => filterCourse(category)} />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
};

export default Browse;
