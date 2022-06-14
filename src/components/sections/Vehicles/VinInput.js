import React from "react";

export default function VinInput({
  vinValue,
  setVinValue,
  clickAction,
  errorReset,
}) {
  return (
    <div className="flex items-center h-12 px-2 py-2 rounded-md bg-alt">
      <input
        className="flex-grow text-gray-300 bg-transparent border-none outline-none sm:text-sm placeholder:text-xs placeholder:text-gray-500 "
        placeholder="Enter VIN number..."
        type="text"
        value={vinValue}
        onChange={(e) => {
          setVinValue(e.target.value.toUpperCase());
          errorReset("");
        }}
      />
      <button
        className="px-3 py-1 text-xs text-gray-300 transition-opacity duration-500 rounded-full opacity-100 bg-selected disabled:opacity-0"
        disabled={vinValue.trim().length < 17}
        onClick={clickAction}
      >
        Search
      </button>
    </div>
  );
}
