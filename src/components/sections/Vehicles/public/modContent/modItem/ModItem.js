import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import blurImgUrl from "../../../../../../../public/media/blurImgUrl";
import Link from "next/link";
import Reactions from "./Reactions";

export default function ModItem({ mod }) {
  return (
    <li className="relative flex items-center p-2 space-x-4 overflow-hidden border rounded bg-dark border-alt">
      <div className="block overflow-hidden rounded-lg w-28 h-28 group">
        <Image
          src={mod.primaryImage.url}
          alt={mod.title}
          width={120}
          height={120}
          layout="responsive"
          placeholder="blur"
          blurDataURL={blurImgUrl}
        />
      </div>
      <div className="flex-1 h-full space-y-3">
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="block text-sm font-semibold tracking-tight text-gray-300">
              {mod.title}
            </p>
            <p className="block text-xs font-medium text-gray-500">
              ${mod.price}
            </p>
          </div>
          <p className="block text-xs text-textGray">{mod.desc}</p>
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
