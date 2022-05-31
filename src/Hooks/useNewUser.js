import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function useNewUser(userName, email, password) {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const newUser = async () => {
    console.log("new user function called");
    const userRef = doc(firestore, `users/${userName}`);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        throw new Error("Username already exists");
      }

      await createUserWithEmailAndPassword(email, password);
      await setDoc(userRef, {
        userName: userName,
        uid: user.user.uid,
        email,
      });
    } catch (error) {
      console.log("new user Hook", error.message);
    }
  };

  return {
    newUser,
    loading,
    error,
  };
}
