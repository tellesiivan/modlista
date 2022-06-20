import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import moment from "moment";
import { MdOutlineCalendarToday } from "react-icons/md";
import placeholdeImge from "../../../../public/blurPlaceholder.png";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../../store/slices/modalsSlice";

export default function HeaderSection({ profileUser, isValid }) {
  const { name, email, createdAt, coverImg, avatarImg, vehiclesOwn } =
    profileUser;
  const dispatch = useDispatch();

  return (
    <div className="pb-4 border-b border-alt">
      <div className="relative h-[125px] md:h-[200px]  ">
        <div className="absolute inset-0 z-10 w-full h-full " />
        {coverImg ? (
          <Image
            onLoadingComplete={() => console.log("complete")}
            src={coverImg}
            alt="banner image"
            layout="fill"
            placeholder="blur"
            blurDataURL={placeholdeImge}
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-alt to-highlight "></div>
        )}
        <div className="absolute z-20 flex items-center border-[5px] rounded-full left-4 -bottom-16 md:left-6 border-main">
          {avatarImg ? (
            <Avatar src={avatarImg} css={{ size: "$20" }} zoomed />
          ) : (
            <Avatar
              text={email.charAt(0).toUpperCase()}
              color="gradient"
              textColor="white"
              css={{ size: "$20" }}
            />
          )}
        </div>
      </div>
      {isValid && (
        <div className="flex justify-end mt-2 mr-4 md:hidden">
          <button
            className="px-3 py-1 ml-auto text-xs font-semibold text-gray-400 border border-gray-700 rounded-full w-fit hover:opacity-80"
            onClick={() => dispatch(toggleMobileNav({ open: true }))}
          >
            Edit Profile
          </button>
        </div>
      )}

      <div
        className={`${
          !isValid ? "mt-20" : "mt-12"
        } mx-6  md:mx-8 md:mt-20 flex justify-between items-center`}
      >
        <div className="">
          <h2 className="flex items-center text-lg font-semibold tracking-wide text-gray-200 md:text-xl">
            {name ? name : email}{" "}
            {vehiclesOwn && (
              <div className="flex items-center justify-center w-5 h-5 ml-1 text-[9.5px] bg-gradient-to-r from-selected to-highlight rounded-full text-main">
                {vehiclesOwn}
              </div>
            )}
          </h2>
          <p className="-mt-0.25 text-xs text-gray-400 flex items-center space-x-1 ">
            <MdOutlineCalendarToday className="mr-1" />
            <span>
              Joined {moment(new Date(createdAt)).format("MMMM YYYY")}
            </span>
          </p>
        </div>
        <div>Links</div>
      </div>
    </div>
  );
}
