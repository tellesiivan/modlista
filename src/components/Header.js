import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/clientApp";
import logo from "../../public/tempLogo.webp";
import { authModalStatus, toggleSidebar } from "../store/slices/modalsSlice";
import Link from "next/link";
import Avatar from "./helpers/Avatar";

export default function Header() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  return (
    <header className="hidden md:flex items-center w-full px-3 border-b border-[#070707]  h-16 justify-between bg-black bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 sticky top-0 z-20">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          height="30"
          width="50"
          className="cursor-pointer"
        />
      </Link>

      <div className="flex items-center h-full space-x-2">
        {user ? (
          <>
            <div
              className="flex items-center justify-between w-24 h-8 pl-2 pr-1 transition ease-in-out bg-black border border-gray-800 rounded-full cursor-pointer hover:bg-gray-800 group"
              onClick={() => dispatch(toggleSidebar({ open: true }))}
            >
              <p className="text-sm text-gray-500 group-hover:text-gray-300">
                Menu
              </p>
              <Avatar size={"h-6 w-6"} />
            </div>
          </>
        ) : (
          <>
            {" "}
            <button
              className="font-semibold outlineBtn"
              onClick={() =>
                dispatch(authModalStatus({ open: true, from: "login" }))
              }
            >
              Login
            </button>
            <button
              className="font-semibold text-white fillBtn"
              onClick={() =>
                dispatch(authModalStatus({ open: true, from: "signup" }))
              }
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </header>
  );
}
