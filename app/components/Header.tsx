import React from "react";
import Navbar from "./Navbar";
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
  return (
      <header className="flex items-center justify-between w-full h-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
        <div className="flex items-center justify-between w-full max-w-6xl px-4">
          <h1 className="text-2xl font-bold">Weather App</h1>
          <Searchbar />
        </div>
      </header>
    
  );
}
