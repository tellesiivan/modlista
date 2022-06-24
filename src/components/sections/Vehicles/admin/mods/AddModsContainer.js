import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ModToShow from "../../../../templates/ModTypes/ModToShow";
import ModTypeDropdown from "./helpers/ModTypeDropdown";
import DetailsAndSubmission from "./helpers/DetailsAndSubmission";

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
  const addingMod = useSelector((state) => state.modifications.adding);
  const { Make, Model, Year, Trim, coverImage, id } = vehicleModifying;
  const [type, setType] = useState(addingMod?.mod || modType[0].name);
  const [viewDetails, setViewDetails] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  useEffect(() => {
    if (addingMod) {
      let show = true;
      for (const [key, value] of Object.entries(addingMod)) {
        if (key === "url") {
          Object.entries(value).forEach(([key, value]) => {
            if (value === "" || value === false) {
              // console.log(key);
              show = false;
            }
          });
        } else if (
          (value === "" || value === 0 || value.length === 0) &&
          key !== "url"
        ) {
          show = false;
          // console.log(key);
        }
      }
      setShowSubmit(show);
    }
  }, [addingMod]);

  return (
    <>
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
        <div className="p-3 mt-8">
          <ModToShow mod={type} />
        </div>
      </div>
      {showSubmit && (
        <DetailsAndSubmission
          viewDetails={viewDetails}
          setViewDetails={setViewDetails}
          vehicle={vehicleModifying}
          mod={addingMod}
        />
      )}
    </>
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
