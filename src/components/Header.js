import Image from "next/image";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { auth, firestore } from "../firebase/clientApp";
import logo from "../public/tempLogo.png";
import { authModalStatus } from "../store/user/modalsSlice";
import { addUser } from "../store/user/uiSlice";
import { useRouter } from "next/router";
import Avatar from "./helpers/Avatar";

export default function Header() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();

  const logout = () => {
    signOut(auth);
    router.replace("/home");
    dispatch(
      addUser({
        user: null,
      })
    );
  };

  useEffect(() => {
    if (user?.email) {
      const getUser = async () => {
        try {
          const docRef = doc(firestore, `users/${user.uid}`);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            dispatch(
              addUser({
                user: docSnap.data(),
              })
            );
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch (error) {
          console.log("getUser", error.message);
        }
      };
      getUser();
    }
  }, [user?.email]);

  return (
    <header className="flex items-center w-full px-3 bg-[#090909]  h-14 justify-between ">
      <div>
        <Image src={logo} alt="logo" height="35" width="35" />
      </div>

      <div className="flex items-center h-full space-x-2">
        {user ? (
          <>
            <button
              className="font-semibold text-black outlineBtn"
              onClick={logout}
            >
              Logout
            </button>
            <Avatar />
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
