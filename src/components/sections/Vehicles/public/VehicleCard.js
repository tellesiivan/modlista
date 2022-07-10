import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function VehicleCard({
  vehicle,
  activeVehicle,
  setActiveVehicle,
}) {
  const router = useRouter();

  return (
    <div
      className={`relative flex items-center justify-start pl-1 py-0.5 overflow-hidden border rounded-full cursor-pointer w-fit pr-3 ${
        activeVehicle.id === vehicle.id
          ? "bg-dark border-black"
          : "bg-alt border-greyDark"
      }`}
      onClick={() => setActiveVehicle(vehicle)}
    >
      <div className="relative mr-3 overflow-hidden rounded-full w-7 h-7">
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
        <h2
          className={`text-xs font-bold ${
            activeVehicle.id === vehicle.id ? "text-main" : "text-dark"
          }`}
        >
          {vehicle.Year} {vehicle.Make} {vehicle.Model}
        </h2>
        {vehicle.Mods && (
          <p
            className={`text-[11px]  ${
              activeVehicle.id === vehicle.id
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >
            {vehicle.Mods > 1
              ? `${vehicle.Mods} modifications listed`
              : `${vehicle.Mods} modification listed`}
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
