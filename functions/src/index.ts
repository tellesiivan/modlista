import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

export const createUserDoc = functions.auth.user().onCreate(async (user) => {
  const firestore = admin.firestore;

  const newUser = {
    uid: user.uid,
    ...(user.displayName && { name: user.displayName }),
    ...(user.photoURL && { avatarImg: user.photoURL }),
    email: user.email,
    createdAt: firestore.Timestamp.fromDate(new Date()),
  };

  db.collection("users").doc(user.uid).set(newUser);
});
