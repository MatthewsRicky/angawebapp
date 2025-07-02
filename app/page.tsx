"use client";

// import { useSearchParams } from "next/navigation";
// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";

// export default function page() {
//   const params = useSearchParams();

//   return (
//     <div className="h-screen flex flex-col items-center justify-center text-2xl bg-gradient-to-b from-blue-50 to-blue-100 mx-auto">
//       <Hero />
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { fetchFullWeather } from "./lib/api";
import { BsCloudRainHeavy } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

export default function Home() {
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
    <div className="h-screen flex flex-col w-[85%] items-center justify-center text-2xl bg-gradient-to-b from-blue-50 to-blue-100 mx-auto mt-20">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-center mb-4">Current Weather</h1>
        <div className="flex flex-col items-center justify-between py-2 px-3 min-w-w-fit border-2 rounded-2xl bg-gradient from-blue-50/70 to-blue-100/90 border-blue-500/20 shadowxl my-7">
          <p className="text-base font-redular text-gray-600/90 shadowsm py-1 px-2 rounded-sm mt-1 bg-element">
            📅{" "}
            {new Date(current.time).toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="flex text-7xl p-2 items-center justify-between">
            <p className="text-xl">🌡️ Temp: {current.temperature_2m}°C</p>
          </div>
          <span className="flex text-7xl p-2 items-center w-full justify-around">
            <BiSun />
            <h2 className="text-3xl font-medium my-2">Sunny</h2>
          </span>
          <p className="text-lg">💨 Wind: {current.wind_speed_10m} km/h</p>

          <div className="flex text-base justify-center items-center">
            {" "}
            <p>🌡️ High: {current.temperature_max}°C</p>
            <p>🌡️ Low: {current.temperature_min}°C</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-xl font-semibold mb-2">7-Day Forecast</h2>
        <div className="grid text-base grid-cols-7 gap-x-2 py-3 rounded-xl items-center border-2 m-4 border-blue-300/40 justify-center shadowxl">
          {daily.time.map((date: string, i: number) => (
            <div
              key={date}
              className="flex flex-col items-center justify-around rounded-md bg-element shadowxl "
            >
              <p className="font-regular text-base">
                {new Date(date).toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex text-center flex-col items-center justify-around gap-1">
                  <p>🌡️ High: </p>
                  <p className="">{daily.temperature_2m_max[i]}°C</p>
                </div>
                <div className="flex text-center flex-col items-center justify-around gap-1">
                  <p>🌡️ Low: </p>
                  <p>{daily.temperature_2m_min[i]}°C</p>
                </div>

                <p className="text-sm line-clamp-1">
                  {" "}
                  {daily.wind_speed_10m_max[i]} km/h
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
