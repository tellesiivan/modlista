import React from "react";
import AccessoriesMod from "./AccessoriesMod";
import ExhaustMod from "./ExhaustMod";
import ExteriorMod from "./ExteriorMod";
import InteriorMod from "./InteriorMod";
import LightingMod from "./LightingMod";
import SuspensionMod from "./SuspensionMod";
import WheelsAndTiresMod from "./WheelsAndTiresMod";

export default function ModToShow({ mod }) {
  if (mod === "Interior") {
    return <InteriorMod />;
  } else if (mod === "Exterior") {
    return <ExteriorMod />;
  } else if (mod === "Suspension") {
    return <SuspensionMod />;
  } else if (mod === "Exhaust") {
    return <ExhaustMod />;
  } else if (mod === "Wheels & Tires") {
    return <WheelsAndTiresMod />;
  } else if (mod === "Accessories") {
    return <AccessoriesMod />;
  } else if (mod === "Lighting") {
    return <LightingMod />;
  }

  return "Mod type does not exist";
}
