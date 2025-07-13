import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import { fetchFullWeather } from "../lib/api";

export default function Hero() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDefault = async () => {
      try {
        const data = await fetchFullWeather(40.7128, -74.006); // NYC
        setWeather(data);
      } catch (err: any) {
        setError("Could not load default weather.");
      }
    };
    loadDefault();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center h-screen justify-around mx-auto w-full xl:w-[80%z]">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <CurrentWeatherCard className="h-[100%]" />
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
