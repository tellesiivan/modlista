import React from "react";

export default function VinInput({
  vinValue,
  setVinValue,
  clickAction,
  errorReset,
}) {
  return (
    <div className="flex items-center h-12 px-2 py-2 mt-4 rounded-md bg-alt">
      <input
        className="flex-grow bg-transparent border-none outline-none text-inputGray sm:text-sm placeholder:text-xs placeholder:text-textGray "
        placeholder="Enter VIN number..."
        type="text"
        value={vinValue}
        onChange={(e) => {
          setVinValue(e.target.value.toUpperCase());
          errorReset("");
        }}
      />
      <button
        className="h-full px-3 py-1 text-xs text-white transition-opacity duration-500 rounded-md opacity-100 bg-textGray disabled:opacity-0"
        disabled={vinValue.trim().length < 17}
        onClick={clickAction}
      >
        Search
      </button>
    </div>
  );
}
