import React from "react";

export const homelayout = ({ children }) => {
  return (
    <div className="overflow-hidden bg-white ">
      <div className="  z-0">{children}</div>
    </div>
  );
};
