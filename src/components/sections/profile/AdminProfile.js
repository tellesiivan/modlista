import React, { useState } from "react";
import AdminHeading from "../../helpers/AdminHeading";
import NameInput from "./NameInput";
import { doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import ImageUploads from "./ImageUploads";
import { toggleMobileNav } from "../../../store/slices/modalsSlice";
import { useDispatch } from "react-redux";
import CheckSpecialChars from "../../../utils/CheckSpecialChars";

export default function AdminProfile() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    coverImg: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const userRef = doc(firestore, `users/${user.uid}`);

    if (CheckSpecialChars(values.name)) {
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
      <form onSubmit={onSubmit} className="-mt-2">
        <label className="text-xs text-dark" htmlFor="name">
          Name
        </label>
        <div className="flex items-center w-full h-12 px-2 mt-1.5 rounded-md bg-alt">
          <NameInput
            setValues={setValues}
            values={values}
            setError={setError}
            error={error}
          />
          {values.name.trim().length >= 3 && !error && (
            <button
              onClick={onSubmit}
              disabled={values.name.trim().length < 3 || error}
              className="w-20 h-10 -mr-1 text-xs text-center transition-opacity duration-500 border divide-x rounded-md opacity-100 text-dark hover:opacity-80 bg-ag-green disabled:opacity-0"
            >
              Update
            </button>
          )}
        </div>
      </form>
      {error && (
        <div className="px-2 py-3 mt-2 text-sm rounded-sm bg-alt ">{error}</div>
      )}
      <ImageUploads userId={user?.uid} />
    </>
  );
}
