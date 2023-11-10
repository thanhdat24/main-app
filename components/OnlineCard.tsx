import React from "react";

export default function OnlineCard() {
  return (
    <div className="sticky top-20 md:block w-full">
      <div className="w-full h-full flex flex-col space-y-3 bg-white dark:bg-dark-secondary rounded-lg p-4 shadow">
        <span className="font-bold text-lg text-black">Online</span>
        <div className="flex flex-col select-none">
          <div className="flex items-center space-x-2 px-1 rounded-lg py-2 clickable active:scale-95 active:transform transition-base">
            <div className="relative flex-shrink-0 ">
              <img
                className="h-6 w-6 md:h-8 md:w-8 select-none bg-white rounded-full object-cover flex-shrink-0 "
                src="https://xuan-teeappapi.azurewebsites.net/default/default-female.svg"
                alt="Avatar"
              />
              <span className="absolute bg-green-500 dark:bg-green-400 bottom-0 right-0 rounded-full border-white dark:border-black md:w-3 md:h-3 w-2 h-2 md:border-2 border"></span>
            </div>
            <span className="font-semibold text-sm truncate w-full">
              123 123
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
