import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/clientApp";

export default function Avatar({ size }) {
  const [user] = useAuthState(auth);
  const currentUser = useSelector((state) => state.userUI.user);
  const avatarAlt = user.email.charAt(0).toUpperCase();

  return (
    <div className="cursor-pointer">
      {user?.photoURL || currentUser?.avatarImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={`rounded-full ${size ? size : "w-9 h-9"}`}
          src={currentUser?.avatarImg || user.photoURL}
          alt={`${user.displayName || ""} avatar`}
        />
      ) : (
        <div
          className={` flex items-center justify-center font-semibold text-white rounded-full cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
            size ? size : "w-9 h-9 "
          }`}
        >
          {avatarAlt}
        </div>
      )}
    </div>
  );
}
