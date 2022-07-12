import React, { useState, useEffect, useRef } from "react";
import useVehicleMods from "../../../../Hooks/useVehicleMods";

const modsTypes = [
  "Interior",
  "Exterior",
  "Suspension",
  "Exhaust",
  "Wheels/Tires",
  "Accessories",
  "Lighting",
];

export default function ModTabs({ vehicle }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef([]);
  const { mods, vehicleSelectedMods, loading } = useVehicleMods();
  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    vehicleSelectedMods(vehicle.id, modsTypes[activeTabIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle, activeTabIndex]);

  return (
    <div className="py-3">
      <div className="relative w-full overflow-x-scroll snap-x snap-mandatory scroll-p-0">
        <ul className="inline-flex w-full">
          {modsTypes.map((tab, idx) => {
            return (
              <li
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`flex-1 flex items-center justify-center px-4 h-12 text-sm text-center snap-end font-semibold ${
                  activeTabIndex === idx ? "text-black" : "text-gray-500"
                } cursor-pointer md:hover:bg-alt border-b border-greyDark `}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <span
          className="absolute bottom-0 block h-1 transition-all duration-500 bg-black rounded-full"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="px-2 pb-4 md:px-3">
        {modsTypes[activeTabIndex]} mods for {vehicle.Year} {vehicle.Make}{" "}
        {vehicle.Model}
      </div>
    </div>
  );
}
