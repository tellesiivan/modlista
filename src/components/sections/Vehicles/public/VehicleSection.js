import React, { useState } from "react";
import ModTabs from "./ModTabs";
import VehicleCard from "./VehicleCard";

export default function VehicleSection({ vehicles }) {
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);

  return (
    <div>
      <div className={`flex space-x-2 px-2 md:px-4`}>
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.Trim.id || vehicle.Trim.name}
            vehicle={vehicle}
            setActiveVehicle={setActiveVehicle}
            activeVehicle={activeVehicle}
          />
        ))}
      </div>
      <ModTabs vehicle={activeVehicle} />
    </div>
  );
}
