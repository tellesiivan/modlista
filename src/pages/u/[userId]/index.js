import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminPanel from "../../../components/sections/userAdmin/AdminPanel";
import { auth } from "../../../firebase/clientApp";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const router = useRouter();
  const { userId } = router.query;
  const [user] = useAuthState(auth);
  const isValid = user?.uid === userId;
  const { user: currentUser } = useSelector((store) => store.userUI);

  return (
    <div className="flex flex-row w-full h-screen">
      {isValid && <AdminPanel currentUser={currentUser} />}

      <div className="flex-grow h-full"></div>
    </div>
  );
}
