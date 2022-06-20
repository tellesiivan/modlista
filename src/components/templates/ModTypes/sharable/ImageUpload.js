import React from "react";

export default function ImageUpload({
  selectedFile,
  setSelectedFile,
  onSelectedFile,
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor="imageUpload" className="text-xs text-gray-600">
        Modification Image
      </label>
      <div
        className="flex items-center justify-center w-full rounded-md h-28 bg-main mt-1.5"
        id="imageUpload"
      ></div>
    </div>
  );
}
