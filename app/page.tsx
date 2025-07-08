"use client";

import { useEffect, useState } from "react";
import { fetchFullWeather, fetchCoordsByCity } from "./lib/api";
import Hero from "./components/Hero";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

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
    <div className="h-screen flex flex-col w-full items-center justify-center text-2xl mx-auto mt-20">
      <div className="flex flex-col xl:w-fit w-[95%] mx-auto">
        <Hero />
        <p>Continue further With next Component</p>
      </div>
    </div>
  );
}
