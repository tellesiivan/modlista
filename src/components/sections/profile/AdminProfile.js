import React, { useState } from "react";
import AdminHeading from "../../helpers/AdminHeading";
import NameInput from "./NameInput";
import { doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import ImageUploads from "./ImageUploads";
import { toggleMobileNav } from "../../../store/slices/modalsSlice";
import { useDispatch } from "react-redux";
import AlertMessage from "../../helpers/AlertMessage";

export default function AdminProfile() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    coverImg: "",
  });
  const [error, setError] = useState("");

  const containsSpecialChars = (str) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const userRef = doc(firestore, `users/${user.uid}`);

    if (containsSpecialChars(values.name)) {
      setError("Special characters not allowed");
      return;
    }
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
        <div className="flex items-center w-full h-10 px-2 mt-1.5 rounded-md bg-alt">
          <NameInput
            setValues={setValues}
            values={values}
            setError={setError}
            error={error}
          />
        </div>
      </form>
      {error && (
        <div className="p-2 mt-2 text-sm rounded-sm bg-alt text-selected ">
          {error}
        </div>
      )}
      <ImageUploads userId={user?.uid} />
      {values.name.trim().length >= 3 && !error && (
        <div className="sticky w-full bottom-2">
          <button
            onClick={onSubmit}
            disabled={values.name.trim().length < 3 || error}
            className="w-full py-2 text-sm text-center text-gray-200 transition-opacity duration-500 border divide-x rounded-md opacity-100 sm:py-3 hover:opacity-80 bg-selected divide-inputMain border-inputMain disabled:opacity-0"
          >
            Update
          </button>
        </div>
      )}
    </>
  );
}
