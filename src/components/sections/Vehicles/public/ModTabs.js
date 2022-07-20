import React, { useState, useEffect, useRef } from "react";
import useVehicleMods from "../../../../Hooks/useVehicleMods";
import ModList from "./modContent/ModList";
import NoMods from "./modContent/NoMods";

const modsTypes = [
  "Interior",
  "Exterior",
  "Suspension",
  "Exhaust",
  "Wheels & Tires",
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
    <div className="pt-2">
      <div className="relative w-full overflow-x-scroll snap-x snap-mandatory scroll-p-0">
        <ul className="sticky inline-flex w-full top-96">
          {modsTypes.map((tab, idx) => {
            return (
              <li
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`flex-1 flex items-center justify-center px-4 h-11 text-sm text-center snap-end font-semibold ${
                  activeTabIndex === idx ? "text-white" : "text-gray-500"
                } cursor-pointer md:hover:bg-alt border-b border-greyDark  whitespace-nowrap`}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <span
          className="absolute bottom-0 block h-[0.2em] transition-all duration-500 bg-white rounded-full"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="p-2 ">
        {/* TODO: Add loading state UI */}
        {mods && mods.length !== 0 ? (
          <>
            <ModList mods={mods} />
          </>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <NoMods mod={modsTypes[activeTabIndex]} />
        )}
      </div>
    </div>
  );
}
