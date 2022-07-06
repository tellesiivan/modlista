import React from "react";

export default function AlertMessage({ message }) {
  return (
    <div className="w-full my-2 text-center border border-red-200 rounded-md">
      <div className="px-2 py-3 bg-red-100 rounded-md " role="alert">
        <span className="text-xs font-semibold text-left text-red-500">
          {message}
        </span>
      </div>
    </div>
  );
}
