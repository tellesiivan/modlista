import { useState } from "react";
import EmojiReaction from "./EmojiReaction";
import { HeartIcon } from "@heroicons/react/outline";

const reactions = {
  Fire: { name: "Fire", emoji: "🔥" },
  Like: { name: "Like", emoji: "📈" },
  Boomin: { name: "Boomin", emoji: "🚀" },
  Dislike: { name: "Dislike", emoji: "📉" },
};

export default function Reactions({ path }) {
  const [visible, setVisible] = useState(false); // initiate it at false

  return (
    <div className="relative flex">
      {
        <button
          className={`h-10 ${
            visible ? "text-ag-green" : "text-gray-500"
          } transition-all duration-500 hover:text-ag-green`}
          onClick={() => setVisible(!visible)}
        >
          <HeartIcon className="w-5 h-5 mr-1" />
        </button>
      }
      {visible && (
        <div
          className={`flex items-center  p-0.5 space-x-1 border rounded-md border-alt absolute left-6 bg-main z-20`}
        >
          {Object.keys(reactions).map((key) => {
            return (
              <EmojiReaction
                path={path}
                setVisible={setVisible}
                emoji={reactions[key].emoji}
                name={reactions[key].name}
                key={reactions[key].name}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
