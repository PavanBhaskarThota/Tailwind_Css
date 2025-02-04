import React from "react";
import logo from "../assets/favicon.ico"

export const Navbar = () => {
  return <div className="flex h-[60px] justify-between align-middle w-full px-[20px] py-2">
    <div>
      <img src={logo} alt="" className="w-[90%]"/>
    </div>

    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>;
};
