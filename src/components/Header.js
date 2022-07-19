import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/clientApp";
import logo from "../../public/logo-white.png";
import { authModalStatus, toggleSidebar } from "../store/slices/modalsSlice";
import Link from "next/link";
import Avatar from "./helpers/Avatar";

export default function Header() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-40 items-center justify-between hidden w-full h-16 px-4 bg-opacity-50 border-b bg-alt md:flex border-greyDark backdrop-filter backdrop-blur-lg">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          height="26"
          width="26"
          className="cursor-pointer"
        />
      </Link>

      <div className="flex items-center h-full space-x-2">
        {user ? (
          <>
            <div
              className="flex items-center justify-between w-24 h-8 pl-2 pr-1 transition ease-in-out rounded-full cursor-pointer bg-ag-yellow hover:bg-opacity-80 "
              onClick={() => dispatch(toggleSidebar({ open: true }))}
            >
              <p className="text-xs font-semibold text-main group-hover:text-gray-300">
                Menu
              </p>
              <Avatar size={"h-6 w-6"} />
            </div>
          </>
        ) : (
          <>
            <button
              className="font-semibold text-main bg-ag-yellow fillBtn"
              onClick={() =>
                dispatch(authModalStatus({ open: true, from: "login" }))
              }
            >
              Login
            </button>
            <button
              className="font-semibold text-white fillBtn bg-darkAlt"
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
