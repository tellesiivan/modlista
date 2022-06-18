import Image from "next/image";
import { useState } from "react";
import AddModsContainer from "./AddModsContainer";
import VehiclePreviewitem from "./VehiclePreviewitem";

export default function VehiclePreviewsTable({ vehicles }) {
  const [modifying, setModifying] = useState(vehicles[0]);

  return (
    <div className="pt-6 pb-3 space-y-5 ">
      <div className="p-3 space-y-3 divide-y rounded-md bg-alt divide-main">
        <div className="space-y-3">
          <h2 className="font-bold tracking-wide text-gray-200 text-md">
            Garage
          </h2>
          <p className="text-xs tracking-wide text-gray-500">
            Start adding modifications to any vehicle by clicking on the vehicle
            card.
          </p>
          <div className="space-y-2">
            {vehicles.map((vehicle) => (
              <VehiclePreviewitem
                vehicle={vehicle}
                key={vehicle.Trim.id || vehicle.Trim.name}
                modifying={modifying}
                setModifying={setModifying}
              />
            ))}
          </div>
        </div>
        <div className="pt-3">
          <p className="text-xs tracking-wide text-gray-500 ">
            {vehicles.length == 2
              ? "You reached the max amount of vehicle's that can be added to your garage."
              : `You've ${2 - vehicles.length} slot left in your garage.`}
          </p>
        </div>
      </div>
      <AddModsContainer vehicleModifying={modifying} />
    </div>
  );
}
