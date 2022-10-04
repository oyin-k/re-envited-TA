import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid place-items-center">
      Sorry... nothing to see here.
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFound;
