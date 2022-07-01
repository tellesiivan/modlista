/* eslint-disable @next/next/no-img-element */
import { FiImage } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addingVehicle } from "../../../../store/slices/uiSlice";

export default function VehicleCoverImage({
  selectedFile,
  setSelectedFile,
  onSelectedFile,
  data,
  loading,
}) {
  const dispatch = useDispatch();
  const uploadRef = useRef(null);

  useEffect(() => {
    if (selectedFile) {
      dispatch(
        addingVehicle({
          vehicle: {
            ...data,
            coverImage: selectedFile,
          },
        })
      );
    }
  }, [selectedFile]);

  return (
    <div
      className={`relative flex items-center justify-center w-full h-40 my-3 overflow-hidden border rounded-md bg-alt border-greyDark`}
    >
      {selectedFile || data.coverImage ? (
        <>
          <img
            src={selectedFile || data.coverImage}
            alt=""
            className="object-cover w-full h-full"
          />
          {!loading && (
            <button
              className="absolute px-3 py-1 text-xs rounded-full bg-opacity-60 bg-dark text-main top-1 right-1 hover:bg-opacity-80"
              onClick={(e) => {
                e.preventDefault();
                setSelectedFile("");
                dispatch(
                  addingVehicle({
                    vehicle: {
                      ...data,
                      coverImage: null,
                    },
                  })
                );
              }}
            >
              Discard
            </button>
          )}
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
