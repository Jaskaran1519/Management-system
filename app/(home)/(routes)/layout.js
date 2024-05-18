import React from "react";
import SideBarNav from "../_components'/SideBarNav";
import Header from "../_components'/Header";

const homelayout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className=" p-5 z-0">{children}</div>
    </div>
  );
};

export default homelayout;
