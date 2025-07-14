import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} Weather App
      </footer>
      <p className="text-center text-gray-500 my-2">
        {" "}
        Built with Next.js and Open-Meteo API
      </p>
    </div>
  );
}
