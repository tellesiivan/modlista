import React from "react";

export default function NoMods({ mod }) {
  return (
    <div className="flex flex-col items-center justify-center w-auto mx-2 space-y-6 h-80 bg-alt">
      <div className="space-y-2">
        <div className="z-10 h-20 bg-white w-72 bg-opacity-5 "></div>
        <div className="z-20 h-20 ml-10 bg-white bg-opacity-5 w-72 "></div>
      </div>
      <div>
        <h2 className="font-medium text-textGray">
          No {mod} modifications have been added yet.
        </h2>
      </div>
    </div>
  );
}
