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
    <header className="sticky top-0 z-20 items-center justify-between hidden w-full h-16 px-3 bg-inputMain bg-opacity-40 md:flex backdrop-blur backdrop-filter firefox:bg-opacity-90">
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
              className="flex items-center justify-between w-24 h-8 pl-2 pr-1 transition ease-in-out rounded-full cursor-pointer bg-highlight hover:bg-opacity-80"
              onClick={() => dispatch(toggleSidebar({ open: true }))}
            >
              <p className="text-sm text-main group-hover:text-gray-300">
                Menu
              </p>
              <Avatar size={"h-6 w-6"} />
            </div>
          </>
        ) : (
          <>
            {" "}
            <button
              className="font-semibold text-main bg-highlight fillBtn"
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
