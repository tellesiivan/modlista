import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import moment from "moment";
import { BiRocket } from "react-icons/bi";

import { RiMapPin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../../../store/slices/modalsSlice";
import { useRef } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { triggerStickyUserInfo } from "../../../../store/slices/profileSlice";
import SocialLinks from "../links/SocialLinks";

const pathBlur = "/public/blurPlaceholder.png";
export default function HeaderSection({ profileUser, isValid }) {
  const stickyInfoRef = useRef();
  const {
    name,
    email,
    createdAt,
    coverImg,
    avatarImg,
    vehiclesOwn,
    location,
    links,
  } = profileUser;
  const dispatch = useDispatch();

  useScrollPosition(
    ({ currPos }) => {
      currPos.y <= 0
        ? dispatch(triggerStickyUserInfo({ show: true }))
        : dispatch(triggerStickyUserInfo({ show: false }));
    },
    [],
    stickyInfoRef
  );

  return (
    <div
      className={` ${
        (vehiclesOwn === 0 || !vehiclesOwn) && "border-b border-greyDark pb-2"
      } pb-4 overflow-hidden`}
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
            blurDataURL={pathBlur}
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-ag-green to-ag-yellow"></div>
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
            className="px-3 py-1 ml-auto text-xs font-semibold bg-white rounded-full text-alt w-fit hover:opacity-80"
            onClick={() => dispatch(toggleMobileNav({ open: true }))}
          >
            Edit Profile
          </button>
        </div>
      )}

      <div
        className={`${
          !isValid ? "mt-16" : "mt-10 md:mt-16"
        } mx-4  md:mx-6 flex justify-between items-start flex-col md:flex-row`}
      >
        <div ref={stickyInfoRef}>
          <div className="flex items-center font-bold tracking-tighter text-white">
            <h1 className="text-3xl md:text-2xl">{name ? name : email} </h1>
            {/* {vehiclesOwn > 0 && (
              <div className="flex items-center justify-center w-6 h-6 ml-1 text-xs rounded-full bg-ag-green text-main">
                {vehiclesOwn}
              </div>
            )} */}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-1">
            <div className="inline-flex items-center text-inputGray w-fit">
              <BiRocket
                className="-ml-0.5 mr-1.5 text-inputGray "
                size="1em"
                aria-hidden="true"
              />
              <p className="text-xs whitespace-nowrap">
                Joined {moment(new Date(createdAt)).format("MMMM YYYY")}
              </p>
            </div>
            {/* List user website link && favorite shop */}
            {location && (
              <div className="inline-flex items-center text-inputGray w-fit">
                <RiMapPin2Line
                  className="-ml-0.5 mr-1.5 "
                  aria-hidden="true"
                  size="1em"
                />
                <p className="text-xs whitespace-nowrap">
                  {location.city}, {location.stateAbbr}
                </p>
              </div>
            )}
          </div>
        </div>
        {links && <SocialLinks links={links} />}
      </div>
    </div>
  );
}
