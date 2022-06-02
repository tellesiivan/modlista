import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";

export default function useNewUser(userID, userName, email, password) {
  const [isError, setIsError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const newUser = async () => {
    const userRef = doc(firestore, `users/${user.user.uid}`);
    try {
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        throw new Error("Someone already has this username.");
      } else if (error) {
        throw new Error("Unable to create user: " + email + error.message);
      }
      createUserWithEmailAndPassword(email, password);

      if (!loading && user) {
        const data = {
          userName: userName,

          timeStamp: serverTimestamp(),
        };
        await updateDoc(userRef, data);
      }
    } catch (error) {
      setIsError(error.message);
      console.log("new user Hook =>", error.message);
    }
  };

  return {
    newUser,
    loading,
    isError,
    setIsError,
  };
}
