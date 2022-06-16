import React from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleSection({ vehicles }) {
  console.log(vehicles);
  return (
    <div className="grid gap-2 p-2 sm:grid-cols-2 ">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.Trim.id || vehicle.Trim.name}
          vehicle={vehicle}
        />
      ))}
    </div>
  );
}
