import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import moment from "moment";
import placeholdeImge from "../../../../public/blurPlaceholder.png";

export default function HeaderSection({ profileUser }) {
  const { name, email, createdAt, coverImg, avatarImg } = profileUser;

  return (
    <div className="relative h-[225px] md:h-[255px] overflow-hidden ">
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-t from-main " />
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
        <div className="w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      )}

      <div className="absolute z-20 flex items-center left-4 bottom-10 md:left-6">
        {avatarImg ? (
          <Avatar src={avatarImg} css={{ size: "$20" }} zoomed />
        ) : (
          <Avatar
            text={email.charAt(0).toUpperCase()}
            color="gradient"
            textColor="white"
            css={{ size: "$18" }}
          />
        )}

        <div className="ml-2">
          <h2 className="text-lg font-bold tracking-wider text-gray-200 md:text-xl ">
            {name ? name : email}
          </h2>
          <p className="text-xs text-gray-400">
            Joined{" "}
            <span>{moment(new Date(createdAt)).format("MMMM YYYY")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
