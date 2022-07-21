import React from "react";

export default function VehicleItem({ vehicle }) {
  console.log(vehicle);
  return (
    <div>
      <div className="px-2 mt-3 divide-y rounded-md bg-alt divide-inputMain ">
        {Object.entries(vehicle).map(([key, val]) => (
          <div
            key={key}
            className="flex items-center justify-between py-3 text-xs"
          >
            {key === "Trim" ? (
              <p className="mr-4 text-inputGray text-semibold">Trim</p>
            ) : (
              <p className="text-inputGray text-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
            )}
            {key === "Trim" ? (
              <p className="truncate text-textGray ">{`${val[0].name} | ${val[0].trim}`}</p>
            ) : val === "" || val === undefined ? (
              <p className="text-textGray">N/A</p>
            ) : (
              <p className="text-textGray">{val}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
