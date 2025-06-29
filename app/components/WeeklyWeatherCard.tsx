import React from "react";
import { BiCloudDrizzle, BiMoon, BiSun } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";

export default function WeeklyWeatherCard() {
  return (
    <main className="flex items-center justify-center">
      <div className="grid grid-cols-7 gap-4 p-3 rounded-xl items-center border-2 border-blue-300/40 justify-center shadowxl">
        <div className="flex h-full flex-col items-center justify-center bg-element">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="row-span-1">Sun</h1>
            <h3 className="text-base">06 / 29</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BiCloudDrizzle className="text-3xl text-center mt-3" />
            <h3 className="text-base line-clamp-2 text-center">
              Light drizzle
            </h3>
          </div>

          <span className="flex gap-1 items-center justify-center mt-2 text-base">
            <BiSun />
            <h1>
              25<sup>0</sup>c
            </h1>
          </span>
          <span className="flex gap-1 items-center justify-center mt-2 text-base">
            <BiMoon />
            <h1>
              15<sup>0</sup>c
            </h1>
          </span>
          <div className="flex flex-col">
            <MdArrowRightAlt className="text-base my-3" />
            <span>
              <h3 className="text-base">17km/h</h3>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
