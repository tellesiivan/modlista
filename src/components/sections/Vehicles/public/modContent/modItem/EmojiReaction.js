import React, { useState } from "react";
import useHandleReactions from "../../../../../../Hooks/Post/useHandleReactions";

export default function EmojiReaction({ emoji, name, path, setVisible }) {
  const [tooltip, showTooltip] = useState(false);
  const { addReaction } = useHandleReactions();

  return (
    <>
      <div
        className={`flex items-center justify-center space-x-1 rounded-md w-8 h-8 md:hover:bg-alt text-[13px] cursor-pointer transition-all duration-300 relative`}
        role="img"
        aria-label={name ? name : ""}
        aria-hidden={name ? "false" : "true"}
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => {
          setTimeout(() => showTooltip(false), 50);
        }}
        onClick={() => {
          addReaction(name, path);
          setVisible(false);
        }}
      >
        {emoji}
        {tooltip && (
          <span className="absolute p-2 text-xs rounded text-ag-green bg-ag-hover -top-10 whitespace-nowrap">
            {name}
          </span>
        )}
      </div>
    </>
  );
}
