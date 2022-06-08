import { auth } from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

export default function UserName() {
  const [user] = useAuthState(auth);

  return (
    <div className="text-sm text-gray-300">
      {user.displayName ? (
        <p>{user.displayName.split(" ")[0]}</p>
      ) : (
        <p>{user.email}</p>
      )}
    </div>
  );
}
