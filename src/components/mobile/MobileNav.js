import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Avatar from "../helpers/Avatar";

export default function MobileNav({}) {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed flex items-center px-2 space-x-2 transition -translate-x-1/2 border rounded-full shadow-xl h-11 bg-main border-alt md:hidden bottom-3 left-1/2">
      {user ? (
        <div className="flex items-center justify-center h-full w-72">
          <Avatar size="h-6 w-6" />
          <div className="grid flex-grow h-full grid-cols-3 text-xs font-semibold text-center text-gray-300 divide-x align-center divide-alt place-items-stretch">
            <p className="my-auto cursor-pointer">Profile</p>
            <p className="my-auto cursor-pointer">Menu</p>
            <p className="my-auto cursor-pointer">Home</p>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
}
