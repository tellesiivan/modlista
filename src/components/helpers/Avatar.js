import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

export default function Avatar() {
  const [user] = useAuthState(auth);

  console.log(user.photoURL);

  return (
    <>
      {user?.photoURL ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="w-10 h-10 rounded-full border-[#b5b5b5] border-2 "
          src={user.photoURL}
          alt={`${user.displayName} avatar`}
        />
      ) : (
        <div className="flex items-center justify-center w-10 h-10 font-semibold text-white bg-black rounded-full cursor-pointer border-2 border-[#5e5e5e]">
          W
        </div>
      )}
    </>
  );
}
