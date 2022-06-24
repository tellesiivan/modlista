import React from "react";
import ExteriorMod from "./ExteriorMod";
import InteriorMod from "./InteriorMod";

export default function ModToShow({ mod }) {
  if (mod === "Interior") {
    return <InteriorMod />;
  } else if (mod === "Exterior") {
    return <ExteriorMod />;
  }

  return "Mod type does not exist";
}
