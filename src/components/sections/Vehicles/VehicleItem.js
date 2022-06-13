import React from "react";

export default function VehicleItem({ vehicle }) {
  return (
    <div>
      <div className="px-2 mt-2 mb-8 divide-y rounded-md divide-alt bg-inputMain">
        {Object.entries(vehicle).map(([key, val]) => (
          <div
            key={key}
            className="flex items-center justify-between py-3 text-xs"
          >
            {key === "trim" ? (
              <p className="text-gray-300 text-semibold">Trim</p>
            ) : (
              <p className="text-gray-300 text-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
            )}
            {key === "trim" ? (
              <p className="text-gray-500">{`${val[0].name} | ${val[0].trim}`}</p>
            ) : (
              <p className="text-gray-500">{val}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
