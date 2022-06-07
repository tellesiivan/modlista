import React, { useRef, useState } from "react";
import useSelectFile from "../../../Hooks/useSelectFile";
import Toggle from "../../helpers/Toggle";
import UploadPreview from "./UploadPreview";

export default function ImageUploads() {
  const uploadRef = useRef(null);
  const [uploadType, setUploadType] = useState("cover");
  const getValue = (toggleStatus) => {
    setUploadType(toggleStatus ? "profile" : "cover");
  };
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();

  return (
    <div className="mt-6 space-y-2.5">
      <div className="flex items-center justify-between ">
        <p className="text-xs text-gray-500">
          Update{" "}
          <span className="font-semibold text-gray-300">{uploadType}</span>{" "}
          image.
        </p>
        <Toggle getValue={getValue} />
      </div>
      <section className="relative w-full p-2 overflow-hidden rounded-lg h-96 bg-inputMain">
        {selectedFile ? (
          <UploadPreview src={selectedFile} type={uploadType} />
        ) : (
          <form className="flex items-center justify-center w-full h-full border border-gray-700 border-dashed rounded-lg">
            <button
              className="px-3 py-1 text-xs text-gray-300 rounded-full bg-selected"
              onClick={() => uploadRef.current?.click()}
              type="button"
            >
              Select Image
            </button>
            <input
              type="file"
              hidden
              ref={uploadRef}
              accept="image/*"
              onChange={onSelectedFile}
            />
          </form>
        )}

        <div
          className={`absolute grid w-48 grid-cols-2 py-2 text-xs text-white transform -translate-x-1/2 ${
            selectedFile ? "-translate-y-2" : "translate-y-[50px]"
          } divide-x rounded-md shadow-2xl bg-selected bottom-1 left-1/2 transition-transform `}
        >
          <button
            className="font-medium hover:text-white"
            onClick={() => setSelectedFile("")}
          >
            Delete
          </button>
          <button className="font-medium hover:text-white">Upload</button>
        </div>
      </section>
    </div>
  );
}
