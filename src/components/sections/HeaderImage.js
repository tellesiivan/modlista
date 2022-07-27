import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

export default function HeaderImage() {
  const [user] = useAuthState(auth);

  return (
    <div className="relative m-3 h-[500px] w-[calc(100%_-_24px)]  bg-main">
      <div className="absolute z-20 hidden md:inline-flex bottom-2 right-2 bg-opacity-80">
        {" "}
        <h2 className="mx-auto font-bold tracking-wider text-center text-white md:text-2xl group ">
          Your{" "}
          <span className="italic font-light text-ag-green group-hover:text-ag-yellow">
            mods
          </span>{" "}
          in one place.
        </h2>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1626145500048-d0fc3d2ac2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
