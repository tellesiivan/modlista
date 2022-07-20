import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function VehicleCard({
  vehicle,
  activeVehicle,
  setActiveVehicle,
}) {
  return (
    <div
      className={`relative flex items-center justify-start pl-0.5 py-0.5 overflow-hidden rounded-full cursor-pointer pr-4 border ${
        activeVehicle.id === vehicle.id
          ? "bg-ag-green  border-transparent"
          : "bg-main hover:bg-alt border-greyDark"
      }`}
      onClick={() => setActiveVehicle(vehicle)}
    >
      <div className="relative w-8 h-8 mr-2.5 overflow-hidden rounded-full">
        <Image
          src={vehicle.coverImage}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
          className="absolute "
          alt=""
        />
      </div>
      <div className="truncate text-start">
        <h4
          className={`text-[11px] font-bold -mb-0.5 ${
            activeVehicle.id === vehicle.id ? "text-alt" : "text-textGray"
          }`}
        >
          {vehicle.Year} {vehicle.Make} {vehicle.Model}
        </h4>
        {vehicle.Mods && (
          <p
            className={`text-[11px]  ${
              activeVehicle.id === vehicle.id
                ? "text-gray-800"
                : "text-gray-600"
            }`}
          >
            {vehicle.Mods > 1
              ? `${vehicle.Mods} mods `
              : `${vehicle.Mods} mod `}
          </p>
        )}
      </div>
    </div>
  );
}

// {
//      "Make": "Lamborghini",
//      "Model": "Urus",
//     "Year": 2019,
//     "Trim": {
//         "id": 401784260,
//         "name": "4dr SUV AWD (4.0L 8cyl Turbo 8A)",
//         "submodel": {
//             "body": "SUV",
//             "modelName": "Urus SUV",
//             "niceName": "suv"
//         },
//         "trim": "Base"
//     },
//     "coverImage": "https://firebasestorage.googleapis.com/v0/b/paartly.appspot.com/o/vehicles%2Fibtuy3CURWrY31BVDHAJ%2FcwItr836W8X2yUareEpIelbH6Rx1?alt=media&token=2fa4b94c-bec6-4817-953c-77cf3cad0435"
// }
