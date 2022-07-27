import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

export default function HeaderImage() {
  const [user] = useAuthState(auth);

  return (
    <div className="relative m-3 h-[500px] w-[calc(100%_-_24px)]  bg-main">
      <div className="absolute z-20 hidden h-20 bg-alt rounded-xl w-60 md:inline-flex md:w-4/12 bottom-2 right-2 bg-opacity-80"></div>
      <Image
        src="https://images.unsplash.com/photo-1656867032538-2f2f8c5698a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"
        alt="banner image"
        layout="fill"
        placeholder="blur"
        blurDataURL="/media/placeholders/blurPlaceholder.png"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}
