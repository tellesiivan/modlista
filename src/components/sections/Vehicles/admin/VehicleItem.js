import React from "react";

export default function VehicleItem({ vehicle }) {
  return (
    <div>
      <div className="px-2 mt-3 border divide-y rounded-md bg-main divide-alt ">
        {Object.entries(vehicle).map(([key, val]) => (
          <div
            key={key}
            className="flex items-center justify-between py-3 text-xs"
          >
            {key === "Trim" ? (
              <p className="mr-4 text-dark text-semibold">Trim</p>
            ) : (
              <p className="text-dark text-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
            )}
            {key === "Trim" ? (
              <p className="text-gray-400 truncate ">{`${val[0].name} | ${val[0].trim}`}</p>
            ) : (
              <p className="text-gray-400">{val}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
