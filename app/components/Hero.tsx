import React from "react";
import Searchbar from "./Searchbar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[95%]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4">
          <span className="">
            <CurrentWeatherCard />
          </span>
          <span>
            <WeeklyWeatherCard />
          </span>
        </div>

        <h1 className="flex w-[80%] text-center">
          Search for the weather forecast in your Location
        </h1>
        <Searchbar />
      </div>
    </div>
  );
}
