"use client";
import { useState } from "react";
import Searchbar from "./Searchbar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";

export default function Hero() {
  const [coords, setCoords] = useState({ lat: -4.322222, lon: 39.575001 }); // Diani default

  return (
    <div className="flex flex-col lg:flex-row items-center h-full justify-around mx-auto mb-10 w-full xl:w-[80%]">
      <div className="flex flex-col gap-8 w-full">
        <Searchbar onSearch={setCoords} />

        <div className="flex flex-col my-4 md:flex-row gap-2 xl:gap-12">
          <CurrentWeatherCard
            className="h-[100%]"
            lat={coords.lat}
            lon={coords.lon}
          />
          <WeeklyWeatherCard
            className="h-[100%]"
            lat={coords.lat}
            lon={coords.lon}
          />
        </div>
      </div>
    </div>
  );
}
