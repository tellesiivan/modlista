import React from "react";

const modsTypes = [
  "Interior",
  "Exterior",
  "Suspension",
  "Exhaust",
  "Wheels/Tires",
  "Accessories/Other",
  "Lighting",
];

export default function ModTabs() {
  return (
    <ul className="flex w-full h-16 mb-0 overflow-x-scroll snap-x snap-mandatory ">
      {modsTypes.map((mod, i) => (
        <li
          className="flex items-center justify-center min-w-[130px] h-full text-sm text-center border-greyDark snap-start border-b font-semibold text-gray-500 cursor-pointer hover:bg-alt"
          key={i}
        >
          {mod}
        </li>
      ))}
    </ul>
  );
}
