import React from "react";

export default function Reaction() {
  return (
    <div className="flex justify-between w-full text-xs text-gray-500 pt-2">
      <div className="cursor-pointer flex items-center space-x-1">
        <div className="flex items-center">
          <div className="w-5 h-5 z-3">
            <img
              src="./media/haha.svg"
              alt="Haha"
              className="w-full h-full border-2 border-white dark:border-dark-secondary rounded-full "
            />
          </div>
          <div className="w-5 h-5 z-2">
            <img
              src="./media/wow.svg"
              alt="Wow"
              className="w-full h-full border-2 border-white dark:border-dark-secondary rounded-full transform -translate-x-1"
            />
          </div>
          <div className="w-5 h-5 z-1">
            <img
              src="./media/love.svg"
              alt="Love"
              className="w-full h-full border-2 border-white dark:border-dark-secondary rounded-full transform -translate-x-2"
            />
          </div>
        </div>
        <span className="cursor-pointer text-gray-500 dark:text-dark-txt hover:underline">
          3
        </span>
      </div>
      <span className="cursor-pointer text-gray-500 dark:text-dark-txt hover:underline"></span>
    </div>
  );
}
