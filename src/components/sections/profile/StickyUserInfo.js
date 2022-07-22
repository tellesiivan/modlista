import CustomAvatar from "../../helpers/CustomAvatar";
import { useSelector } from "react-redux";
import { ArrowNarrowUpIcon } from "@heroicons/react/outline";
export default function StickyUserInfo({ user, isValid }) {
  const showStickyInfo = useSelector(
    (store) => store.profileUI.showStickyUserInfo
  );

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div
      className={`sticky top-0 z-50 duration-300 ease-in-out ${
        isValid ? "w-full sm:w-3/4 " : "w-full"
      } h-14 sm:h-16 flex px-2 items-center justify-between bg-alt sm:bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-50 sm:backdrop-blur-none sm:bg-opacity-0 ${
        showStickyInfo ? "translate-y-0" : "-translate-y-[300%]"
      }`}
    >
      <div className="flex items-center">
        <CustomAvatar
          src={user?.avatarImg}
          size={{ width: "10", height: "10" }}
        />
        <h1 className="ml-2 font-medium text-white text-md">
          {user?.name ? user.name : user.email}
        </h1>
      </div>
      <div
        className="flex items-center text-xs cursor-pointer text-inputGray hover:opacity-80 whitespace-nowrap"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <p className="mr-1.5">Scroll to Top</p>
        <ArrowNarrowUpIcon className="text-[0.9em]" width="16px" />
      </div>
    </div>
  );
}
