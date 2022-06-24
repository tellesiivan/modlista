import React from "react";

export default function AdminHeading({ Heading, Desc }) {
  return (
    <div className="mt-1 mb-6">
      <div className="flex items-baseline space-x-1">
        <h2 className="text-lg font-bold text-white">{Heading}</h2>
        <span className="w-2 h-2 rounded-full bg-selected"></span>
      </div>
      <p className="text-sm text-gray-500">{Desc}</p>
    </div>
  );
}
