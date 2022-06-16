import React from "react";

export default function VehicleCard({ vehicle }) {
  return (
    <div className="flex items-center justify-between h-20 min-w-full p-2 rounded-sm bg-inputMain">
      <div>
        <img src={vehicle.coverImage} alt="" className="object-cover w-6 h-6" />
      </div>
      <h2 className="text-white">
        {vehicle.Make} \ {vehicle.Model}
      </h2>
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
