import React from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleSection({ vehicles }) {
  return (
    <div className="grid grid-cols-2 border-b divide-x divide-alt border-alt">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.Trim.id || vehicle.Trim.name}
          vehicle={vehicle}
        />
      ))}
    </div>
  );
}
