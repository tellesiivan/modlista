import Image from "next/image";

export default function ModVehicleHeaderImage({
  Model,
  Make,
  Year,
  coverImage,
}) {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-md">
      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-alt via-transparent to-transparent " />
      <div className="absolute z-20 bottom-4 left-3">
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
        className="absolute rounded-md"
        alt=""
      />
    </div>
  );
}
