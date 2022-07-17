import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import blurImgUrl from "../../../../../../../public/media/blurImgUrl";
import Link from "next/link";
import Reactions from "./Reactions";

export default function ModItem({ mod }) {
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
          blurDataURL={blurImgUrl}
        />
      </div>
      <div className="w-full h-full mt-3 sm:space-y-3 sm:flex-1 sm:mt-0">
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="block text-sm font-semibold tracking-tight text-gray-300">
              {mod.title}
            </p>
            <p className="block text-xs font-medium text-gray-500">
              ${mod.price}
            </p>
          </div>
          <p className="block mb-3 text-xs text-textGray sm:mb-0">{mod.desc}</p>
        </div>
        <div className="flex flex-wrap pb-3">
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
          <Reactions />
          <Link href={mod.link}>
            <a
              className="flex items-center p-1 rounded-full text-ag-green text-opacity-70 hover:text-opacity-90 "
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
