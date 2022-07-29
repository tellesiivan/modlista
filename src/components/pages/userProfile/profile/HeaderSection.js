import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import moment from "moment";
import { useRouter } from "next/router";

import { BiRocket } from "react-icons/bi";
import {
  toggleMainModal,
  setMainModalContent,
} from "../../../../store/slices/modalsSlice";
import { RiMapPin2Line, RiQrCodeLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../../../store/slices/modalsSlice";
import { useRef } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { triggerStickyUserInfo } from "../../../../store/slices/profileSlice";
import SocialLinks from "../links/SocialLinks";
import QRcode from "../../../../utils/QRcode";

const pathBlur = "/blurPlaceholder.png";
const placeholderHeadImg = "/media/placeholders/header_placeholder.jpeg";

export default function HeaderSection({ profileUser, isValid }) {
  const router = useRouter();

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
    uid,
  } = profileUser;
  const dispatch = useDispatch();

  const profilePreview = (content) => {
    dispatch(
      setMainModalContent({
        content: content,
      })
    );
    dispatch(toggleMainModal({ open: true }));
  };

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
      <div className="relative h-[155px] md:h-[280px] ">
        <div
          className="absolute z-30 flex items-center justify-center w-8 h-8 text-white transition-transform duration-300 rounded-full cursor-pointer bg-main right-2 bottom-2 hover:scale-110 bg-opacity-60"
          onClick={() =>
            profilePreview(
              <QRcode
                valueLink={
                  window.location.href ?? `${window.location.hostname}/u/${uid}`
                }
                userName={name}
              />
            )
          }
        >
          <RiQrCodeLine aria-hidden="true" size="1em" />
        </div>
        <div className="absolute inset-0 z-10 w-full h-full " />
        <Image
          onLoadingComplete={() => console.log("complete")}
          src={coverImg ? coverImg : placeholderHeadImg}
          alt="banner image"
          className="w-full h-full "
          layout="fill"
          placeholder="blur"
          blurDataURL={pathBlur}
          objectFit="cover"
        />
        <div
          className="absolute z-20 flex items-center border-[5px] rounded-full left-2 -bottom-14 md:left-4 border-main cursor-pointer"
          onClick={() =>
            profilePreview(
              <>
                <div className="relative h-[384px] w-[384px]">
                  <Image
                    src={avatarImg}
                    alt="banner image"
                    className="w-full h-full "
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={pathBlur}
                    objectFit="cover"
                    objectPosition="center center"
                  />
                </div>
              </>
            )
          }
        >
          {avatarImg ? (
            <Avatar
              src={avatarImg}
              css={{ size: "$24" }}
              zoomed
              borderWeight="0px"
              color="white"
              className="cursor-pointer"
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
        } ml-4 mr-2  md:mx-6 flex justify-between items-start flex-row`}
      >
        <div ref={stickyInfoRef}>
          <div className="flex items-center font-extrabold tracking-tight text-white md:font-bold">
            <h1 className="text-3xl md:text-2xl">
              {name ? name : email.split("@")[0]}
            </h1>
            {/* {vehiclesOwn > 0 && (
              <div className="flex items-center justify-center w-6 h-6 ml-1 text-xs rounded-full bg-ag-green text-main">
                {vehiclesOwn}
              </div>
            )} */}
          </div>
        </div>
        {links && <SocialLinks links={links} />}
      </div>
      <div
        className={`flex mx-4 mb-2 space-x-4 ${
          links ? "md:-mt-1 mt-0" : "mt-1"
        } md:mx-6`}
      >
        <div className="inline-flex items-center text-inputGray w-fit">
          <BiRocket
            className="-ml-0.5 mr-1 text-inputGray "
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
              className="-ml-0.5 mr-1 "
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
  );
}
