"use client";

import { useEffect, useState } from "react";
import { fetchFullWeather } from "./lib/api";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await fetchFullWeather(
            position.coords.latitude,
            position.coords.longitude
          );
          setWeather(data);
        } catch (err: any) {
          setError(err.message);
        }
      },
      () =>  {
        setError("Location permission denied.")
       console.error("Geolocation error:", error);
  });
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  const current = weather.current;
  const daily = weather.daily;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Current Weather</h1>
      <div className="bg-blue-100 rounded-lg p-4 shadow mb-6">
        <p className="text-xl">🌡️ Temp: {current.temperature_2m}°C</p>
        <p className="text-lg">💨 Wind: {current.wind_speed_10m} km/h</p>
        <p className="text-sm text-gray-600">
          📅{" "}
          {new Date(current.time).toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
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
