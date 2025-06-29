import React from "react";

export default function Searchbar() {
  return (
    <div>
      <div className="flex flex-row w-10/12">
        <input
          type="text"
          placeholder="Enter location"
          className="border-gray-600/40 text-md px-3 py-1 border-2 rounded-lg text-sm text-gray-500 font-regular"
        />
      </div>
    </div>
  );
}
