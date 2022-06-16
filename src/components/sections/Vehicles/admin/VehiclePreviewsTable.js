import Image from "next/image";

export default function VehiclePreviewsTable({ vehicles }) {
  return (
    <div className="p-3 mb-6 rounded-md bg-alt ">
      <div className="space-y-3">
        <h2 className="font-bold tracking-wide text-gray-200 text-md">
          Current Garage
        </h2>
        <p className="text-xs tracking-wide text-white ">
          Start adding modifications to any vehicle by clicking on the vehicle
          card.
        </p>
        <div className="space-y-2">
          {vehicles.map((vehicle) => (
            <div key={vehicle.Trim.id || vehicle.Trim.name}>
              <div className="relative flex items-center justify-between min-w-full p-2 overflow-hidden rounded-md cursor-pointer bg-main">
                <div className="relative w-10 h-10 overflow-hidden rounded-full">
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
                  <p className="text-xs text-gray-400">{vehicle.Year}</p>
                  <h2 className="font-bold text-white text-md">
                    {vehicle.Make}
                  </h2>
                  <p className="text-xs text-gray-500">{vehicle.Model}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
