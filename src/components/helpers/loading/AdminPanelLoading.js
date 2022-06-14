import React from "react";

export default function AdminPanelLoading() {
  return (
    <div className="fixed hidden h-full px-3 mt-4 space-y-3 border-r border-gray-800 animate-pulse adminPanelH md:block w-96 md:overflow-y-scroll">
      <div className="grid grid-cols-4 gap-2 ">
        <div className="h-6 rounded-full bg-alt"></div>
        <div className="h-6 rounded-full bg-alt"></div>
        <div className="h-6 rounded-full bg-alt"></div>
        <div className="h-6 rounded-full bg-alt"></div>
      </div>

      <div className="h-56 rounded-md bg-alt"></div>
      <div className="flex space-x-2">
        <div className="rounded-full w-14 h-14 bg-alt"></div>
        <div className="flex-1 py-1 space-y-3">
          <div className="h-3 rounded-full bg-alt"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-3 col-span-2 rounded-full bg-alt"></div>
              <div className="h-3 col-span-1 rounded-full bg-alt"></div>
            </div>
            <div className="h-3 rounded-full bg-alt"></div>
          </div>
        </div>
      </div>
      <div className="h-12 rounded-md bg-alt"></div>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="h-20 rounded-md bg-alt"></div>
        <div className="h-20 rounded-md bg-alt"></div>
      </div>
      <div className="h-56 rounded-md bg-alt"></div>
    </div>
  );
}
