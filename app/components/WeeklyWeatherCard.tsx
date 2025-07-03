import React, { useEffect, useState } from "react";
import { BiCloudDrizzle, BiMoon, BiSun } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";
import { weatherCardData } from "../lib/data";
import { fetchFullWeather } from "../lib/api";

export default function WeeklyWeatherCard() {
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
    <main className="flex items-center justify-center w-full h-full">
      <div className="grid grid-cols-7 gap-4 p-3 rounded-t-md rounded-b-2xl items-center border-2 border-blue-300/40 justify-between shadowxl h-full">
        {daily.time.map((date: string, i: number) => (
          <div
            key={date}
            className="flex flex-col items-center justify-around rounded-md bg-element shadowxl "
          >
            <p className="font-regular text-base">
              {new Date(date).toLocaleDateString(undefined, {
                weekday: "short",
                // month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        ))}

        {weatherCardData.map((index, i: number) => (
          <section
            className="flex flex-col items-center justify-around rounded-md bg-element shadowxl h-full"
            key={index.title}
          >
            {/* <div className="flex flex-col items-center justify-between gap-3">
              <BiCloudDrizzle className="text-3xl text-center mt-3" />
              <h3 className="text-xs line-clamp-2 text-center">
                {index.title}
              </h3>
            </div> */}

            <span className="flex flex-col gap-1 items-center justify-center mt-2 text-base">
              <BiSun />
              <h1>
                {daily.temperature_2m_max[i]}
                <sup>0</sup>c
              </h1>
            </span>
            <span className="flex flex-col gap-1 items-center justify-center mt-2 text-base">
              <BiMoon />
              <h1>
                {daily.temperature_2m_min[i]}
                <sup>0</sup>c
              </h1>
            </span>
            <div className="flex flex-col items-center justify-between mb-3">
              <MdArrowRightAlt className="text-base" />
              <span>
                <h3 className="text-base">
                  {daily.wind_speed_10m_max[i]} km/h
                </h3>
              </span>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
