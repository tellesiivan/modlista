import React, { useState } from "react";
import AdminHeading from "../../helpers/AdminHeading";
import NameInput from "./NameInput";
import { doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import ImageUploads from "./ImageUploads";
import { toggleMobileNav } from "../../../store/slices/modalsSlice";
import { useDispatch } from "react-redux";

export default function AdminProfile() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    coverImg: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const userRef = doc(firestore, `users/${user.uid}`);
    try {
      // update user' name
      await updateDoc(userRef, {
        name: values.name,
      });
    } catch (error) {
      console.log("onSubmit | AdminProfile", error.message);
    }
    setValues((prev) => ({
      ...prev,
      name: "",
    }));
    dispatch(toggleMobileNav({ open: false }));
  };
  6;

  return (
    <>
      <AdminHeading
        Heading="Profile"
        Desc="Here you can update your name, cover and profile image."
      />
      <form onSubmit={onSubmit}>
        <label className="text-xs text-gray-500" htmlFor="name">
          Name
        </label>
        <div className="flex items-center w-full h-10 px-2 mt-1.5 rounded-md bg-inputMain">
          <NameInput setValues={setValues} values={values} />
          <button
            type="submit"
            className="px-3 py-1 text-xs text-gray-200 transition-opacity duration-500 rounded-full opacity-100 bg-selected disabled:opacity-0"
            disabled={values.name.trim().length < 3}
          >
            Update
          </button>
        </div>
      </form>
      <ImageUploads userId={user?.uid} />
    </>
  );
}
