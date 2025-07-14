import React, { useEffect, useState } from "react";
import { BiCloudDrizzle, BiMoon, BiSun } from "react-icons/bi";
import { MdArrowRight, MdArrowRightAlt } from "react-icons/md";
import { weatherCardData } from "../lib/data";
import { fetchFullWeather } from "../lib/api";
import { BsFillSunFill } from "react-icons/bs";

type WeatherCardProps = {
  className?: string;
  lat: number;
  lon: number;
};

export default function WeeklyWeatherCard({
  className,
  lat,
  lon,
}: WeatherCardProps) {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Static fallback location: Diani

    const loadWeather = async () => {
      try {
        const data = await fetchFullWeather(lat, lon);
        setWeather(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (lat && lon) loadWeather();
  }, [lat, lon]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  const current = weather.current;
  const daily = weather.daily;

  return (
    <main
      className={`flex flex-col items-center justify-center w-full mx-auto xl:min-w-full min-h-full ${className}`}
    >
      <div
        className="flex w-full px-3 mb-2 justify-center rounded-t-md rounded-b-2xl items-center border-1 border-blue-300/40 shadowsm"
        key={current.time}
      >
        <p className="font-extrabold uppercase text-gray-700/70 text-xs">
          {new Date(current.time).toLocaleDateString(undefined, {
            month: "long",
          })}
        </p>
      </div>

      <div className="grid grid-cols-7 gap-3 pb-2 px-2 w-full rounded-t-md rounded-b-2xl items-center border-2 border-blue-300/40 justify-between shadowxl h-full">
        {daily.time.map((date: string, i: number) => (
          <div
            key={date}
            className="flex flex-col items-center justify-around rounded-md bg-element shadowsm "
          >
            <p className="font-semibold text-xs text-gray-700/90 p">
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

            <span className="flex flex-col gap-1 items-center justify-center mt-2 text-xs">
              <BsFillSunFill className="text-yellow-400" />
              <p>high</p>
              <h1>
                {daily.temperature_2m_max[i]}
                <sup>0</sup>c
              </h1>
            </span>
            <span className="flex flex-col gap-1 items-center justify-center mt-2 text-xs">
              <BiMoon className="text-yellow-400" />
              <h1>
                <p>low</p>
                {daily.temperature_2m_min[i]}
                <sup>0</sup>c
              </h1>
            </span>
            <div className="flex flex-col items-center justify-between mb-3">
              <div className="flex items-center justify-center">
                💨
                <MdArrowRightAlt className="text-base" />
              </div>
              <span>
                <h3 className="text-xs">{daily.wind_speed_10m_max[i]} km/h</h3>
              </span>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
