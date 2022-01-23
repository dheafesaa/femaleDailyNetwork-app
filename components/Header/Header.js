import React from "react";
import Image from "next/image";
import logo from "../../assets/img/FD-Logo-Pink.png";
import menu from "../../assets/img/menu.png";
import user from "../../assets/img/user.png";
import Selection from "../Selection/Selection";

const Header = () => {
  return (
    <nav className="w-full flex flex-col">
      <div className="flex items-center justify-between flex-wrap">
        <div className="p-2">
          <Image src={menu} alt="Menu" />
        </div>
        <Image src={logo} alt="Logo FDN" width={150} height={35} />
        <div className="block flex-grow lg:flex lg:items-center px-6">
          <div className="container flex mx-auto">
            <div className="flex border-2 rounded w-full ">
              <div className="flex items-center justify-center px-2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="px-2 py-2 w-full text-sm font-medium"
                placeholder="Search product, articles, topics, brands, etc"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#d01257] px-4 py-4">
          <div className="flex flex-row w-40 justify-between items-center">
            <Image src={user} alt="Menu" width={24} height={24} />
            <div className="text-white text-base tracking-wider">
              LOGIN / SIGNUP
            </div>
          </div>
        </div>
      </div>
      <Selection />
    </nav>
  );
};

export default Header;
