import React from "react";

export default function NoMods({ mod }) {
  return (
    <div className="flex flex-col items-center justify-center w-auto p-6 mx-2 space-y-4 ">
      <div className="w-full space-y-2 animate-pulse">
        <div className="z-10 flex items-center w-10/12 p-2 mx-auto space-x-3 border rounded-md md:w-6/12 border-alt">
          <div className="w-16 h-16 rounded-md bg-inputMain"></div>
          <div className="flex-1 py-1 space-y-6">
            <div className="h-2 rounded bg-darkAlt"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 col-span-2 rounded bg-darkAlt"></div>
                <div className="h-2 col-span-1 rounded bg-ag-green"></div>
              </div>
              <div className="h-2 rounded bg-darkAlt"></div>
            </div>
          </div>
        </div>
        <div className="z-20 flex items-center w-full p-2 mx-auto space-x-3 border rounded-md md:w-2/3 border-alt">
          {" "}
          <div className="w-16 h-16 rounded-md bg-inputMain"></div>
          <div className="flex-1 py-1 space-y-6">
            <div className="h-2 rounded bg-darkAlt"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 col-span-2 rounded bg-darkAlt"></div>
                <div className="h-2 col-span-1 rounded bg-ag-yellow"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 col-span-1 rounded bg-darkAlt"></div>
                <div className="h-2 col-span-2 rounded bg-ag-hover"></div>
              </div>
              <div className="h-2 rounded bg-darkAlt"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-medium text-center text-textGray">
          No {mod} modifications have been added yet.
        </h2>
      </div>
    </div>
  );
}
