"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Reaction from "./Reaction";

interface BlogCardProps {
  data: BlogItem[];
}

interface BlogItem {
  id: number;
  title: string;
  cover: string;
  content: string;
}

const cardStyle = {
  display: "flex",
  border: "1px solid gray",
  flexDirection: "column" as const, // Update the type of flexDirection
  alignItems: "center",
};

const BlogCard = ({ data }: BlogCardProps) => {
  // const [list, setList] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://q-force-wiki.hotanloc.xyz/flows/trigger/e8bb5c1b-36e0-4d67-ada1-f9be8ecf62b4",
  //       { next: { revalidate: 50000 } }
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setList(data.data.slice(0, 10));
  //     } else {
  //       console.error("Failed to fetch data");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="space-y-2 md:space-y-3 lg:min-w-600 md:min-w-500 w-full flex flex-col items-center">
      {data.map((item: BlogItem, index: number) => (
        <div
          key={index}
          className="py-4 px-5 max-w-xl md:min-w-500 min-w-200 w-full mx-auto bg-white  flex flex-col justify-start items-start space-y-3 rounded-xl shadow relative"
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex space-x-2">
              <a
                className="font-semibold text-sm cursor-pointer"
                href="/profile/teeadmin"
              >
                <div className="relative flex-shrink-0 ">
                  <img
                    className="h-10 w-10 md:h-12 md:w-12 select-none bg-white rounded-full object-cover flex-shrink-0 "
                    src="https://xuan-teeappapi.azurewebsites.net/default/default-male.svg"
                    alt="Avatar"
                  />
                </div>
              </a>
              <div className="flex flex-col justify-evenly">
                <a
                  className="font-semibold text-sm cursor-pointer hover:underline"
                  href="/profile/teeadmin"
                >
                  I am Admin
                </a>
                <Link
                  className="text-xs text-gray-500 dark:text-dark-txt hover:underline space-x-2"
                  href={`/blogs/${item.id}`}
                >
                  <span>Sep 3, 2022, 11:38 PM</span>
                  <i className="fas fa-globe-asia"></i>
                </Link>
              </div>
            </div>
            <div className="relative z-10">
              <div className="p-1 flex items-center justify-center rounded-full transition-base cursor-pointer active:scale-90 active:transform select-none flex-shrink-0  clickable dark:border-dark-third ">
                <i className="text-center align-middle text-xl w-7 h-7  text-black dark:text-dark-txt bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
          </div>
          <span className="text-sm break-words overflow-ellipsis max-w-full">
            {item.title}
          </span>
          <div className="w-full max-h-500 cursor-pointer">
            {" "}
            <div className="w-full max-h-128 bg-gray-100 dark:bg-dark-third rounded-xl shadow overflow-hidden">
              <img
                className="object-contain md:max-h-128 max-h-112 w-full"
                src={`https://q-force-wiki.hotanloc.xyz/assets/${item.cover}`}
                alt="Post photo"
              />
            </div>{" "}
          </div>
          <Reaction />
          <div className="w-full text-center flex justify-between items-center select-none cursor-pointer border-t border-b dark:border-dark-third space-x-1 text-gray-600 dark:text-dark-txt font-semibold text-sm p-1">
            <span className="relative flex-1 transition-base">
              <div className="w-full h-full p-1 bg-white hover:bg-gray-100 active:bg-gray-200 dark:bg-dark-secondary dark:hover:bg-dark-third dark:active:bg-dark-hover rounded transition-base">
                <span>
                  <i className="bx bx-like mr-2 text-lg align-middle"></i>Like
                </span>
              </div>
            </span>
            <span className="flex-1 p-1 h-full w-full bg-white hover:bg-gray-100 active:bg-gray-200 dark:bg-dark-secondary dark:hover:bg-dark-third dark:active:bg-dark-hover rounded transition-base flex items-center justify-center">
              <i className="bx bx-comment mr-2 text-lg align-middle "></i>
              Comment
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
