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
    // Static fallback location: New York City
    const latitude = 40.7128;
    const longitude = -74.006;

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
    <div className="h-screen flex flex-col items-center justify-center text-2xl bg-gradient-to-b from-blue-50 to-blue-100 mx-auto mt-20">
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

        <div className="flex flex-ro justify-center items-center">
          {" "}
          <p>🌡️ High: {current.temperature_2m_max}°C</p>
          <p>🌡️ Low: {current.temperature_2m_min}°C</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">7-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {daily.time.map((date: string, i: number) => (
          <div key={date} className="bg-white rounded-xl p-4 shadow border">
            <p className="font-bold">
              {new Date(date).toLocaleDateString(undefined, {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p>🌡️ High: {daily.temperature_2m_max[i]}°C</p>
            <p>🌡️ Low: {daily.temperature_2m_min[i]}°C</p>
            <p>💨 Wind: {daily.wind_speed_10m_max[i]} km/h</p>
          </div>
        ))}
      </div>
    </div>
  );
}
