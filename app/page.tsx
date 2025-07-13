"use client";


import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { fetchFullWeather } from "./lib/api";

export default function Home() {


  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Hero />
    </div>
  );
}
