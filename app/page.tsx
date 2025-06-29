"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function page() {
  const params = useSearchParams();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-2xl bg-gradient-to-b from-blue-50 to-blue-100 mx-auto">
      <Hero />
    </div>
  );
}
