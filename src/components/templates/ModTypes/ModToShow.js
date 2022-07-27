import React from "react";
import ExteriorMod from "./ExteriorMod";
import InteriorMod from "./InteriorMod";
import SuspensionMod from "./SuspensionMod";

export default function ModToShow({ mod }) {
  if (mod === "Interior") {
    return <InteriorMod />;
  } else if (mod === "Exterior") {
    return <ExteriorMod />;
  } else if (mod === "Suspension") {
    return <SuspensionMod />;
  }

  return "Mod type does not exist";
}
