import React from "react";

const CourseDetails = ({ courseDetail }) => {
  return (
    <div className="mt-5 p-5 rounded-lg border">
      <h2 className="text-[20px] font-semibold">{courseDetail.name}</h2>
      <p className="line-clamp-4 mt-5 text-gray-500">
        {courseDetail.description}
      </p>
    </div>
  );
};

export default CourseDetails;
