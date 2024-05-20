import React from "react";

const Membership = ({ courseDetail }) => {
  return (
    <div>
      <div className="mt-5 border rounded-lg px-2 py-5 text-center ">
        <h2 className="py-5 text-black dark:text-white">
          Become a member and get full access to all the movies and TV shows for
          just $4000/month
        </h2>
        <button className="p-2 w-full bg-gray-800 rounded-lg text-[14px] text-white mt-2 hover:bg-gray-700 duration-200">
          Lets Go
        </button>
      </div>
    </div>
  );
};

export default Membership;
