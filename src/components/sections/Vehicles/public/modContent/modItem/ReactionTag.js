import React from "react";
import useHandleReactions from "../../../../../../Hooks/Post/useHandleReactions";

const reactions = {
  Fire: { name: "Fire", emoji: "🔥" },
  Like: { name: "Like", emoji: "📈" },
  Boomin: { name: "Boomin", emoji: "🚀" },
  Dislike: { name: "Dislike", emoji: "📉" },
};

export default function ReactionTag({
  reactionType,
  reactionCount,
  path,
  reacted,
}) {
  const { addReaction } = useHandleReactions();

  return (
    <button
      className={`inline-flex items-center py-0  pl-1.5 pr-2.5 text-xs rounded-full   mr-1 mt-0.5 cursor-pointer md:hover:opacity-75 h-7 ${
        reactionCount === 0 && "opacity-0"
      } ${reacted ? "bg-accent-purple text-white" : "bg-inputMain text-gray-400"}`}
      onClick={() => addReaction(reactions[reactionType].name, path)}
    >
      <span className="w-4 h-4 mr-1.5">{reactions[reactionType]?.emoji}</span>
      <span className="font-bold ">{reactionCount}</span>
    </button>
  );
}
3;
2;
