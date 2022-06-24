import Image from "next/image";

export default function CustomAvatar({ size, src, customStyle }) {
  return (
    <div
      className={`relative w-${size.width ? size.width : "8"} h-${
        size.height ? size.height : "8"
      } overflow-hidden rounded-full ${customStyle ?? ""}`}
    >
      <Image
        src={src}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
        className="absolute "
        alt=""
      />
    </div>
  );
}
