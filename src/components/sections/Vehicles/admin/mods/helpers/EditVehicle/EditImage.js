import Image from "next/image";

export default function EditImage({ imgSrc, h, w, rounded }) {
  return (
    <div
      className={`relative ${h ? `h-${h}` : "h-24"} ${
        w ? `w-${w}` : "w-full"
      } ${rounded ?? ""}`}
    >
      <Image
        src={imgSrc}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
        className="absolute"
        alt=""
      />
      <div className="absolute rounded-full bottom-2 right-2 h-7 w-7 bg-ag-yellow"></div>
    </div>
  );
}
