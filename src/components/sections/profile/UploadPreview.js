/* eslint-disable @next/next/no-img-element */
import React from "react";
import Avatar from "../../helpers/Avatar";

export default function UploadPreview({ type, src }) {
  return (
    <div className="mt-2 space-y-3">
      <div className="relative overflow-hidden rounded-md h-36 bg-main">
        {type === "cover" ? (
          <img src={src} alt="" className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full bg-selected animate-pulse"></div>
        )}
        {type === "profile" ? (
          <img
            src={src}
            alt=""
            className="absolute w-14 h-14 rounded-full bottom-2.5 left-2 z-10 object-cover"
          />
        ) : (
          <div className="absolute w-14 h-14 rounded-full bottom-2.5 left-2 z-10 border-2 border-alt overflow-hidden flex items-center justify-center">
            <Avatar size="w-13 h-13" />
          </div>
        )}
      </div>
      <div className="flex space-x-4 animate-pulse">
        <div className="flex-1 py-1 space-y-6">
          <div className="h-3 rounded bg-main"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 col-span-2 rounded bg-main"></div>
              <div className="h-2 col-span-1 rounded bg-main"></div>
            </div>
            <div className="h-2 rounded bg-main"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
