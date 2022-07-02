import React from "react";

export default function PriceRateLayout({ children }) {
  return (
    <div className="grid w-full grid-cols-2 border divide-x rounded-md border-greyDark divide-greyDark bg-main justify-items-stretch">
      {children[0]}
      <div className="flex flex-col items-center p-2 ">
        <h3 className="mb-1 text-xs text-gray-400">Rating</h3>
        {children[1]}
      </div>
    </div>
  );
}
