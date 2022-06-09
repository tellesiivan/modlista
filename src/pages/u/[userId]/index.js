import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminPanel from "../../../components/sections/userAdmin/AdminPanel";
import { auth } from "../../../firebase/clientApp";
import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../firebase/clientApp";
import HeaderSection from "../../../components/sections/profile/HeaderSection";
import ToggleMobileNav from "../../../components/mobile/ToggleMobileNav";
import ProfileMobileNav from "../../../components/mobile/ProfileMobileNav";

export default function UserProfile({ userData }) {
  const router = useRouter();
  const [profileUser, setProfileUser] = useState(null);
  const { userId } = router.query;
  const [user] = useAuthState(auth);
  const isValid = user?.uid === userId;

  // profile changes from DB
  useEffect(() => {
    onSnapshot(doc(firestore, `users/${userData.uid}`), (doc) => {
      const userData = {
        ...doc.data(),
        createdAt: new Date(
          doc.data()?.createdAt.seconds * 1000
        ).toLocaleString("en-US"),
      };
      setProfileUser(userData);
    });
  }, [userId, userData.uid]);

  return (
    <>
      <div className="flex flex-row w-full h-full">
        {isValid && <AdminPanel profileUser={profileUser} />}
        {profileUser && (
          <div className={`flex-grow h-full ${isValid && "md:ml-96"}`}>
            <HeaderSection profileUser={profileUser} />
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { userId } = ctx.query;

  try {
    const docRef = doc(firestore, `users/${userId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = {
        ...docSnap.data(),
        createdAt: new Date(
          docSnap.data()?.createdAt.seconds * 1000
        ).toLocaleString("en-US"),
      };
      console.log(docSnap.data());
      return {
        props: {
          userData,
        },
      };
    } else {
      throw new Error("user not found");
    }
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/nf",
        permanent: false,
      },
    };
  }
};
