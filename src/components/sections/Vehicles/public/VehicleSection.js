import React from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleSection({ vehicles }) {
  return (
    <div className="px-2 py-2 md:px-5">
      <div className={`grid grid-cols-${vehicles.length} gap-2`}>
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.Trim.id || vehicle.Trim.name}
            vehicle={vehicle}
          />
        ))}
      </div>
    </div>
  );
}
