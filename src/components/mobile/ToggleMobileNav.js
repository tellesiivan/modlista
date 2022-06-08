import { Avatar } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import {
  toggleMobileNav,
  authModalStatus,
} from "../../store/slices/modalsSlice";

export default function ToggleMobileNav({ profileUser, isValid }) {
  const { email, avatarImg } = profileUser;

  const dispatch = useDispatch();

  return (
    <div className="fixed flex items-center px-2 space-x-2 transition -translate-x-1/2 border rounded-full shadow-xl h-11 bg-main border-alt md:hidden bottom-3 left-1/2">
      {avatarImg ? (
        <Avatar src={avatarImg} size="sm" zoomed />
      ) : (
        <Avatar
          text={email.charAt(0).toUpperCase()}
          color="gradient"
          textColor="white"
          size="sm"
        />
      )}
      {isValid ? (
        <button
          className="h-full text-sm font-semibold text-gray-200"
          onClick={() => dispatch(toggleMobileNav())}
        >
          Edit Profile
        </button>
      ) : (
        <button
          className="h-full text-sm font-semibold text-gray-200"
          onClick={() =>
            dispatch(authModalStatus({ open: true, from: "login" }))
          }
        >
          Signup / Login
        </button>
      )}
    </div>
  );
}
