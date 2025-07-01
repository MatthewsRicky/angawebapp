import React from "react";
import { BiCloudDrizzle, BiMoon, BiSun } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";
import { weatherCardData } from "../lib/data";

export default function WeeklyWeatherCard() {
  return (
    <main className="flex items-center justify-center w-full">
      <div className="grid grid-cols-7 gap-4 p-3 rounded-xl items-center border-2 border-blue-300/40 justify-center shadowxl">
        {weatherCardData.map((index, title) => (
          <div key={title} className="flex h-80 flex-col items-center justify-around rounded-md bg-element shadowxl">
            <div className="flex flex-col gap-1 items-center mt-3">
              <h1 className="row-span-1">{index.day}</h1>
              <h3 className="text-base">{index.date}</h3>
            </div>
            <div className="flex flex-col items-center justify-between gap-3">
              <BiCloudDrizzle className="text-3xl text-center mt-3" />
              <h3 className="text-xs line-clamp-2 text-center">
                {index.title}
              </h3>
            </div>

            <span className="flex gap-1 items-center justify-center mt-2 text-base">
              <BiSun />
              <h1>
                {index.high}
                <sup>0</sup>c
              </h1>
            </span>
            <span className="flex gap-1 items-center justify-center mt-2 text-base">
              <BiMoon />
              <h1>
                {index.low}
                <sup>0</sup>c
              </h1>
            </span>
            <div className="flex flex-col items-center justify-between mb-3">
              <MdArrowRightAlt className="text-base" />
              <span>
                <h3 className="text-base">{index.windspeed} km/h</h3>
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
