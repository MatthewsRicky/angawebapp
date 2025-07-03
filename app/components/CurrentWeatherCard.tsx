"use client";

import { useEffect, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import {
  BsCloudRainHeavy,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { fetchFullWeather } from "../lib/api";

export default function CurrentWeatherCard(className: weatherCardProps) {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Static fallback location: Diani
    const latitude = -4.322222;
    const longitude = 39.575001;

    const loadWeather = async () => {
      try {
        const data = await fetchFullWeather(latitude, longitude);
        setWeather(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    loadWeather();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  const current = weather.current;
  const daily = weather.daily;

  return (
    <main
      className={`flex flex-col items-center justify-between h-full shadowxl rounded-b-2xl ${className}`}
    >
      <div className="flex flex-col items-center justify-between py-2 px-3 min-w-w-fit border-2 rounded-b-2xl rounded-t-md bg-gradient from-blue-50/70 to-blue-100/90 border-blue-500/20 shadowxl">
        <p className="text-base font-redular text-gray-600/90 shadowsm py-1 px-2 rounded-sm mt-1 bg-element">
          📅{" "}
          {new Date(current.time).toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="flex w-full text-gray-700/80 items-center justify-around shadowsm p-3 mt-4 rounded-xl bg-element">
          {/* <span className="flex flex-col text-7xl p-2 items-center justify-between">
            <BsCloudRainHeavy />
            <h2 className="text-3xl font-medium my-2">Rainy</h2>
          </span> */}

          <div className="flex items-baseline">
            <p className="font-medium text-6xl">
              {current.temperature_2m}
              <sup>o</sup>
            </p>
            <h2>c</h2>
          </div>
        </div>

        <div className="w-full flex flex-col items-start mb-3 py-2 px-1 justify-between text-gray-600">
          <p className="text-lg">💨 Wind: {current.wind_speed_10m} km/h</p>
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
              {current.temperature_2m_min}
              <sup>o</sup>c
            </h2>
          </span>
          <span className="flex items-center justify-center gap-3 my-1 p-2">
            <BsFillMoonFill className="text-amber-300 shadowsm rounded-full" />
            <h3>Low</h3>
            <h2>
              {current.temperature_min}
              <sup>o</sup>c
            </h2>
          </span>
        </div>
      </div>
    </main>
  );
}
