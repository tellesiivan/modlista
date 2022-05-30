import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import logo from "../public/tempLogo.png";
import { authModalStatus } from "../store/user/modalsSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center w-full pl-3 bg-[#ffff6d] border-b border-black h-12 justify-between ">
      <div>
        <Image src={logo} alt="logo" height="35" width="35" />
      </div>

      <div className="flex items-center h-full text-xs border-l border-black">
        <button
          className="h-full px-5 font-semibold"
          onClick={() =>
            dispatch(authModalStatus({ open: true, from: "login" }))
          }
        >
          Login
        </button>
        <button
          className="h-full px-5 font-semibold text-white bg-black"
          onClick={() =>
            dispatch(authModalStatus({ open: true, from: "signup" }))
          }
        >
          Sign up
        </button>
      </div>
    </header>
  );
}
