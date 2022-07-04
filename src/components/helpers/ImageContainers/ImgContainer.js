import Image from "next/image";

export default function ImgContainer({ imgSrc, h, w, rounded }) {
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
    </div>
  );
}
