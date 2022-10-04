import React from "react";
//
import ArrowIcon from "../../assets/ArrowIcon.svg";

const List = ({ icon, maintext, subtext }) => {
  return (
    <div className="mb-4 flex items-center justify-between px-5 sm:px-0">
      <div className="flex">
        <div className="mr-4 grid place-items-center rounded-[10px] bg-white p-3 text-envited-primary-purple-500 shadow-md">
          {icon}
        </div>
        <div className="">
          <h4 className="text-base font-bold text-envited-primary-blue-700 md:text-xl">
            {maintext}
          </h4>
          <span className="text-sm text-envited-nuetral-gray-500 md:text-lg">
            {subtext}
          </span>
        </div>
      </div>
      <div>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.56763 1L8.56763 8L1.56763 15"
            stroke="#BDBDBD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default List;
