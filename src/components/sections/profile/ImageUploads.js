import React, { useRef, useState } from "react";
import useSelectFile from "../../../Hooks/useSelectFile";
import Toggle from "../../helpers/Toggle";
import UploadPreview from "./UploadPreview";
import { Loading } from "@nextui-org/react";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "../../../firebase/clientApp";
import { doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../../store/slices/modalsSlice";

export default function ImageUploads({ userId }) {
  const dispatch = useDispatch();
  const uploadRef = useRef(null);
  const [uploadType, setUploadType] = useState("cover");
  const getValue = (toggleStatus) => {
    setUploadType(toggleStatus ? "profile" : "cover");
  };
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    setUploading(true);
    // user doc reference (Update)
    const userRef = doc(firestore, `users/${userId}`);
    // storage reference
    const imageRef = ref(storage, `users/${userId}/${uploadType}`);
    try {
      if (!selectedFile) {
        throw new Error("No selected file");
      }
      //  added to strorage then get DOWNLOAD URL to update the post in DB
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadedUrl = await getDownloadURL(imageRef);
      // match DB naming convention | profile -> avatarImg
      const uploadName = uploadType === "profile" ? "avatarImg" : "coverImg";
      // update user doc with image URL
      await updateDoc(userRef, {
        [uploadName]: downloadedUrl,
      });
    } catch (error) {
      console.log(error.message, "uploadImage");
      setUploading(false);
    }
    setUploading(false);
    setSelectedFile("");
    dispatch(toggleMobileNav({ open: false }));
  };

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
          <form
            className="flex items-center justify-center w-full h-full border border-gray-700 border-dashed rounded-lg"
            onSubmit={uploadImage}
          >
            <button
              className="px-4 py-1 text-gray-300 rounded-full md:px-4 md:py-2 md:text-xs bg-selected hover:opacity-80"
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
          className={`absolute px-4 flex items-center justify-center py-2 text-xs text-white transform -translate-x-1/2 ${
            selectedFile ? "-translate-y-2" : "translate-y-[50px]"
          } divide-x rounded-full shadow-2xl bg-selected bottom-1 left-1/2 transition duration-700`}
        >
          {uploading ? (
            <Loading
              type="points-opacity"
              size="sm"
              color="white"
              className="w-16 h-4"
            />
          ) : (
            <div className="grid w-32 grid-cols-2 divide-x">
              <button
                className="font-medium hover:text-white"
                onClick={() => setSelectedFile("")}
              >
                Discard
              </button>
              <button
                className="font-medium hover:text-white"
                type="submit"
                onClick={uploadImage}
              >
                Upload
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
