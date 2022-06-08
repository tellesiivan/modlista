import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import moment from "moment";

export default function HeaderSection({ profileUser }) {
  const { name, email, createdAt, coverImg, avatarImg } = profileUser;

  return (
    <div className="relative h-[250px] overflow-hidden ">
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-t from-main " />
      {coverImg ? (
        <Image
          onLoadingComplete={() => console.log("complete")}
          src={coverImg}
          alt="banner image"
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      )}

      <div className="absolute z-20 flex items-center left-4 bottom-10 md:left-6">
        {avatarImg ? (
          <Avatar
            src={avatarImg}
            size="xl"
            color="gradient"
            bordered
            zoomed
            borderWeight="bold"
          />
        ) : (
          <Avatar
            text={email.charAt(0).toUpperCase()}
            color="gradient"
            textColor="white"
            size="xl"
          />
        )}

        <div className="ml-2">
          <h2 className="font-bold text-gray-200 md:font-semibold text-md md:text-lg">
            {name ? name : email}
          </h2>
          <p className="-mt-1 text-xs text-gray-400 ">
            Member since{" "}
            <span>{moment(new Date(createdAt)).format("YYYY")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
