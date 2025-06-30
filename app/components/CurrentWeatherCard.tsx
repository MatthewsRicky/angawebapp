import React from "react";
import { BiMoon, BiSolidRightArrow, BiSun } from "react-icons/bi";
import {
  BsCloudRainHeavyFill,
  BsFillCloudRainFill,
  BsCloudRainHeavy,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { weatherCardData} from "../lib/data";

export default function CurrentWeatherCard() {
  return (
    <main className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-between py-2 px-3 min-w-w-fit border-2 rounded-2xl bg-gradient from-blue-50/70 to-blue-100/90 border-blue-500/20 shadowxl">
        <h1 className="text-base font-redular text-gray-600/90 shadowsm py-1 px-2 rounded-sm mt-1 bg-element">
          Sunday 29 | 06
        </h1>

        <div className="flex w-full text-gray-700/80 items-center justify-around shadowsm p-3 mt-4 rounded-xl bg-element">
          <span className="flex flex-col text-7xl p-2 items-center justify-between">
            <BsCloudRainHeavy />
            <h2 className="text-3xl font-medium my-2">Rainy</h2>
          </span>

          <div className="flex items-baseline">
            <p className="font-medium text-6xl">
              25
              <sup>o</sup>
            </p>
            <h2>c</h2>
          </div>
        </div>

        <div className="w-full flex flex-col items-start mb-3 py-2 px-1 justify-between text-gray-600">
          <div className="flex items-center justify-around w-full">
            <h3>More details</h3>
            <BiSolidRightArrow />
          </div>
        </div>
        <div className="flex px-2 items-center w-full justify-around text-base bg-element rounded-lg shadowsm mb-1">
          <span className="flex items-center justify-center gap-3 my-1 p-2">
            <BsFillSunFill className="text-amber-300 shadowsm rounded-full" />
            <h3>High</h3>
            <h2>
              27<sup>o</sup>c
            </h2>
          </span>
          <span className="flex items-center justify-center gap-3 my-1 p-2">
            <BsFillMoonFill className="text-amber-300 shadowsm rounded-full" />
            <h3>Low</h3>
            <h2>
              19<sup>o</sup>c
            </h2>
          </span>
        </div>
      </div>
    </main>
  );
}
