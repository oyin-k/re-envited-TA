import React from "react";
//
import { Link } from "react-router-dom";

const Button = ({ name, icon, to }) => {
  return (
    <Link
      to={to}
      className="flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-envited-primary-purple-500 via-envited-primary-pink-500 to-envited-primary-pink-500 bg-size-200 bg-pos-0 p-4 text-base font-semibold text-white transition-all duration-500 hover:bg-pos-100"
    >
      <span className="mr-2 h-6">{icon}</span>
      {name}
    </Link>
  );
};

export default Button;
