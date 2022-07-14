import React from "react";

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  // More files...
];

export default function ModList({ mods }) {
  return (
    <ul role="list" className="space-y-2">
      {mods.map((mod) => (
        <li
          key={mod.primaryImage.path}
          className="relative flex items-center p-2 space-x-4 overflow-hidden rounded-md bg-alt "
        >
          <div className="block w-32 h-32 overflow-hidden rounded-md bg-main group">
            <img
              src={mod.primaryImage.url}
              alt=""
              className="w-full h-full pointer-events-none"
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
            <div className="w-full rounded-md bg-main h-11 "></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
