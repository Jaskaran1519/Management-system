import { Bluetooth } from "lucide-react";
import React from "react";

const Membership = ({ courseDetail }) => {
  return (
    <div>
      <div className="mt-5 border rounded-lg p-2 text-center ">
        <h2>
          Become a member and get full access to all the movies and TV shows for
          just $4000/month
        </h2>
        <button className="p-2 w-full bg-purple-500 rounded-lg text-[14px] text-white mt-2 hover:bg-purple-700">
          Lets Go
        </button>
      </div>
    </div>
  );
};

export default Membership;
