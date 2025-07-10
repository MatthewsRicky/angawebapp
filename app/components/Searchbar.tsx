"use client";

import React, { useState } from "react";
import { fetchCoordsByCity, fetchFullWeather } from "../lib/api";

export default function Searchbar() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const coords = await fetchCoordsByCity(city);
      const data = await fetchFullWeather(coords.lat, coords.lon);
      setWeather(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex flex-row w-10/12">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter location"
          className="border-gray-600/40 text-md px-3 py-1 border-2 rounded-lg text-sm text-gray-900 font-regular active: bg-gray-200"
        />
        <button
          onClick={handleSearch}
          className="bg-element text-white px-4 py-1 ml-2 rounded-lg text-sm font-semibold hover:bg-gray-600/60 transition-colors duration-300"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
}
