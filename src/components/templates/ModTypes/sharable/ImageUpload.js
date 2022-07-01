/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { FiImage } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { inProgressMod } from "../../../../store/slices/modificationsSlice";

export default function ImageUpload({
  selectedFile,
  setSelectedFile,
  onSelectedFile,
  setImage,
}) {
  const addingMod = useSelector((store) => store.modifications.adding.details);
  const loading = useSelector((store) => store.modifications.uploading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedFile) {
      setImage((prev) => ({ ...prev, image: selectedFile }));
    }
  }, [selectedFile]);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor="imageUpload" className="text-xs text-dark">
          Modification Image
        </label>
        {(selectedFile || addingMod?.image) && !loading && (
          <p
            className="text-xs cursor-pointer text-dark hover:opacity-75"
            onClick={() => {
              setSelectedFile("");
              dispatch(inProgressMod({ mod: { ...addingMod, image: "" } }));
            }}
          >
            Delete
          </p>
        )}
      </div>
      <div
        className="flex items-center justify-center w-full rounded-md h-72 bg-main mt-1.5 overflow-hidden"
        id="imageUpload"
      >
        {/* selectedFile || data.coverImage */}
        {selectedFile || addingMod?.image ? (
          <>
            <img
              src={selectedFile || addingMod.image}
              alt=""
              className="object-cover w-full h-full"
            />
          </>
        ) : (
          <div className="relative w-full h-full overflow-hidden rounded-md ">
            <input
              accept="image/jpeg, image/png"
              type="file"
              className="absolute inset-0 z-10 rounded-md opacity-0 cursor-pointer "
              onChange={onSelectedFile}
            />
            <div className="absolute flex items-center justify-center text-gray-400 border rounded-md cursor-pointer inset-1">
              <FiImage className="" size="1.2em" />
              <b className="ml-2 text-xs font-normal">Add Image</b>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
