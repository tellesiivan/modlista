import { BsPencil } from "react-icons/bs";
import React, { useRef, useState } from "react";
import Image from "next/image";

export default function ImageUpload({ onSelectedFile, selectedFile }) {
  const uploadRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden rounded-md h-44 bg-darkAlt">
      {selectedFile ? (
        <>
          <Image
            className="w-full h-full"
            layout="fill"
            objectFit="fill"
            objectPosition="center"
            src={selectedFile}
          />
          <button
            className="absolute flex items-center justify-center w-8 h-8 transition-all rounded-full hover:scale-110 bg-black/20 bottom-2 right-2"
            onClick={() => uploadRef.current?.click()}
          >
            <BsPencil
              className=" text-inputGray"
              size="0.85em"
              aria-hidden="true"
            />
          </button>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full transition-colors duration-200 hover:cursor-pointer hover:bg-black/10">
          <h2
            className="text-xs text-textGray"
            onClick={() => uploadRef.current?.click()}
          >
            Choose a file or Drag and Drop
          </h2>
        </div>
      )}
      <input
        type="file"
        hidden
        ref={uploadRef}
        accept="image/*"
        onChange={onSelectedFile}
      />
    </div>
  );
}
