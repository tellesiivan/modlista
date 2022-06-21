/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiImage } from "react-icons/fi";

export default function ImageUpload({
  selectedFile,
  setSelectedFile,
  onSelectedFile,
  loading,
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor="imageUpload" className="text-xs text-gray-600">
          Modification Image
        </label>
        {selectedFile && !loading && (
          <p
            className="text-xs text-gray-500 cursor-pointer hover:opacity-75"
            onClick={() => {
              setSelectedFile("");
            }}
          >
            Delete
          </p>
        )}
      </div>
      <div
        className="flex items-center justify-center w-full rounded-md h-60 bg-main mt-1.5 overflow-hidden"
        id="imageUpload"
      >
        {/* selectedFile || data.coverImage */}
        {selectedFile ? (
          <>
            <img
              src={selectedFile}
              alt=""
              className="object-cover w-full h-full"
            />
          </>
        ) : (
          <div className="relative w-full h-full overflow-hidden rounded-md ">
            <input
              accept="image/*"
              type="file"
              className="absolute inset-0 z-10 rounded-md opacity-0 cursor-pointer "
              capture="environment"
              onChange={onSelectedFile}
            />
            <div className="absolute flex items-center justify-center text-gray-600 border border-gray-600 border-dashed rounded-md cursor-pointer inset-1">
              <FiImage className="" size="1.2em" />
              <b className="ml-2 text-xs font-normal">Add Image</b>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
