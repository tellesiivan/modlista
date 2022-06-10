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
    <div
      className="fixed flex items-center px-2 space-x-2 transition -translate-x-1/2 border rounded-full shadow-xl cursor-pointer h-11 bg-main border-alt md:hidden bottom-3 left-1/2"
      onClick={() =>
        isValid
          ? dispatch(toggleMobileNav({ open: true }))
          : dispatch(authModalStatus({ open: true, from: "login" }))
      }
    >
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
        <button className="h-full text-sm font-semibold text-gray-200">
          Edit Profile
        </button>
      ) : (
        <button className="h-full text-sm font-semibold text-gray-200">
          Signup / Login
        </button>
      )}
    </div>
  );
}
