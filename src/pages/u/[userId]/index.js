import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminPanel from "../../../components/sections/userAdmin/AdminPanel";
import { auth } from "../../../firebase/clientApp";
import { useSelector } from "react-redux";
import HeaderImage from "../../../components/sections/HeaderImage";
import HeaderSection from "../../../components/sections/profile/HeaderSection";

export default function UserProfile() {
  const router = useRouter();
  const { userId } = router.query;
  const [user] = useAuthState(auth);
  const isValid = user?.uid === userId;
  const { user: currentUser } = useSelector((store) => store.userUI);

  return (
    <div className="flex flex-row w-full h-full">
      {isValid && <AdminPanel currentUser={currentUser} />}
      {currentUser && (
        <div className="flex-grow h-full md:ml-96">
          <HeaderSection currentUser={currentUser} />
        </div>
      )}
    </div>
  );
}
