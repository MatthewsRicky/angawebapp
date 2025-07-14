"use client";
import { useState } from "react";
import Searchbar from "./Searchbar";
import {
  BiCloud,
  BiCloudDrizzle,
  BiCloudLightning,
  BiCloudLightRain,
  BiCloudRain,
  BiCloudSnow,
  BiSun,
  BiWind,
} from "react-icons/bi";

export default function Header() {
  const [coords, setCoords] = useState({ lat: -4.322222, lon: 39.575001 }); // Diani default
  return (
    <header className="flex items-center justify-between w-full h-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="flex items-center justify-between w-full max-w-6xl px-4">
        <h1 className="text-2xl font-bold">Weather App</h1>
      </div>
    </header>
  );
}
