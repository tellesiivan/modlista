import React from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleSection({ vehicles }) {
  return (
    <div className="px-2 py-4 md:px-3">
      <h1 className="mb-4 text-xl font-bold tracking-tight text-black">
        Builds.
      </h1>
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
