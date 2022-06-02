import React from "react";

export default function AlertMessage({ title, message }) {
  return (
    <div className="w-full my-2 text-center">
      <div
        className="flex items-center px-2 py-3 leading-none text-indigo-100 bg-red-100 rounded-md "
        role="alert"
      >
        <span className="flex px-2 py-1 mr-3 text-xs font-bold text-white uppercase bg-red-400 rounded-md">
          {title}
        </span>
        <span className="flex-auto mr-2 text-xs font-semibold text-left text-red-500">
          {message}
        </span>
      </div>
    </div>
  );
}
