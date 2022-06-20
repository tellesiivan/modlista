import Image from "next/image";
import React, { useState } from "react";
import ModToShow from "../../../../templates/ModTypes/ModToShow";
import ModTypeDropdown from "./helpers/ModTypeDropdown";

const modType = [
  { name: "Interior" },
  { name: "Exterior" },
  { name: "Suspension" },
  { name: "Exhaust" },
  { name: "Wheels/Tires" },
  { name: "Accessories/Other" },
  { name: "Lighting" },
];

export default function AddModsContainer({ vehicleModifying }) {
  const { Make, Model, Year, Trim, coverImage, id } = vehicleModifying;
  const [type, setType] = useState(modType[0].name);

  return (
    <div className="w-full overflow-hidden rounded-md bg-alt">
      <div className="relative w-full h-40 ">
        <div className="absolute z-10 w-full h-full bg-gradient-to-t from-alt via-transparent to-transparent " />
        <div className="absolute z-20 bottom-10 left-3">
          <h4 className="font-semibold text-white text-md">{Year}</h4>
          <p className="text-sm text-gray-200">
            {Make} {Model}
          </p>
        </div>
        <Image
          src={coverImage}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
          className="absolute "
          alt=""
        />
        <ModTypeDropdown mods={modType} setType={setType} type={type} />
      </div>
      <div className="p-3 mt-7">
        <ModToShow mod={type} />
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
