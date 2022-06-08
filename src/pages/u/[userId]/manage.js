import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { firestore } from "../../../firebase/clientApp";
import { auth } from "../../../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";

export default function Manage() {
  const [user] = useAuthState(auth);
  const currentUser = useSelector((store) => store.userUI.user);
  const router = useRouter();
  const { userId } = router.query;

  console.log(userId);

  useEffect(() => {
    if (userId !== user?.uid) {
      router.replace("/");
      return;
    }
  }, [user]);

  return <div className="text-white">manage page</div>;
}

// export const getServerSideProps = async (ctx) => {
//   const { userId } = ctx.query;

//   try {
//     const docRef = doc(firestore, `users/${userId}`);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//     return {
//       props: {
//         message: `Your email is ${docSnap.data().email} and your UID is ${
//           docSnap.data().uid
//         }.`,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       redirect: {
//         destination: "/hello-nextjs",
//         permanent: false,
//       },
//     };
//   }
// };
