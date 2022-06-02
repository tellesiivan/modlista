import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { addUser } from "../store/user/uiSlice";
import { authModalStatus } from "../store/user/modalsSlice";
import { useRouter } from "next/router";

import { firestore, auth } from "../firebase/clientApp";

export default function useLoginUser(email, password) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginUser = async () => {
    const docRef = doc(firestore, `users/${email}`);

    try {
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("Email or password not found.");
      } else if (error) {
        throw new Error("Unable to login: " + email + error.message);
      }

      await signInWithEmailAndPassword(email, password);

      dispatch(
        addUser({
          user: docSnap.data(),
        })
      );
      dispatch(authModalStatus({ open: false, from: "login" }));

      const userName = docSnap.data().userName;

      router.replace(`/${userName}`);
    } catch (error) {
      console.error("loginUser =>", error.message);
      setIsError(error.message);
    }
  };

  return { loginUser, isError, setIsError, loading };
}
