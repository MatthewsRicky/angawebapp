import React from "react";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-between items-center py-4">
      Navbar
      <Searchbar />
    </nav>
  );
}
