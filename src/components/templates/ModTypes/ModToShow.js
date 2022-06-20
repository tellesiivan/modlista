import React from "react";
import InteriorMod from "./InteriorMod";

export default function ModToShow({ mod }) {
  if (mod === "Interior") {
    return <InteriorMod />;
  }

  return "Mod type does not exist";
}
