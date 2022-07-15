import Image from "next/image";
import React from "react";
import blurImgUrl from "../../../../../../public/media/blurImgUrl";

export default function ModList({ mods }) {
  return (
    <ul role="list" className="space-y-3">
      {mods.map((mod) => (
        <li
          key={mod.primaryImage.path}
          className="relative flex items-center p-2 space-x-4 overflow-hidden rounded bg-dark "
        >
          <div className="block overflow-hidden rounded w-28 h-28 group">
            <Image
              src={mod.primaryImage.url}
              alt={mod.title}
              width={120}
              height={120}
              layout="responsive"
              placeholder="blur"
              blurDataURL={blurImgUrl}
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {mod.title}</span>
            </button>
          </div>
          <div className="flex-1">
            <div>
              <p className="block text-sm font-semibold tracking-tight text-gray-300">
                {mod.title}
              </p>
              <p className="block my-2 text-xs text-textGray">{mod.price}</p>
            </div>
            <div className="mb-2">
              {mod.tags.map((tag) => (
                <span
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600 rounded-full bg-main"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="w-full border-t border-alt"></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
