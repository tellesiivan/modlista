/* eslint-disable @next/next/no-img-element */
import { FiImage } from "react-icons/fi";
import React, { useRef, useState } from "react";

export default function VehicleCoverImage({
  selectedFile,
  setSelectedFile,
  onSelectedFile,
}) {
  const uploadRef = useRef(null);
  return (
    <div
      className={`relative flex items-center justify-center w-full h-40 mb-8 overflow-hidden border rounded-md bg-inputMain border-alt`}
    >
      {selectedFile ? (
        <>
          <img
            src={selectedFile}
            alt=""
            className="object-cover w-full h-full"
          />
          <button
            className="absolute px-3 py-1 text-xs bg-white rounded-full opacity-50 text-main top-1 right-1 hover:opacity-70"
            onClick={() => setSelectedFile("")}
          >
            Discard
          </button>
        </>
      ) : (
        <div
          className="flex flex-col items-center justify-center w-full h-full text-center text-gray-500 transition-opacity duration-500 cursor-pointer hover:opacity-70"
          onClick={() => uploadRef.current?.click()}
        >
          <FiImage className="" size="1.4em" />
          <b className="my-2 text-xs font-normal">Add a cover image</b>
          <input
            type="file"
            hidden
            ref={uploadRef}
            accept="image/*"
            onChange={onSelectedFile}
          />
        </div>
      )}
    </div>
  );
}
