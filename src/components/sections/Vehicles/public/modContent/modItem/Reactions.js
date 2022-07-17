import { useState } from "react";
import EmojiReaction from "./EmojiReaction";
import { HeartIcon } from "@heroicons/react/outline";

export default function Reactions() {
  const [visible, setVisible] = useState(false); // initiate it at false
  console.log(visible);

  return (
    <div className="flex">
      {
        <button
          className="h-10 text-gray-500"
          onClick={() => setVisible(!visible)}
        >
          <HeartIcon className="w-5 h-5 mr-1" />
        </button>
      }
      {visible && (
        <div className="flex items-center w-auto p-0.5 space-x-1 border rounded border-alt">
          <EmojiReaction symbol="🚀" label="Booming" />
          <EmojiReaction symbol="👍" label="Like" />
          <EmojiReaction symbol="🔥" label="Fire" />
          <EmojiReaction symbol="👎" label="Dislike" />
        </div>
      )}
    </div>
  );
}
