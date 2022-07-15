import React, { useState } from "react";

export default function EmojiReaction({ symbol, label }) {
  const [tooltip, showTooltip] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-center space-x-1 rounded-sm w-8 h-8 hover:bg-alt text-[13px] cursor-pointer transition-colors relative"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => {
          setTimeout(() => showTooltip(false), 50);
        }}
      >
        {symbol}
        {tooltip && (
          <span className="absolute p-2 text-xs rounded text-ag-green bg-ag-hover -top-10 whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
