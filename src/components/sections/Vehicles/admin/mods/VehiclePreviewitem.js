import Image from "next/image";
import { useState } from "react";

export default function VehiclePreviewitem({
  vehicle,
  modifying,
  setModifying,
}) {
  return (
    <div key={vehicle.Trim.id || vehicle.Trim.name}>
      <div
        className={`relative transition-colors duration-700 flex items-center justify-between min-w-full p-2 overflow-hidden rounded-md cursor-pointer ${
          modifying.id === vehicle.id ? "bg-ag-green" : "bg-greyDark"
        }`}
        onClick={() => setModifying(vehicle)}
      >
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            src={vehicle.coverImage}
            objectFit="cover"
            layout="fill"
            objectPosition="center"
            className="absolute "
            alt=""
          />
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">{vehicle.Year}</p>
          <h2 className="text-sm font-semibold text-dark">{vehicle.Make}</h2>
          <p className="text-xs text-gray-500">{vehicle.Model}</p>
        </div>
      </div>
    </div>
  );
}
