import React from "react";

export default function ProfileLoading() {
  return (
    <div className=" h-screen mx-[1%] my-2 space-y-3 w-[98%] animate-pulse adminPanelH">
      <div className="h-56 rounded-md bg-alt"></div>
      <div className="flex space-x-2">
        <div className="w-20 h-20 ml-4 border border-gray-800 rounded-full -mt-14 bg-main"></div>
        <div className="flex-1 py-1 space-y-3">
          <div className="h-3 rounded-full bg-alt"></div>
        </div>
      </div>
      <div className="h-12 rounded-md bg-alt"></div>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="h-20 rounded-md bg-alt"></div>
        <div className="h-20 rounded-md bg-alt"></div>
      </div>
      <div className="rounded-md h-36 bg-alt"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-3 col-span-2 rounded-full bg-alt"></div>
          <div className="h-3 col-span-1 rounded-full bg-alt"></div>
        </div>
        <div className="h-3 rounded-full bg-alt"></div>
        <div className="flex-1 py-1 space-y-3">
          <div className="h-3 rounded-full bg-alt"></div>
        </div>
      </div>
    </div>
  );
}
