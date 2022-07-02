import Image from "next/image";
import placeholderImge from "../../../public/blurPlaceholder.png";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

export default function HeaderImage() {
  const [user] = useAuthState(auth);

  return (
    <div className="relative w-full h-screen">
      {/* <div className="absolute z-10 w-full h-full bg-gradient-to-t from-alt via-transparent to-transparent " /> */}
      <Image
        src="http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/05/12190246/IMG_5915Copyrighted-By-Naveed-Yousufzai.jpg"
        alt="banner image"
        layout="fill"
        placeholder="blur"
        blurDataURL={placeholderImge}
        objectFit="cover"
      />
    </div>
  );
}
