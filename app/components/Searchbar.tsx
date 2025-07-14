"use client";

import React, { useState } from "react";
import { fetchCoordsByCity } from "../lib/api";

type Props = {
  onSearch: (coords: { lat: number; lon: number }) => void;
};

export default function Searchbar({ onSearch }: Props) {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      const { lat, lon } = await fetchCoordsByCity(city);
      onSearch({ lat, lon });
    } catch (err: any) {
      alert(err.message || "City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row w-10/12">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for City"
        className="border-gray-600/40 text-md px-3 py-1 border-2 rounded-lg text-sm text-gray-900 font-regular active:bg-gray-200"
      />
      <button
        onClick={handleSearch}
        className="bg-element text-white px-4 py-1 ml-2 rounded-lg text-sm font-semibold hover:bg-gray-600/60 transition-colors duration-300"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
