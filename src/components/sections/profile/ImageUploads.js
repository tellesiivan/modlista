import React, { useRef, useState } from "react";
import { FiImage } from "react-icons/fi";
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
      //  add to strorage then get DOWNLOAD URL to update the post in DB
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
        <p className="text-xs text-textGray">
          Update <span className="font-bold text-ag-green">{uploadType}</span>{" "}
          image.
        </p>
        <Toggle getValue={getValue} />
      </div>
      <section className="relative w-full p-2 overflow-hidden rounded-lg h-96 bg-alt">
        {selectedFile ? (
          <UploadPreview src={selectedFile} type={uploadType} />
        ) : (
          <form
            className="flex items-center justify-center w-full h-full border border-dashed rounded-lg border-inputMain"
            onSubmit={uploadImage}
          >
            <button
              className="flex flex-col items-center justify-center w-full h-full px-3 py-1 text-xs text-textGray hover:opacity-60 "
              onClick={() => uploadRef.current?.click()}
              type="button"
            >
              <FiImage className="" size="1.4em" />
              <b className="my-2 text-xs font-normal">Select Image</b>
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
          className={`absolute px-4 flex items-center justify-center py-2 text-xs text-main transform -translate-x-1/2 ${
            selectedFile ? "-translate-y-2" : "translate-y-[50px]"
          } divide-x rounded-full shadow-2xl bg-ag-green bottom-1 left-1/2 transition duration-700`}
        >
          {uploading ? (
            <Loading
              type="points-opacity"
              size="sm"
              color="white"
              className="w-16 h-4"
            />
          ) : (
            <div className="grid w-32 grid-cols-2 divide-x text-main divide-inputMain">
              <button
                className="font-medium "
                onClick={() => setSelectedFile("")}
              >
                Discard
              </button>
              <button
                className="font-medium cursor-pointer "
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
