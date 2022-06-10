import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/uiSlice";
import Avatar from "../helpers/Avatar";
import { RiHome2Line, RiMenu4Fill, RiHome2Fill } from "react-icons/ri";

export default function MobileNav({}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user] = useAuthState(auth);

  const Logout = async () => {
    await signOut(auth);
    dispatch(
      addUser({
        user: null,
      })
    );
  };

  return (
    <div className="fixed bottom-0 grid content-center w-full grid-cols-3 text-xs text-center text-gray-300 transition -translate-x-1/2 border-t shadow-xl h-14 bg-main md:hidden left-1/2 place-content-center border-alt">
      {user ? (
        <>
          <div
            className="flex items-center justify-center"
            onClick={() => router.push(`/u/${user.uid}`)}
          >
            <Avatar size="h-7 w-7" />
          </div>
        </>
      ) : (
        <>
          <button className="h-full font-bold cursor-pointer">Sign In</button>
        </>
      )}

      <button
        className="mx-auto font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        {router.asPath == "/" ? (
          <RiHome2Fill size="1.9em" />
        ) : (
          <RiHome2Line size="1.9em" />
        )}
      </button>
      <button className="mx-auto font-bold cursor-pointer">
        <RiMenu4Fill size="1.8em" />
      </button>
    </div>
  );
}
