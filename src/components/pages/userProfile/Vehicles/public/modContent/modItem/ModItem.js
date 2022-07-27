import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Reactions from "./Reactions";
import ReactionTag from "./ReactionTag";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../../../../firebase/clientApp";

const pathBlur = "/blurPlaceholder.png";

export default function ModItem({ mod }) {
  const reactionPath = `vehicles/${mod.vehicleID}/${mod.modType}/${mod.modId}`;
  const [showReaction, setShowReaction] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (mod.reactions) {
      let x = false;
      Object.keys(mod.reactions).map((key) => {
        if (mod.reactions[key].length > 0) {
          x = true;
        }
      });
      setShowReaction(x);
    }
  }, [mod]);

  return (
    <li className="relative flex flex-col items-center p-2 overflow-hidden border rounded sm:space-x-4 sm:flex-row bg-dark border-alt">
      <div className="relative block w-full overflow-hidden rounded sm:rounded-lg sm:w-28 sm:h-28 group h-60">
        <Image
          src={mod.primaryImage.url}
          alt={mod.title}
          className=""
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={pathBlur}
        />
      </div>
      <div className="w-full h-full mt-3 sm:flex-1 sm:mt-0">
        <div className="pt-1 space-y-3">
          <div className="flex items-center justify-between">
            <p className="block text-sm font-semibold tracking-tight text-gray-300">
              {mod.title}
            </p>
            <p className="block ml-10 text-sm font-medium text-gray-400 md:ml-8">
              ${mod.price}
            </p>
          </div>
          <p className="block mb-3 text-xs text-textGray sm:mb-0">{mod.desc}</p>
        </div>
        <div className="flex flex-wrap my-3">
          {mod.tags.map((tag) => (
            <span
              className="inline-flex items-center px-3 py-1 text-xs tracking-wide text-ag-yellow rounded-full bg-accent-yellow mr-1.5 mt-1.5"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between w-full py-3 border-t border-alt">
          <div className="flex items-center justify-center ">
            <Reactions path={reactionPath} />
            {mod.reactions && showReaction && (
              <div className="flex flex-wrap ">
                {Object.keys(mod.reactions).map((key) => {
                  if (mod.reactions[key].length > 0) {
                    return (
                      <ReactionTag
                        key={key}
                        reacted={
                          !!mod.reactions[key].find((r) => r == user?.uid)
                        }
                        reactionType={key}
                        reactionCount={mod.reactions[key].length}
                        path={reactionPath}
                      />
                    );
                  }
                })}
              </div>
            )}
          </div>

          <Link href={mod.link}>
            <a
              className="flex items-center p-1 rounded-full text-ag-green text-opacity-90 hover:text-opacity-100 "
              target="_blank"
            >
              <ExternalLinkIcon className="w-4 h-4 mr-1" />{" "}
              <span className="text-xs whitespace-nowrap">Purchase Link</span>
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
}
