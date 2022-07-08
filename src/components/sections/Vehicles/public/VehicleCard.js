import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function VehicleCard({ vehicle }) {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <div
      className={`relative flex items-center justify-start p-1 overflow-hidden border rounded-full cursor-pointer hover:bg-opacity-90 bg-alt border-greyDark ${
        vehicle.Mods ? "w-48" : "w-44"
      }`}
      onClick={() => router.push(`/b/${vehicle.id}`)}
    >
      <div className="relative w-8 h-8 mr-3 overflow-hidden rounded-full">
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
        <h2 className="text-xs font-bold text-dark">
          {vehicle.Year} {vehicle.Make} {vehicle.Model}
        </h2>
        {vehicle.Mods && (
          <p className="text-xs text-gray-600">
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
