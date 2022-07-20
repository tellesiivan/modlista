import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import moment from "moment";
import { HomeIcon, CalendarIcon } from "@heroicons/react/outline";
import placeholdeImge from "../../../../public/blurPlaceholder.png";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../../store/slices/modalsSlice";

export default function HeaderSection({ profileUser, isValid }) {
  const { name, email, createdAt, coverImg, avatarImg, vehiclesOwn, location } =
    profileUser;
  const dispatch = useDispatch();

  return (
    <div
      className={` ${
        vehiclesOwn === 0 && "border-b border-greyDark pb-2"
      } pb-4 `}
    >
      <div className="relative h-[125px] md:h-[200px] ">
        <div className="absolute inset-0 z-10 w-full h-full " />
        {coverImg ? (
          <Image
            onLoadingComplete={() => console.log("complete")}
            src={coverImg}
            alt="banner image"
            className="w-full h-full "
            layout="fill"
            placeholder="blur"
            blurDataURL={placeholdeImge}
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-ag-green "></div>
        )}
        <div className="absolute z-20 flex items-center border-[5px] rounded-full left-2 -bottom-14 md:left-4 border-main">
          {avatarImg ? (
            <Avatar
              src={avatarImg}
              css={{ size: "$24" }}
              zoomed
              borderWeight="0px"
              color="white"
            />
          ) : (
            <Avatar
              text={email.charAt(0).toUpperCase()}
              color="gradient"
              textColor="white"
              css={{ size: "$24" }}
            />
          )}
        </div>
      </div>
      {isValid && (
        <div className="flex justify-end mt-2 mr-4 md:hidden">
          <button
            className="px-3 py-1 ml-auto text-xs font-semibold border rounded-full text-textGray border-inputMain w-fit hover:opacity-80"
            onClick={() => dispatch(toggleMobileNav({ open: true }))}
          >
            Edit Profile
          </button>
        </div>
      )}

      <div
        className={`${
          !isValid ? "mt-16" : "mt-10 md:mt-16"
        } mx-4  md:mx-6  flex justify-between items-center`}
      >
        <div>
          <div className="flex items-center font-bold tracking-tighter text-white">
            <h1 className="text-2xl ">{name ? name : email} </h1>
            {/* {vehiclesOwn > 0 && (
              <div className="flex items-center justify-center w-6 h-6 ml-1 text-xs rounded-full bg-ag-green text-main">
                {vehiclesOwn}
              </div>
            )} */}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-1">
            <div className="inline-flex items-end text-xs text-inputGray">
              <CalendarIcon
                className="-ml-0.5 mr-1 h-4 w-4"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap">
                Joined {moment(new Date(createdAt)).format("MMMM YYYY")}
              </span>
            </div>
            {/* List user website link && favorite shop */}
            {location && (
              <div className="inline-flex items-end text-xs text-inputGray">
                <HomeIcon className="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
                <span className="whitespace-nowrap">
                  {location.city}, {location.stateAbbr}
                </span>
              </div>
            )}
          </div>
        </div>
        <div>Share</div>
      </div>
    </div>
  );
}
