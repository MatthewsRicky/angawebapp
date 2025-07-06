import React from "react";
import Searchbar from "./Searchbar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center h-screen justify-around mx-auto w-full xl:w-[80%z]">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <CurrentWeatherCard className="h-[100%]" children />
          <WeeklyWeatherCard />
        </div>
        <h1 className="flex w-full text-center">
          Search for the weather forecast in your Location
        </h1>
        <Searchbar />
      </div>
    </div>
  );
}
