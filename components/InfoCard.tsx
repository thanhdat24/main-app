import React from "react";

export default function InfoCard() {
  return (
    <div className="sticky top-20 lg:block w-full bg-white dark:bg-dark-secondary rounded-lg shadow max-w-350">
      <div className="flex flex-col items-center w-full">
        <a
          className="relative h-28 w-full flex mb-6 select-none"
          href="/profile/test123"
        >
          <img
            src="https://xuan-teeappapi.azurewebsites.net/default/default-cover.jpg"
            alt="123 123 cover"
            className="w-full object-cover rounded-lg cursor-pointer"
          />
          <div className="absolute rounded-full left-1/2 transform bottom-0 translate-y-5 -translate-x-1/2 border-2 border-white dark:border-dark-secondary ring-2 ring-green-400 dark:ring-green-500 cursor-pointer">
            <div className="relative flex-shrink-0 ">
              <img
                className="h-14 w-14 md:h-16 md:w-16 select-none bg-white rounded-full object-cover flex-shrink-0 "
                src="https://xuan-teeappapi.azurewebsites.net/default/default-female.svg"
                alt="Avatar"
              />
            </div>
          </div>
        </a>
        <div className="w-full mx-4 dark:border-dark-hover pb-6 space-y-2">
          <a href="/profile/test123">
            <div className="w-full text-center font-semibold hover:underline text-lg max-row-2">
              123 123{" "}
            </div>
          </a>
          <div className="mx-3 text-center text-sm max-row-10"></div>
        </div>
      </div>
    </div>
  );
}
