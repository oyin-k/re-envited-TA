import React from "react";
//
import AppImage from "../assets/app-image.png";
import { Button } from "../components";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center px-8 pt-7 sm:pt-16 md:flex-row md:justify-between">
      {/* Intro Text */}
      <div className="mx-auto max-w-xs text-center sm:max-w-[26rem] md:order-2 md:mx-0 md:text-right">
        <h1 className="mb-4 flex flex-wrap justify-center text-4xl font-bold text-envited-primary-blue-700 sm:text-[4rem] md:justify-end">
          Imagine if
          <span className="bg-gradient-to-r from-envited-primary-purple-500 to-envited-primary-pink-500 bg-clip-text text-transparent sm:py-6">
            Snapchat
          </span>
          had events.
        </h1>
        <p className="mb-4 text-base text-envited-nuetral-gray-600 sm:text-2xl">
          Easily host and share events with your friends across any social
          media.
        </p>
        {/* CTA */}
        <div className="mb-8 hidden w-full md:order-2 md:ml-auto md:block md:max-w-xs">
          <Button name={"Create my event"} icon={`🎉`} to="/create" />
        </div>
      </div>
      {/* Image */}
      <div className="h-auto py-9 sm:h-[24rem] sm:max-w-xs md:order-1 md:h-[36rem] md:max-w-sm">
        <img
          className="h-full object-cover object-center"
          src={AppImage}
          alt="mobile application"
        />
      </div>
      {/* CTA */}
      <div className="mb-8 w-full md:order-2 md:hidden">
        <Button name={"Create my event"} icon={`🎉`} to="/create" />
      </div>
    </section>
  );
};

export default Home;
