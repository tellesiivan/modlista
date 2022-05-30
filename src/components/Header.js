import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import logo from "../public/tempLogo.png";
import { authModalStatus } from "../store/user/modalsSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center w-full px-3 bg-[#FFC532] border-b border-black h-14 justify-between font-mono">
      <Image src={logo} alt="logo" height="35" width="35" />
      <button
        className="px-6 py-2 text-sm text-white bg-black rounded-sm "
        onClick={() =>
          dispatch(authModalStatus({ open: true, from: "signup" }))
        }
      >
        Sign up
      </button>
    </header>
  );
}
