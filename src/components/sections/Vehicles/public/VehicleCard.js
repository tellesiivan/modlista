import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function VehicleCard({ vehicle }) {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div
      className="relative flex items-center justify-between h-24 min-w-full p-3 overflow-hidden cursor-pointer hover:bg-alt hover:bg-opacity-10"
      onClick={() => router.push(`/b/${vehicle.id}`)}
    >
      <div className="relative w-12 h-12 overflow-hidden rounded-full">
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
        <p className="text-xs text-gray-400 md:text-sm">{vehicle.Year}</p>
        <h2 className="font-bold text-gray-200 md:text-md">{vehicle.Make}</h2>
        <p className="text-xs text-gray-500 md:text-sm">{vehicle.Model}</p>
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
