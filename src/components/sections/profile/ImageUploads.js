import React, { useRef, useState } from "react";
import useSelectFile from "../../../Hooks/useSelectFile";
import Toggle from "../../helpers/Toggle";

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
      <section className="relative w-full p-2 rounded-lg h-96 bg-inputMain">
        {selectedFile ? (
          uploadType === "cover" ? (
            <p></p>
          ) : (
            <p></p>
          )
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
      </section>
    </div>
  );
}
