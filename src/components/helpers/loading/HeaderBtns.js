import React from "react";

function HeaderBtns() {
  return (
    <div className="flex flex-row mx-2 space-x-3 animate-pulse">
      <span className="w-10 h-4 rounded-lg bg-slate-700"></span>
      <div className="w-10 h-10 rounded-full bg-slate-700"></div>
    </div>
  );
}

export { HeaderBtns };
