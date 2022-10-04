import React from "react";
//
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => {
  return (
    <section className="mx-auto flex min-h-screen max-w-lg flex-col md:max-w-6xl">
      <Outlet />
    </section>
  );
};

export default LayoutWrapper;
