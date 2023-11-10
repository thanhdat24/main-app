"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  return (
    <div className="bg-white   p-2 shadow border-b border-transparent  z-20  w-screen">
      <div className="relative max-w-full md:max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4 flex-shrink-0">
          <span>
            {/* <Image
              src="/assets/img/logo-circle.png"
              alt="Logo"
              className="h-10 w-10 cursor-pointer"
            />/ */}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="h-20 w-20 cursor-pointer"
              width={100}
              height={24}
              priority
            />
          </span>
        </div>
        <div className="text-3xl text-green-500 md:flex hidden">
          <Link href="/home">
            {" "}
            <div className="relative group border-b-4 border-transparent   border-green-500">
              <i className="select-none py-1 px-4 md:py-2 md:px-6 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-base cursor-pointer  bx bxs-home"></i>
              <div className="select-none animate-fadeIn group-hover:block absolute top-full left-1/2 hidden bg-black bg-opacity-60 px-1 rounded transform -translate-x-1/2 translate-y-2 text-white  text-sm font-title p-1">
                Home
              </div>
            </div>
          </Link>

          <div className="relative group border-b-4 border-transparent  ">
            <i className="select-none py-1 px-4 md:py-2 md:px-6 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-base cursor-pointer  bx bx-group"></i>
            <div className="select-none animate-fadeIn group-hover:block absolute top-full left-1/2 hidden bg-black  bg-opacity-60 px-1 rounded transform -translate-x-1/2 translate-y-2 text-white  text-sm font-title p-1">
              Friends
            </div>
          </div>
          <div className="relative group border-b-4 border-transparent block md:hidden ">
            <i className="select-none py-1 px-4 md:py-2 md:px-6 rounded-lg hover:bg-gray-100 active:bg-gray-200  transition-base cursor-pointer  bx bx-search"></i>
            <div className="select-none animate-fadeIn group-hover:block absolute top-full left-1/2 hidden bg-black  bg-opacity-60 px-1 rounded transform -translate-x-1/2 translate-y-2 text-white  text-sm font-title p-1">
              Search
            </div>
          </div>
        </div>
        <ul className="flex items-center space-x-2">
          {" "}
          <li className="active:transform active:scale-95 p-1 h-full rounded-full flex items-center  transition-base cursor-pointer select-none mr-3  hover:bg-gray-200">
            <div className="relative flex-shrink-0 ">
              <Image
                className="h-6 w-6 md:h-8 md:w-8 select-none bg-white rounded-full object-cover flex-shrink-0 "
                src="https://xuan-teeappapi.azurewebsites.net/default/default-female.svg"
                alt="Avatar"
                width={100}
                height={24}
                priority
              />
            </div>
            <span className="px-2 font-semibold truncate w-full">
              Thanh Dat
            </span>
          </li>
          <li className="md:inline hidden">
            <div className="relative">
              <div
                onClick={() => setIsOpenNavBar(!isOpenNavBar)}
                className={
                  !isOpenNavBar
                    ? "flex items-center justify-center rounded-full transition-base cursor-pointer active:scale-90 active:transform select-none flex-shrink-0  clickable-secondary bg-gray-100  p-2"
                    : "flex items-center justify-center rounded-full transition-base cursor-pointer active:scale-90 active:transform select-none flex-shrink-0 bg-green-100 hover:bg-green-200 active:bg-green-300 p-2 "
                }
              >
                <i className="text-center align-middle text-xl w-7 h-7  text-black bx bx-caret-down"></i>
              </div>
              {isOpenNavBar && (
                <div className="animate-fadeIn transition-base absolute top-full transform translate-y-1 right-0 border border-gray-200 bg-white w-60 rounded-lg shadow-lg overflow-hidden p-1  mt-2 select-none z-30">
                  <button className="flex items-center space-x-3 w-full pl-2 pr-4 py-2 rounded-md text-left hover:bg-gray-100 active:bg-gray-200 transition-base transform active:scale-95">
                    <i className="text-center text-xl align-middle text-black  w-7 h-7 bx  bx-moon"></i>
                    <span>Dark Mode</span>
                  </button>
                  <button className="flex items-center space-x-3 w-full pl-2 pr-4 py-2 rounded-md text-left hover:bg-gray-100 active:bg-gray-200 transition-base transform active:scale-95">
                    <i className="bx bx-log-in-circle text-center text-xl align-middle text-black  w-7 h-7"></i>
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
