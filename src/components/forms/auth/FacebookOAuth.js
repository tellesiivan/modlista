import { FaFacebook } from "react-icons/fa";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { authModalStatus } from "../../../store/slices/modalsSlice";

export default function FacebookOAuth({ from }) {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleFacebookOAuth = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.log("handleGoogleOAuth", error.message);
    }
    if (!loading) {
      dispatch(authModalStatus({ open: false, from: "login" }));
      console.log(user);
    }
  };

  return (
    <button
      className="flex items-center justify-center w-full p-3 bg-gray-200 rounded-lg"
      onClick={handleFacebookOAuth}
    >
      {loading ? (
        <ClipLoader size="22px" />
      ) : (
        <>
          <FaFacebook className="mr-3" />{" "}
          <p className="text-sm font-semibold text-main">
            {from === "login"
              ? "Continue with Facebook"
              : "Signup with Facebook"}
          </p>
        </>
      )}
    </button>
  );
}
