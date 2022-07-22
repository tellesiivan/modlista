import React from "react";
import ModItem from "./modItem/ModItem";

export default function ModList({ mods }) {
  return (
    <ul role="list" className="pb-16 space-y-4 md:space-y-2 md:pb-0">
      {mods.map((mod) => (
        <ModItem mod={mod} key={mod.primaryImage.path} />
      ))}
    </ul>
  );
}
